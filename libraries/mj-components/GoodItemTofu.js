'use strict';
import React, {
  Component,
  PropTypes
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  PixelRatio
} from 'react-native';

import CommonImage from '../components/image/CommonImage';
import defaultStyle from '../style/theme/default';
import fontStyle from '../style/theme/fontStyle';

let crowdfundingImage = rquire('../../res/imgs/crowdfunding_mark_vertical.png');

export default class GoodsItemTofu extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    pic_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string,
    onPresstem: PropTypes.func, //for onclick action
    type: PropTypes.number,
  }

  static defaultProps = {
    pic_url: '',
    name: '',
    price: null,
    url: null,
    onPresstem: null,
    type: 0 //0:普通,1:外链,2:众筹(展示众筹的mark)
  }

  render() {

    const {
      onPresstem,
      pic_url,
      name,
      price,
      url,
      gid,
      type
    } = this.props;

    return (
      <TouchableHighlight  underlayColor={defaultStyle.touchHighlightBackground}
        onPress={onPresstem&&url?()=>{onPresstem(url,gid)}:null}
        style={styles.goodsItemOuter}>
        <View>
          <View style={styles.goodsItem}>
            <CommonImage style={styles.goodsItemImg}
              resizeMode={'cover'}
              source={{ uri: pic_url }}/>
            <Text style={styles.goodsItemName} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.goodsItemPrice} numberOfLines={1}>
              {'¥'+ price }
            </Text>
          </View>

          {type==2?
            <Image source={crowdfundingImage} style={styles.mark}/>
          :null}
        </View>
      </TouchableHighlight>
    )
  }
};

const styles = StyleSheet.create({
  goodsItemOuter: {
    width: defaultStyle.ViewWidth / 2,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#EFEFEF',
    flexWrap: 'wrap',
  },
  goodsItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 12,
  },
  goodsItemImg: {
    width: 100,
    height: 100,
  },
  goodsItemName: {
    fontSize: fontStyle.font13,
    color: '#666',
  },
  goodsItemPrice: {
    marginTop: 3,
    fontSize: fontStyle.font14,
    color: defaultStyle.brandPrimary,
    marginBottom: 10,
  },
  mark: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 17,
    height: 33,
  }
});