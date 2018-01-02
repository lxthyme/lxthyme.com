
---
layout: post
title: iOS 系统架构
date: 2017-12-26 16:37:29
updated: 2018-01-02 13:42:35
comments: true
tags:
	- iOS Basic
---

```flow
st=>start: iOS 系统架构
e=>end: END

op1=>operation: Cocoa Touch(可触摸层)
op2=>operation: Media(媒体层)
op3=>operation: Core Services(核心服务层)
op4=>operation: Core OS(核心操作系统层)

st->op1->op2->op3->op4->e
```


<!--more-->


## 常用的iOS SDK框架

|Framework  |Note   |
|:--        |:--    |
|AddressBook.framework          |提供访问存储核心数据库中用户联系人信息的功能|
|AddressBookUI.framework        |提供一个用户界面，用于显示存储在地址簿中的联系人信息|
|AudioToolbox.framework         |供音频录制和回放的底层API，同时也负责管理音频硬件|
|AudioUnit.framework            |提供一个接口，让我们的应用程序可以对音频进行处理|
|AVFoundation.framework         |提供音频录制和回放的底层API，同时也负责管理音频硬件|
|CFNetwork.framework            |访问和配置网络，像HTTP、FTP和Bonjour Services|
|CoreFoundation.framework       |提供抽象的常用数据类型，如Unicode strings、XML、URL等|
|CoreGraphics.framework         |提供2D绘制的基于C的API|
|oreLocation.framework          |使用GPS和Wi-Fi获取位置信息|
|Foundation.framework           |提供Object-C的基础类（像NSObject）、基本数据类型和操作系统服务等|
|GameKit.framework              |为游戏提供网络功能；点对点互联和游戏中的语音交流|
|MapKit.framework               |为应用程序提供内嵌地图的接口|
|MediaPlayer.framework          |提供播放视频和音频的功能|
|MessageUI.framework            |提供视图控制接口用以处理E-mail和短信|
|OpenGLES.framework             |提供简洁而高效的绘制2D和3D图形的OpenGL API子集|
|QuartzCore.framework           |提供动画特效以及通过硬件进行渲染的能力|
|StoreKit.framework             |为应用程序提供在程序运行中消费的支持|
|SystemConfiguration.framework  |检测当前网络是否可用和硬件设备状态的能力|
|UIKit.framework                |创建和管理应用程序的用户界面|

## iOS 系统架构

#### Cocoa Touch(可触摸层)

1. 框架基于 iPhone OS应用层直接调用层，如触摸事件、照相机管理等。

1. 为应用程序开发提供了各种常用的框架并且大部分框架与界面有关，本质上来说它负责用户在iOS设备上的触摸交互操作

1. 最上层Cocoa Touch层中的很多技术都是基于Objective-C语言的。Objective-C语言为iOS提供了集合、文件管理、网络操作等支持。比如UIKit框架，它为应用程序提供了各种可视化组件，比如像窗口（Window）、视图（View）和按钮组件（UIButton）。Cocoa Touch层中的其他框架，对我们在应用程序中的开发来说也是非常有用的，如访问用户通信录功能框架、获取照片信息功能的框架、负责加速感应器和三维陀螺仪等硬件支持的框架。

###### 包含的框架或组件

* UIKit
* MapKit
* Multi-Touch Events
* Core Motion
* Camera
* View Hierarchy
* Localization
* Alerts
* Web Views
* Image Picker
* Multi-Touch Controls

#### Media(媒体层)

1. 该层框架和服务依赖Core Services层，向Cocoa Touch层提供画图和多媒体服务，如声音、图片、视频等。

###### 包含的框架或组件

* Core Audio
* OpenGL
* Audio Mixing
* Audio Recording
* Video Playback
* JPG
* PNG
* TIFF
* PDF
* Quartz
* Core Animation
* OpenGL ES

#### Core Services(核心服务层)

1. 提供核心服务，如 字符串处理函数、集合管理、网络管理、URL处理工具、联系人维护、偏好设置等。

###### 包含的框架或组件

* Core Foundation: 框架里面封装了好多NS开头的类
* Foundation: 框架里面封装了好多NS开头的类
* CloudKit
* HealthKit
* HomeKit
* Collections
* Address Book
* Networking
* File Access
* SQLite
* Core Location
* Net Services
* Threading
* Preferences
* URL Utilities

#### Core OS(核心操作系统层)

1. 内存管理、文件系统、电源管理以及一些其他的操作系统任务。它可以直接和硬件设备进行交互

###### 包含的框架

* Accelerate: 加速框架
* Core Bluetooth Framework: 核心蓝牙框架
* External Accessory Framework: 外部附件框架
* Generic Security Services Framework: 通用安全服务框架
* Security Framework: 安全框架
* System
* 64-Bit Support

###### 包含的组件
> 文件系统、网络基础、安全特性、能量管理、和一些设备驱动、及系统级别的API;包括内存管理、文件系统、电源管理以及一些其他的操作系统任务。它可以直接和硬件设备进行交互

* OS X Kernel
* Mach3.0
* BSD
* Sockets
* Power Mgmt
* File System
* Keychain
* Certificates
* Security
* Bonjour

#### 总结

低层次框架提供iOS的基本服务和技术，高层次框架建立在低层次框架之上用来提供更加复杂的服务和技术，较高级的框架向较低级的结构提供面向对象的抽象。

**Foundation** 和 **UIKit** 框架是应用编程用到的两个主要的框架，能够满足大多数应用程序的开发需求。

**UIKit:**
1. 所有 iOS 应用程序都是基于 UIKit， 没有这个框架，就无法交付应用程序。
1. UIKit提供应用程序的基础架构，用于在屏幕上绘图、处理事件，以及创建通用用户界面及其中元素。
1. UIKit还通过管理屏幕上显示的内容，来组织应用程序。

**Foundation**
1. UIKit和其他框架都是建立在 Foundation 框架的基础结构之上。 
1. Foundation框架提供许多基本的对象类和数据类型，使其成为应用程序开发的基础。
1. 它还制定了一些约定（如用于取消分配等任务），使代码更加一致，可复用性更好。

#### 拓展

###### 音频和视频

**Core Audio:** 是播放，处理和录制音频的专业技术，能够轻松为您的应用程序添加强大的音频功能。

* OpenAL
* Media Library
* AV Foundation

###### 数据管理
**Core Data:** 提供了一个面向对象的数据管理解决方案，它易于使用和理解，甚至可处理任何应用或大或小的数据模型。

* SQLite

###### 图形和动画
**Core Animation:** 通过 Core Animation，您就可以通过一个基于组合独立图层的简单的编程模型来创建丰富的用户体验。

* OpenGL ES
* Quartz 2D

###### 网络

* Bonjour
* WebKit
* BSD Sockets

###### 用户应用

* Address Book
* Core Location
* Map Kit
* Store Kit

