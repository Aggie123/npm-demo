import {
	StyleSheet,
	PixelRatio
} from 'react-native'

import defaultStyle from '../../../style/theme/default'
import fontStyle from '../../../style/theme/fontStyle'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: defaultStyle.radius_base,
	},
	/** css by type*/
	container_default: {
		backgroundColor: '#fff',
		borderColor: defaultStyle.brand_primary,
		borderWidth: 1 / PixelRatio.get(),
	},
	container_warn: {
		backgroundColor: defaultStyle.brand_primary,
	},
	container_sec: {
		backgroundColor: '#fff',
		borderColor: defaultStyle.border_color_grey_normal,
		borderWidth: 1 / PixelRatio.get(),
	},
	container_thr: {
		backgroundColor: '#fff',
		borderColor: defaultStyle.border_color_grey_normal,
		borderWidth: 1 / PixelRatio.get(),
	},
	/** css by disabled*/
	container_disabled_default: {
		backgroundColor: '#fefcfc',
		borderColor: '#ebcccc',
		borderWidth: 1 / PixelRatio.get(),
	},
	container_disabled_warn: {
		backgroundColor: '#e9b5b5',
	},
	container_disabled_sec: {
		backgroundColor: '#fafcfb',
		borderWidth: 1 / PixelRatio.get(),
	},
	/** css by size*/
	container_size_default: {
		paddingLeft: 16,
		paddingRight: 16,
		height:28,
		/* *minWidth: 64,*/
	},
	container_size_large: {
		paddingLeft: 24,
		paddingRight: 24,
		height:54,
	},
	container_size_small: {
		paddingLeft: 8,
		paddingRight: 8,
		height:24,
	},
	text: {
		fontSize: fontStyle.font13
	},
	/** text css by type*/
	text_default: {
		color: defaultStyle.brand_primary,
	},
	text_warn: {
		color: '#fff',
	},
	text_sec: {
		color: '#000'
	},
	text_thr: {
		color: defaultStyle.color_text_main_green,
	},
	/** text css by size*/
	text_size_large: {
		fontSize: fontStyle.font15,
	},
	text_size_default: {
		fontSize: fontStyle.font13,
	},
	text_size_small: {
		fontSize: fontStyle.font10,
	},
	/** text css by disabled*/
	text_disabled_default: {
		color: '#ecdada',
	},
	text_disabled_warn: {
		color: '#f4dcdc',
	},
	text_disabled_sec: {
		color: '#ccc'
	},
	text_disabled_thr: {
		color: '#dceedc'
	},
})

export {
	styles
}