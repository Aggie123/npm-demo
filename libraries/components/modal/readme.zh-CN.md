---
category: Components
type: General
title: Modal
subtitle: 模态框
---

## 何时使用

模态框用于弹窗。

注意：
- 默认模态框在屏幕底部，若需要模态框在屏幕垂直中间则Modal需传入maskStyle={styles.maskVerticalCenter};顶部则Modal需传入maskStyle={styles.maskVerticalTop};支持自定义位置样式

- maskClosable为true时必须同时传入dismiss方法

## API
Modal支持自定义标题文案、主题内容、底部内容，三者都支持空内容；

BaseModal说明：BaseModal为Modal实例的基类，由于ES6不鼓励使用Mixins，因此将众Modal实例需要公用的方法提炼封装为此基类，包括show、dismiss等公用方法，具体业务Modal实例封装时继承该基类即可共享模态框的visible状态构造函数和show、dismiss方法。

- Modal的属性说明如下：
简介：样例参考ModalDemo
属性 | 说明 | 类型 | 默认值 
-----|-----|-----|------
visible | 同RN的Modal的visible | boolean | false 
transparent | 同RN的Modal的transparent | boolean | false 
animationType | 同RN的Modal的animationType | string | 'slide' 
onRequestClose | 同RN的Modal的onRequestClose | func | null 
maskClosable | 是否支持点击mask关闭Modal | boolean | true 
dismiss | maskClosable为true时必须传的点击mask隐藏Modal调用的方法 | null 
maskStyle | Modal的mask的样式，控制Modal内容的位置 | object | null 
containerStyle | Modal主题内容的容器样式,可用于控制Modal内容的margin | object | null 
title | Modal主题内容的标题部分 | string | null 
titleTxtStyle | Modal主题内容的title的文案样式 | object | null 
children | Modal主题内容的body部分 | element \ array | false 
footer |  | Modal主题内容的底部部分 | element \ array |  false 

## Demo
- ModalDemo: Modal的Demo
- ModalOneBtnDemo: 底部一个Button的Modal的Demo
- ModalTwoBtnDemo: 底部两个Button的Modal的Demo
- ModalDemoWithMargin：左右带margin且在屏幕中垂直居中的Modal的Demo
