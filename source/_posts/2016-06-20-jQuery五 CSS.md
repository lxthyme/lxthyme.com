---
layout: post
title: jQuery五 CSS
date: 2017-6-20 00:07
updated: 2017-6-22 00:07
comments: true
tags:
    - HTML
    - jQuery
    - CSS
---

1. `css(name|pro|[,val|fn])`        -->`String`
    > 访问匹配元素的样式属性。
    > jQuery 1.8中，当你使用CSS属性在css()或animate()中，我们将根据浏览器自动加上前缀(在适当的时候)，比如("user-select", "none"); 在Chrome/Safari浏览器中我们将设置为"-webkit-user-select", Firefox会使用"-moz-user-select", IE10将使用"-ms-user-select".

    <!--more-->

    1. 参数:

        |属性   |类型   |描述
        |:--|:--|:--|
        |name           |String             |要访问的属性名称
        |name           |Array              |一个或多个CSS属性组成的一个数组
        |properties     |Map                |要设置为样式属性的名/值对
        |name,value     |String, Number     |属性名,属性值
        |name,function(index, value)    |String, Function   |1. `name`:属性名

1. `function(index, value)`:此函数返回要设置的属性值。接受两个参数，index为元素在对象集合中的索引位置，value是原先的属性值。

    1. 示例1: **参数name 描述:** 取得第一个段落的color样式属性的值。
        ```js
        $("p").css("color");
        ```

    1. 示例2: **参数properties 描述:** 将所有段落的字体颜色设为红色并且背景为蓝色。
        ```js
        $("p").css({ "color": "#ff0011", "background": "blue" });
        ```

    1. 示例3: **参数name,value 描述:** 将所有段落字体设为红色
        ```js
        $("p").css("color","red");
        ```

    1. 示例4: **参数name,回调函数 描述:** 逐渐增加div的大小
        ```js
        $("div").click(function() {
            $(this).css({
                width: function(index, value) {
                    return parseFloat(value) * 1.2;
                },
                height: function(index, value) {
                    return parseFloat(value) * 1.2;
                }
            });
        });
        ```

1. `jQuery.cssHooks`        -->`Object`
    > 直接向 jQuery 中添加钩子，用于覆盖设置或获取特定 CSS 属性时的方法，目的是为了标准化 CSS 属性名或创建自定义属性。
    > $.cssHooks 对象提供了一种通过定义函数来获取或设置特定 CSS 值的方法。可以用它来创建新的 cssHooks 用于标准化 CSS3 功能，例如，盒子阴影（box shadows）及渐变（gradients）。
    > 例如，某些基于 Webkit 的浏览器会使用 -webkit-border-radius 来设置对象的 border-radius，然而,早先版本的 Firefox 则使用 -moz-border-radius。cssHook 就可以将这些不同的写法进行标准化，从而让 .css()可以使用统一的标准化属性名(border-radius 或对应的 DOM 属性写法 borderRadius)。
    > 该方法除了提供了对特定样式的处理可以采用更加细致的控制外，$.cssHooks 同时还扩展了 .animate() 方法上的属性集。

    1. 定义一个新的 cssHook 十分简单。下面的模板可以方便您创建自己的 cssHook：
        ```js
        (function($) {
            // first, check to see if cssHooks are supported
            if ( !$.cssHooks ) {
                // if not, output an error message
                throw("jQuery 1.4.3 or above is required for this plugin to work");
                return;
            }
            $.cssHooks["someCSSProp"] = {
                get: function( elem, computed, extra ) {
                    // handle getting the CSS property
                },
                set: function( elem, value ) {
                    // handle setting the CSS value
                }
            };
        })(jQuery);
        ```

    1. 功能测试
        > 在标准化 CSS 属性之前，首先要判断浏览器是否支持待标准的属性或经过变化（例如，带前缀）的属性。例如，要检查浏览器是否支持 border-radius 属性，还要检查该属性的任何变种写法是否是临时元素的 style 对象中的成员。

        ```js
        (function($) {
            function styleSupport( prop ) {
                var vendorProp, supportedProp,
                // capitalize first character of the prop to test vendor prefix
                capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                prefixes = [ "Moz", "Webkit", "O", "ms" ],
                div = document.createElement( "div" );
                if ( prop in div.style ) {
                    // browser supports standard CSS property name
                    supportedProp = prop;
                } else {
                // otherwise test support for vendor-prefixed property names
                    for ( var i = 0; i < prefixes.length; i++ ) {
                        vendorProp = prefixes[i] + capProp;
                        if ( vendorProp in div.style ) {
                            supportedProp = vendorProp;
                            break;
                        }
                    }
                }
                // avoid memory leak in IE
                div = null;
                // add property to $.support so it can be accessed elsewhere
                $.support[ prop ] = supportedProp;
                return supportedProp;
            }
            // call the function, e.g. testing for "border-radius" support:
            styleSupport( "borderRadius" );
        })(jQuery);
        ```

    1. 定义一个完整的 cssHook

        _为了定义一个完整的 cssHook，首先我们需要测试您当前使用的 jQuery 版本是否支持 cssHooks 方法，此外，还要结合上面提到的例子：_

        ```js
        (function($) {
        if ( !$.cssHooks ) {
            throw("jQuery 1.4.3+ is needed for this plugin to work");
            return;
        }
        function styleSupport( prop ) {
            var vendorProp, supportedProp,
            capProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            prefixes = [ "Moz", "Webkit", "O", "ms" ],
            div = document.createElement( "div" );
            if ( prop in div.style ) {
                supportedProp = prop;
            } else {
                for ( var i = 0; i < prefixes.length; i++ ) {
                    vendorProp = prefixes[i] + capProp;
                    if ( vendorProp in div.style ) {
                        supportedProp = vendorProp;
                        break;
                    }
                }
            }
            div = null;
            $.support[ prop ] = supportedProp
            return supportedProp;
        }
        var borderRadius = styleSupport( "borderRadius" );
        // Set cssHooks only for browsers that
        // support a vendor-prefixed border radius
        if ( borderRadius && borderRadius !== "borderRadius" ) {
            $.cssHooks.borderRadius = {
                get: function( elem, computed, extra ) {
                    return $.css( elem, borderRadius );
                },
                set: function( elem, value) {
                    elem.style[ borderRadius ] = value;
                }
            };
        }
        })(jQuery);
        ```

        _之后，您就可以在支持该属性的浏览器中使用 DOM (camel 式) 样式的写法或使用 CSS (带连字符号) 样式的写法来设置边框的半径了：_

        ```js
        $("#element").css("borderRadius", "10px");
        $("#another").css("border-radius", "20px");
        ```

        _如果浏览器不支持任何一种形式的 CSS 属性写法，并且也不支持任何前缀写法，那么该样式是不会应用到元素上的。但是，如果浏览器支持某种特殊的写法，那么可以在 cssHooks 中添加对该特殊用法的支持。_

        ```js
        (function($) {
            // feature test for support of a CSS property
            // and a proprietary alternative
            // ...
            if ($.support.someCSSProp && $.support.someCSSProp !== "someCSSProp") {
                // Set cssHooks for browsers that
                // support only a vendor-prefixed someCSSProp
                $.cssHooks.someCSSProp = {
                    get: function(elem, computed, extra) {
                        return $.css(elem, $.support.someCSSProp);
                    },
                    set: function(elem, value) {
                        elem.style[$.support.someCSSProp] = value;
                    }
                };
            } else if (supportsProprietaryAlternative) {
                $.cssHooks.someCSSProp = {
                    get: function(elem, computed, extra) {
                        // Handle crazy conversion from the proprietary alternative
                    },
                    set: function(elem, value) {
                        // Handle crazy conversion to the proprietary alternative
                    }
                }
            }
        })(jQuery);
        ```
    1. 特殊单位
        > 默认情况下，通过 .css() 方法设置的值，jQuery 会为其加上 "px" 单位。您可以通过向 jQuery.cssNumber 对象中添加属性的方法来防止这种行为的发生。

        ```js
        $.cssNumber["someCSSProp"] = true;
        ```

    1. 动画与 cssHooks
        _通过向 jQuery.fx.step 对象中添加属性，cssHook 同样可以向 jQuery 的动画机制中添加钩子：_

        ```js
        $.fx.step["someCSSProp"] = function(fx){
            $.cssHooks["someCSSProp"].set( fx.elem, fx.now + fx.unit );
        };
        ```

        _注意，上述这种用法应用于简单的数值属性的动画是最好的。根据不同的 CSS 属性，返回值的类型以及动画的复杂性，可能需要在 cssHooks 写更多的代码。_

1. `offset([coordinates])`      -->`Object`
    > 获取匹配元素在当前视口的相对偏移。
    > 返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。

    1. 参数:

        |属性   |类型   |描述
        |:--|:--|:--|
        |coordinates{top,left}  |Object     |必需。规定以像素计的 top 和 left 坐标。可能的值：a). 值对，比如 {top:100,left:0}; b). 带有 top 和 left 属性的对象
        |function(index,coords) |Function   |规定返回被选元素新偏移坐标的函数。a): index - 可选。接受选择器的 index 位置;b). oldvalue - 可选。接受选择器的当前坐标

    1. 示例1: **无参数描述:** 获取第二段的偏移
        ```html
        <p>Hello</p><p>2nd Paragraph</p>
        ```
        ```js
        var p = $("p:last");
        var offset = p.offset();
        p.html( "left: " + offset.left + ", top: " + offset.top );
        // Result:
        //      <p>Hello</p><p>left: 0, top: 35</p>
        ```

    1. 示例2: **参数coordinates 描述:** 获取第二段的偏移
        ```html
        <p>Hello</p><p>2nd Paragraph</p>
        ```
        ```js
        $("p:last").offset({ top: 10, left: 30 });
        ```


