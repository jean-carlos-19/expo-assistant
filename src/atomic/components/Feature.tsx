import React from 'react';
import { View, Text } from 'react-native';
import { Photo } from '@/atomic/elements';
import { consteFeature } from '@/constants';

const Feature = () => {
 return (
  <View className="flex-1 flex-col justify-start items-stretch space-y-4">
   <Text className="font-semibold text-gray-700 text-3xl">
    {consteFeature.title}
   </Text>
   {consteFeature.infos.map((info, i) => (
    <View key={i} className={`${info.background} p-4 rounded-xl space-y-2`}>
     <View className="flex-row justify-start items-center space-x-2">
      <Photo
       className="w-10 h-10"
       img={consteFeature.img}
       direction={'center'}
      />
      <Text className="font-semibold text-gray-700 text-xl">{info.title}</Text>
     </View>
     <Text className="text-gray-700 font-semibold">{info.text}</Text>
    </View>
   ))}
  </View>
 );
};

export { Feature };
