import { images } from '@/constants';
import { PhotoProps } from '@/types';
import React from 'react';
import { View, Image } from 'react-native';

const Photo = (props: PhotoProps) => {
 const { uri, direction } = props;
 const position: string =
  direction === 'center'
   ? 'justify-center'
   : direction === 'start'
   ? 'justify-start'
   : 'justify-end';
 return (
  <View className={`flex-row ${position} items-center`}>
   {uri !== undefined ? <Picture data={props} /> : <Picture data={props} />}
  </View>
 );
};

const Picture = ({ data }: { data: PhotoProps }) => {
 const { img, className, uri, size } = data;

 return Array.isArray(size) ? (
  <Image
   className={className}
   source={img?.src || images.chatGpt.src}
   alt={img?.alt || images.chatGpt.alt}
   style={{
    width: size![0],
    height: size![1],
   }}
  />
 ) : (
  <Image className={className} source={{ uri: uri }} alt={img?.alt || ''} />
 );
};
export { Photo };
