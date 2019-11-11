---
path: "/blog/test"
date: "2019-05-04"
title: "Markdown test"
---

1. flow

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

1. javascript


    ```javascript{numberLines: true}
    // In your gatsby-config.js
    plugins: [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
        plugins: [
            `gatsby-remark-prismjs`,
        ]
        }
    }
    ]
    ```

1. objectivec

    ```objectivec
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

1. javascript{1,4-6}

    ```javascript{1,4-6}
    // In your gatsby-config.js
    plugins: [
    {
        resolve: `gatsby-transformer-remark`,
        options: {
        plugins: [
            `gatsby-remark-prismjs`,
        ]
        }
    }
    ]
    ```

1. jsx

    ```jsx
    class FlavorForm extends React.Component { // highlight-line
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // highlight-next-line
        this.setState({value: event.target.value});
    }

    // highlight-start
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    // highlight-end

    render() {
        return (
        { /* highlight-range{1,4-9,12} */ }
        <form onSubmit={this.handleSubmit}>
            <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
    }
    ```
