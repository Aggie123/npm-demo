# MJUI组件库封装标准
## 目的：真正提高开发效率,高可维护

## Table of Contents

  1. [MJUI标准及规范问答](#MJUI标准及规范问答)
  2. [MJUI规范参考](#MJUI规范参考)
  3. [MJUI项目结构](#MJUI项目结构)
  4. [参考](#参考)

---

## MJUI标准及规范问答

(一) 什么样的适合封装为组件？ 
可复用的 功能 业务 UI 逻辑
    - 控件 
    - 基础逻辑功能
    - 公共样式
    - 稳定的业务逻辑

(二) 组件规范和标准？
1.  组件标准：
    - 可复用性
    - 可维护性
    - 可扩展性
    - 可移植性
    - 简单
    - 实用性
    - 健壮性(Action；坤坤 测试)
    - 合理粒度
    - React的规范（action:分享 prop  勇哥）

功能业务逻辑层与UI层分离(业务逻辑层带默认样式)

2.  组件项目规范(具体参见mijia项目dev_component分支)
    1)  名字： MJUI
    2)  目录结构：APP并列文件夹components,分非业务相关（base子文件夹放基础工具文件）和业务相关2个文件夹
    3)  组件类规范:（Action：nana下来完善，default props, comments,import）
    4)  设计变量表及命名规范：非业务相关
    5)  组件封装规范：
        a)  组件封装标准
        b)  编程规范
        c)  必要的API描述    
        d)  必要的参考Demo样例
        参照 https://mobile.ant.design/index-cn
 

(三) 如何把握组件封装的粒度？ 
同时封装：
    1. 支持高度自定定组件
    2. 常用的业务、样式组件如NavBar

(四) 如何兼容Mobile web，RN web?
(五) 业务组件如何兼容不同数据结构、数据类型？（组件封装时数据字段明确）
(六) 未来标准的兼容？

---

## MJUI规范参考

### JSX STYLE GUIDE: ./mjui/JSX-Style-Guide.md

### 命名规范：./mjui/Naming.md

### 设计样式变量表及命名规范： ./mjui/components/style/Style-Naming.md

### RN web 兼容开发规范 （Todo）

---

## MJUI项目结构

- mjui (主目录)
    + components (基础组件，业务无关)
        * base（公共基础依赖）
        * style（公用样式）
            - theme
                + default （默认公共样式）
                + fontStyle (安卓和IOS对应的字体样式)
            - Style-Naming.md (设计样式变量表及命名规则)
        * DemoIndexs.js （组件Demo主测试页面，入口为设置-测试页面-测试商城RN）
        * JSX-Style-Guide.md （JSX编程规范）
        * Naming.md (文件夹文件组件等命名规范)
        * README.md (说明文档)
        * modal （modal组件）
            - style (modal自用样式)
            - demo (demo文件夹)
            - index等组件封装js 文件
            - readme.zh-CN.md (modal组件中文API文档)
        * button
        * ...其它组件文件夹
    + mj-components （业务相关组件）
        * GoddsItemTofu.js (商品豆腐块组件)
    + res （资源文件如img等）
        * imgs   
注意：
    1. 业务相关组件置于mj-components，非业务相关基础组件置于components
    2. 公共基础依赖文件至于在base文件夹
    3. 业务相关组件封装可以支持传入自定义数据（兼容多接口）和方法，但不要深度依赖具体接口。具体参考mj-components下商品豆腐块GoodsItemTofu组件
    4. 公共样式写在components文件夹下的style，组件只有样式放在对应组件文件夹下的style下

---

## 参考

### 编程规范参考：
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Ant Design Mobile设计变量表及命名规范](https://github.com/ant-design/ant-design-mobile/wiki/%E8%AE%BE%E8%AE%A1%E5%8F%98%E9%87%8F%E8%A1%A8%E5%8F%8A%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)

### 组件化参考：
- [Ant Design Mobile组件官网](https://mobile.ant.design/docs/react/introduce)
-[2015前端组件化框架之路](https://github.com/xufei/blog/issues/19)
-[React-Component git项目](http://react-component.github.io/badgeboard/)

### UI规范参考：
- [Ant Design 设计基础简版](https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88)