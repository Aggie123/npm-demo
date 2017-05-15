import {
  Platform,
  Dimensions,
  PixelRatio,
} from 'react-native';

//米家有品主旋律红色
const brandPrimary = '#b60909';
const brandPrimaryPress = '#990000';
const brandPrimaryDisabled = '#e9b5b5';

 
export default {

  // MJUI包默认主题
  // 设计变量表及命名规范参考: mjui/components/style/StyleNaming.md

  // 字体
  // ---
  // 字体家族
  // tslint:disable-next-line
  font_family_base: 'FZLanTingHei-R-GBK',
  font_family_code: (Platform.OS == "android") ? 'Avenir Roman' : 'Avenir-Roman',

  // 字体尺寸
  // ---see as fontStyle

  // 色彩
  // ---
  // 全局/品牌色
  brand_primary: brandPrimary,
  brand_primary_press: brandPrimaryPress,
  brand_primary_disabled: brandPrimaryDisabled,
  //brand_success: '#6abf47',
  //brand_warning: '#f4333c',
  //brand_error: '#f4333c',

  // 文字色
  color_text_base: '#000', // 基本
  color_text_base_inverse: '#fff', // 基本 _ 反色
  color_text_placeholder: '#999', // 文本框提示
  color_text_nav_top_title: '#333', // 顶部导航标题
  color_link: brandPrimary, // 链接
  color_text_main_green: '#00b377', // 主要绿色
  //color_text_disabled: '#bbb',              // 失效

  // 阴影色
  //color_shadow: 'rgba(0, 0, 0, .21)',  // 阴影色

  // 背景色
  fill_base: '#fff', // 组件默认背景
  fill_mask: 'rgba(0, 0, 0, .6)', // 弹窗遮罩背景
  fill_touchable_bg: 'rgba(0,0,0,.04)', // 点击态背景
  fill_nav_top_bg: '#EFEFF0', //顶部导航背景
  fill_list_bg: '#F8F8F8', //列表背景
  //fill_disabled: '#ddd',                       // 通用失效背景

  // 边框色
  //border_color_base: '#ddd',
  border_color_grey_normal:'#d6d5d6',

  //分割线色
  separator_line: '#e5e5e5',

  // 透明度
  //opacity_disabled: '0.3',   // switch checkbox radio 等组件禁用的透明度

  // 圆角
  // ---
  radius_base: 5,
  radius_modal:5,
  // radius_xs: 2,
  // radius_sm: 3,
  // radius_md: 5,
  // radius_lg: 10,

  // 高度
  // ---
  status_bar_height: (Platform.OS == "web") ? 0 : 20, //顶部状态栏高度
  nav_title_height: 45, //顶部导航栏高度

  option_height: 42, // action_sheet、picker 的选项高度
  line_height_base: 1, // 单行行高
  line_height_paragraph: 1.5, // 多行行高

  //zIndex
  // ---
  zindex_toast: 1999,
  zindex_popup: 999,
  zindex_modal: 999,
  zindex_action_sheet: 1000,

  //view size
  // ---
  view_height: Dimensions.get('window').height,
  view_width: Dimensions.get('window').width,

  //transparent
  transparent_white_90: 'rgba(255, 255, 255, 0.9)',
  transparent_white_80: 'rgba(255, 255, 255, 0.8)',
  transparent_white_75: 'rgba(255, 255, 255, 0.75)',
  transparent_white_70: 'rgba(255, 255, 255, 0.7)',
  transparent_white_60: 'rgba(255, 255, 255, 0.6)',
  transparent_white_50: 'rgba(255, 255, 255, 0.5)',
  transparent_white_40: 'rgba(255, 255, 255, 0.4)',
  transparent_white_30: 'rgba(255, 255, 255, 0.3)',
  transparent_white_20: 'rgba(255, 255, 255, 0.2)',
  transparent_white_15: 'rgba(255, 255, 255, 0.15)',
  transparent_white_10: 'rgba(255, 255, 255, 0.1)',
  transparent_black_90: 'rgba(0, 0, 0, 0.9)',
  transparent_black_80: 'rgba(0, 0, 0, 0.8)',
  transparent_black_75: 'rgba(0, 0, 0, 0.75)',
  transparent_black_70: 'rgba(0, 0, 0, 0.7)',
  transparent_black_60: 'rgba(0, 0, 0, 0.6)',
  transparent_black_50: 'rgba(0, 0, 0, 0.5)',
  transparent_black_40: 'rgba(0, 0, 0, 0.4)',
  transparent_black_30: 'rgba(0, 0, 0, 0.3)',
  transparent_black_20: 'rgba(0, 0, 0, 0.2)',
  transparent_black_16: 'rgba(0, 0, 0, 0.16)',
  transparent_black_10: 'rgba(0, 0, 0, 0.1)',
  transparent_black_06: 'rgba(0, 0, 0, 0.06)',
  transparent_black_05: 'rgba(0, 0, 0, 0.05)',
  transparent_black_03: 'rgba(0, 0, 0, 0.03)',
  transparent_black_02: 'rgba(0, 0, 0, 0.02)',


  // 图标尺寸
  // ---三种尺寸： 240 / 168 / 114px 对应3x 给RN和Android；160 / 112 / 76px 对应2x 给IOS
  icon_size_xxs: 20,
  icon_size_xs: 38,
  icon_size_sm: 56,
  icon_size_md: 80, // 导航条上的图标
  icon_size_lg: 100,

  // 动画缓动
  // ---
  // ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',

  // 组件变量
  // ---
  // button
  button_height: 42,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  across_button_height: 50,

  parimary_button_fill: brandPrimary,
  parimary_button_fill_tap: brandPrimaryPress,
  parimary_button_fill_disabled:brandPrimaryDisabled,

  warn_button_color: brandPrimary, // 同时应用于背景、文字颜色、边框色
  warn_button_fill_tap: brandPrimaryPress,

  link_button_fill_tap: '#ddd',
  link_button_font_size: 16,

  // search_bar
  search_bar_fill: '#EFEFF0',
  search_bar_input_height: 27,
  searchbar_font_size: 11,
  //search_color_icon: '#bbbbbb', // input search icon 的背景色

  // list
  // list_title_height: 30,
  // list_item_height_sm: 35,
  // list_item_height: 45,

  // input
  // input_label_width: 17,       // InputItem、TextareaItem 文字长度基础值
  // input_font_size: 17,
  // input_color_icon: '#ccc',
  // input_color_icon_tap: brandPrimary,

  // tabs
  // tabs_color: brandPrimary,
  // tabs_height: 42,
  // tabs_font_size_heading: 15,


  // 边框尺寸
  // ---
  // border_width_sm: 0.5,
  // border_width_md: 1,
  // border_width_lg: 10,

  // 间距
  // ---
  // 水平间距
  // h_spacing_sm: 5,
  // h_spacing_md: 8,
  // h_spacing_lg: 15,

  // 垂直间距
  // v_spacing_xs: 3,
  // v_spacing_sm: 6,
  // v_spacing_md: 9,
  // v_spacing_lg: 15,
  // v_spacing_xl: 21,
};