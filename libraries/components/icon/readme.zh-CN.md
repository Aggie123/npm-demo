---
category: Components
type: General
title: Icon
subtitle: 图标
---

图标用于静态图标集中管理。
TODO:建立MJ自有Icon font库，常用Icon采用font字体形式实现，方便管理和复用。

## 何时使用

需要引用静态图标文件时。支持IconButton图标按钮。

## API

通过设置 Icon 的属性来产生不同的按钮样式，推荐顺序为： `type` -> `style` 。
同时支持IconButton图标按钮，通过Icon.Button获取该组件。

普通Icon按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置Icon类型，可选值参考ImageMap对象的key值 | string | `Loading`  
style | Icon的样式，可设置Icon的width,height等 | View.propTypes.style | null

```
<Icon 
    type={`${value}`} 
    style={{height:24,width:24}}/>
```

Icon按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
style | Icon的样式，可设置Icon的width,height等 | View.propTypes.style | null
disabled | 设置Icon类型，可选值参考ImageMap对象的key值 | bool | false 
onPress | 设置Icon类型，可选值参考ImageMap对象的key值 | function | null
normalImage | 设置Icon类型，可选值参考ImageMap对象的key值 | string | 'Loading' 
pressedImage | 设置Icon类型，可选值参考ImageMap对象的key值 | string | '' 
disabledImage | 设置Icon类型，可选值参考ImageMap对象的key值 | string | '' 

```
<Icon.Button 
    style={{ width: 35, height: 35 }}
    disabled
    normalImage={'Uncheck'}
    pressedImage={'Check'}
    disabledImage={'CheckDisable'}
    onPress={this.showToast}/> 

//或者
let IconButton=Icon.Button;
<IconButton 
    style={{ width: 35, height: 35 }}
    disabled
    normalImage={'Uncheck'}
    pressedImage={'Check'}
    disabledImage={'CheckDisable'}
    onPress={this.showToast}/> 

```