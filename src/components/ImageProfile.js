import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ImageProfile = ({sourceImage}) => {
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
    marginRight: 20,
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default ImageProfile;
