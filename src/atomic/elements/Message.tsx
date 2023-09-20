import { MessageProps } from '@/types';
import React from 'react';
import { View, Text } from 'react-native';

const Message = (props: MessageProps) => {
 const { message, direction, background } = props;
 const position: string =
  direction === 'center'
   ? 'justify-center'
   : direction === 'start'
   ? 'justify-start'
   : 'justify-end';
 return (
  <View className={`flex-row ${position}`}>
   <View className={`${background} rounded-xl p-2 rounded-t-none`}>
    <Text> {message} </Text>
   </View>
  </View>
 );
};

export { Message };
