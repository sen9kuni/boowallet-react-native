import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR} from '../styles/constant';

const ImageProfileW = ({sourceImage}) => {
  return (
    <View style={styleLocal.warpperImageProfile}>
      <Image style={styleLocal.imageStyle} source={sourceImage} />
    </View>
  );
};

const styleLocal = StyleSheet.create({
  warpperImageProfile: {
    height: 53,
    width: 53,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default ImageProfileW;
