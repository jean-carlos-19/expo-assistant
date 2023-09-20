import { ModalProps } from '@/types';
import React from 'react';
import { Text, View } from 'react-native';

const Modal = (props: ModalProps) => {
 const { error, state } = props;
 return state ? (
  <View className="w-full h-full p-4 absolute top-0 z-10 bg-red-100 flex-col justify-center items-center space-y-4">
   <Text className="text-2xl font-semibold text-gray-700">
    {' '}
    {error?.title}{' '}
   </Text>
   <Text className="text-gray-700"> {error?.text} </Text>
  </View>
 ) : null;
};

export { Modal };
