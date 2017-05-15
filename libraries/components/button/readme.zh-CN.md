---
category: Components
type: General
title: Button
subtitle: 按钮
---

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`text` -> `type` -> `size` -> `onPress` -> `disabled`

按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
text | 设置按钮的文本内容 | string | 'Button'
type | 设置按钮类型，可选值为 `primary` `warn` `sec` `thr` 或者不设 | `default`  
size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default`
disabled | 设置按钮是否失效 | boolean | false
onPress| `press` 事件的 handler | function | -
containerStyle | 按钮的容器样式 | View.propTypes.style | null
textStyle | 按钮的文案样式 | Text.propTypes.style | null

```
<Button 
  onPress={this.show} 
  text={'ModalDemo'}
  type={'default'} 
  size={'large'}
  containerStyle={{}}/>
```