#设计样式变量表及命名规范

## 设计样式变量命名规范（用于mjui/components/style/theme/default中定义公用设计样式变量）

`{组件}_{属性}_{场景}_{状态}_{大小}_{反色}`

### 组件

可选，具体组件名：如 `button` `tabs` `list` `input` 等。未指定时表示全局通用。

> 组件名可以复合，例如 `default_button` `table` `tabs_current` `link_button` 以表示更精确的主体。

### 属性

必选，变量实际内容。

- `brand` 通用品牌色
- `fill` 背景色
- `border_color` 边框色
- `color` 色彩。优先使用上面三种。
- `border_width` 边框大小
- `font-size` 文字大小
- `radius` 圆角大小
- `height` 容器高度
- `v_spacing` 垂直间距
- `h_spacing` 水平间距

### 场景

- `text` 文本
- `heading` 标题
- `subhead` 子标题
- `caption` 辅助说明文字
- `paragraph` 段落文字
- `placeholder` 占位符
- `display` 广告/展示
- `icontext` 图标文字
- `link` 链接
- `body` 页面
- `overlay` 浮层
- `mask` 遮罩
- `shadow` 阴影

### 状态

可选。

- `base` 基本/默认
- `tap` 按下
- `disabled` 失效
- ~~~~~~~~~
- `priamry` 主要
- `success` 成功
- `warning` 警告
- `info` 信息
- `important` 重要/强调
- `error` 错误

### 大小

约定的大小选项。可选，一般和 `font_size` `radius` `height` `spacing` `border_width` 进行配合。

- `xl` 超大
- `lg` 大
- `md` 中
- `sm` 小
- `xs` 超小

### 反色

可选。

- `inverse` 用于深色背景

---

## 通用变量

用于非组件或多个组件上的变量。

### 字体族

| 变量名　　　　    | 默认变量值　　 | 描述  | 场景 |
| ---------------- | ------------ | ----- | --- |
| `font_family_base` | `FZLanTingHei-R-GBK` | 默认全局字体 | |
| `font_family_code` | `(Platform.OS == "android") ? 'Avenir Roman' : 'Avenir-Roman'` | 代码字体 | |

### 颜色

| 变量名　　　　    | 默认变量值　　　 | 描述  | 场景 |
| ---------------- | ------------ | ----- | --- |
| **全局** |
| `brand_primary` | `#b60909` | 主色 | `主按钮-背景色` `icon-背景色` |
| `brand_primary_press` | `#990000` | 主色按下 | |
| `brand_primary_disabled` |  `#e9b5b5` | 失效 | |
| `brand-warning` | |警告 | `NoticeBar-文字` |
| `brand-error` | | 失败 | |

##reference
- [Ant Design Mobile 设计变量表及命名规范](https://github.com/ant-design/ant-design-mobile/wiki/%E8%AE%BE%E8%AE%A1%E5%8F%98%E9%87%8F%E8%A1%A8%E5%8F%8A%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)