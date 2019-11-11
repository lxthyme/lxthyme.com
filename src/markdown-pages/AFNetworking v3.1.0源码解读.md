---
path: "/blog/my-first-post"
date: "2019-05-04"
title: "My first blog post"
---

## AFNetworking v3.1.0源码解读

### Get 请求

#### Get 请求流程



<!--more-->


```flow
st=>start: Get 请求流程

op1=>operation: AFHTTPSessionManager 的 Get 请求开始
op2=>operation: AFHTTPSessionManager 创建 NSMutableURLRequest
op3=>operation: AFURLSessionManager 使用 NSMutableURLRequest 创建 NSURLSessionDataTask
op4=>operation: AFURLSessionManager 设置 NSURLSessionDataTask 的 delegate
op5=>operation: 调用 NSURLSessionDataTask 的 resume 方法, 开始执行请求
op6=>operation: AFURLSessionManagerTaskDelegate 的回调中处理网络请求返回的数据
op7=>operation: AFURLSessionManager 清理 NSURLSessionDataTask 的配置
e=>end: AFHTTPSessionManager 的 Get 请求结束

st->op1->op2->op3->op4->op5->op6->op7->e
```

#### 代码

```objective-c
AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
NSString *urlString = @"http://httpbin.org/get";
[manager GET:urlString parameters:@{} progress:^(NSProgress * _Nonnull downloadProgress) {
    NSLog(@"completedUnitCount: %lld\t\ttotalUnitCount: %lld", downloadProgress.completedUnitCount, downloadProgress.totalUnitCount);
} success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
    NSLog(@"responseObject: %@", responseObject);
} failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
    NSLog(@"Error: %@", error);
}];
```

#### 流程解析

###### 创建 `NSMutableRequest`
    ```objective-c
    //设置NSMutableURLRequest的属性
     static NSArray * AFHTTPRequestSerializerObservedKeyPaths() {
        static NSArray *_AFHTTPRequestSerializerObservedKeyPaths = nil;
        static dispatch_once_t onceToken;
        dispatch_once(&onceToken, ^{
            //allowsCellularAccess 允许使用数据流量
            //cachePolicy 缓存策略
            //HTTPShouldHandleCookies 处理Cookie
            //HTTPShouldUsePipelining 批量请求
            //networkServiceType 网络状态
            //timeoutInterval 超时
            _AFHTTPRequestSerializerObservedKeyPaths = @[NSStringFromSelector(@selector(allowsCellularAccess)), NSStringFromSelector(@selector(cachePolicy)), NSStringFromSelector(@selector(HTTPShouldHandleCookies)), NSStringFromSelector(@selector(HTTPShouldUsePipelining)), NSStringFromSelector(@selector(networkServiceType)), NSStringFromSelector(@selector(timeoutInterval))];
        });

        return _AFHTTPRequestSerializerObservedKeyPaths;
    }
    ```

![配置NSMutableURLRequest对象](8D388C9854D9596752262E2819D7E2D3.jpg)

先设置HTTP header，
之后格式化请求参数，
设置参数的编码类型。
这个是这个方法的基本操作流程。对于Get操作来说，参数是直接拼接在请求地址后面。

###### 配置NSURLSessionDataTask对象

![配置NSURLSessionDataTask对象](47D205C470E04F76035AEBC968C185F6.jpg)

之后配置NSMutableURLRequest对象就需要配置NSURLSessionDataTask对象了。主要分为2个步骤:
    1. 创建NSURLSessionDataTask对象实例，
    2. 给NSURLSessionDataTask对象实例设置Delegate。用于实时了解网络请求的过程。


![给NSURLSessionDataTask对象实例设置Delegate](http://upload-images.jianshu.io/upload_images/656644-d75418e6972979c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

AFN的代理统一使用AFURLSessionManagerTaskDelegate对象来管理，使用AFURLSessionManagerTaskDelegate对象来接管NSURLSessionTask网络请求过程中的回调，然后再传入AFN内部进行管理。

`AFURLSessionManagerTaskDelegate`接管了`NSURLSessionTaskDelegate`, `NSURLSessionDataDelegate`, `NSURLSessionDownloadDelegate`的各种回调，然后做内部处理。这也是第三方网络请求框架的重点，让网络请求更加易用，好用。

### 关于HTTPS请求

![HTTPS认证1](54DFB53B5F127848A08A2AA10B99EA23.jpg)


![HTTPS认证2](75FBCC706C21B1BF18C30454B7DD5527.jpg)

**如果是HTTPS请求的话，那么会先走上面的2个代理方法进行HTTPS认证，之后继续其他操作。**

```objective-c
//Http认证处理
//认证处理
/*
 *http://www.cnblogs.com/polobymulberry/p/5140806.html
 *web服务器接收到客户端请求时，有时候需要先验证客户端是否为正常用户，再决定是够返回真实数据。
 *这种情况称之为服务端要求客户端接收挑战（NSURLAuthenticationChallenge *challenge）。
 *接收到挑战后，
 *客户端要根据服务端传来的challenge来生成completionHandler所需的NSURLSessionAuthChallengeDisposition disposition和NSURLCredential *credential
 *（disposition指定应对这个挑战的方法，而credential是客户端生成的挑战证书，注意只有challenge中认证方法为NSURLAuthenticationMethodServerTrust的时候，才需要生成挑战证书）。
 *最后调用completionHandler回应服务器端的挑战。
 */
- (void)URLSession:(NSURLSession *)session
didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge
 completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential))completionHandler
{
    //NSURLAuthenticationChallenge 挑战处理类型为 默认
    /*
     *NSURLSessionAuthChallengePerformDefaultHandling：默认方式处理
     *NSURLSessionAuthChallengeUseCredential：使用指定的证书
     *NSURLSessionAuthChallengeCancelAuthenticationChallenge：取消挑战
     */
    NSURLSessionAuthChallengeDisposition disposition = NSURLSessionAuthChallengePerformDefaultHandling;
    __block NSURLCredential *credential = nil;
    //自定义方法，用来如何应对服务器端的认证挑战
    if (self.sessionDidReceiveAuthenticationChallenge) {
        disposition = self.sessionDidReceiveAuthenticationChallenge(session, challenge, &credential);
    } else {
        //服务端要求客户端提供证书
        if ([challenge.protectionSpace.authenticationMethod isEqualToString:NSURLAuthenticationMethodServerTrust]) {
            //客户端评估服务端的安全性
            if ([self.securityPolicy evaluateServerTrust:challenge.protectionSpace.serverTrust forDomain:challenge.protectionSpace.host]) {
                //客户端产生证书
                credential = [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust];
                if (credential) {
                    //使用指定的证书
                    disposition = NSURLSessionAuthChallengeUseCredential;
                } else {
                    //默认处理
                    disposition = NSURLSessionAuthChallengePerformDefaultHandling;
                }
            } else {
                //不处理服务端的认证要求
                disposition = NSURLSessionAuthChallengeCancelAuthenticationChallenge;
            }
        } else {
            disposition = NSURLSessionAuthChallengePerformDefaultHandling;
        }
    }

    if (completionHandler) {
        completionHandler(disposition, credential);
    }
}
```

### 总结
AFN发起Get请求主要分为以下步骤：
1.创建`NSURLSessionDataTask`
2.配置`NSURLSessionDataTask`
3.设置`NSURLSessionDataTask`的Delegate
4.调用`NSURLSessionDataTask`的resume方法开始请求
5.在Delegate的方法里面处理网络请求的各个过程
6.清理NSURLSessionDataTask的配置
其实也就是使用NSURLSessionDataTask的步骤，AFN在这几个步骤加了一些封装，让整个请求过程更加好用，易用。
