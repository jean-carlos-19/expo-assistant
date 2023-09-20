import { CustomButtonProps } from '@/types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Photo } from './Photo';

const CustomButton = (props: CustomButtonProps) => {
 const {
  className,
  background,
  color,
  text,
  sizeText,
  sizeIcon,
  img,
  type,
  handlePress,
 } = props;
 return (
  <TouchableOpacity
   className={`${className} ${background}`}
   onPress={handlePress}
  >
   {type === 'icon' ? (
    <Photo
     className={'w-10 h-10'}
     direction="center"
     img={img}
     size={sizeIcon!}
    />
   ) : (
    <Text className={`${color} ${sizeText}`}> {text} </Text>
   )}
  </TouchableOpacity>
 );
};

export { CustomButton };
