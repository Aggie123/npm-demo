/**
 * styles for modal
 */
import {
	StyleSheet,
	PixelRatio
} from 'react-native'
import defaultStyle from '../../../style/theme/default'
import fontStyle from '../../../style/theme/fontStyle'

const styles = StyleSheet.create({
  /** 
   * default styles for modal positions in the bottom of the screen
   */
  mask: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:'center',
    backgroundColor:defaultStyle.fill_mask,
    marginTop:-defaultStyle.status_bar_height,
  },
  /** 
   * styles for modal positions in the center of the screen
   */
  maskVerticalCenter:{
    justifyContent: 'center',
  },
  /** 
   * styles for modal positions in the top of the screen
   */
  maskVerticalTop:{
    justifyContent: 'flex-start',
  },
  /** 
   * styles for modal content container
   */
  container: {
    alignItems: 'center',
    backgroundColor:'#fff',
    flexWrap: 'wrap',
  },
  containerWithMargin: {
    marginLeft: 8,
    marginRight: 8,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 5
  },
  titleContainer:{
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
  },
  titleTxt:{
    fontSize:fontStyle.font15,
    color:'#333',
  },
  contentContainer:{
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: defaultStyle.separator_line,
    borderStyle: 'solid',
  },
  footerContainer:{
    flexDirection:'row',
    justifyContent:'center',
  },
  footerBtn: {
    flex:1,
  },
})

export {
	styles
}