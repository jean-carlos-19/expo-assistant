import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Feature, Messages } from '@/atomic/components';
import { Photo } from '@/atomic/elements';
import { contentHomeScreen } from '@/constants';
import { dummyMessage } from '@/constants';
import {ServiceOpenAI} from '@/services'

const HomeScreen = () => {
 const [messages, setMessages] = useState(dummyMessage);
 ServiceOpenAI();
 return (
  <>
   <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
   <View className="w-full h-full flex-col justify-start items-stretch bg-white p-4">
    <Photo
     className="h-40 w-40"
     direction="center"
     img={contentHomeScreen.img}
     size={[200, 200]}
    />
    {messages.length > 0 ? (
     <Messages messages={messages} allClear={() => setMessages([])} />
    ) : (
     <Feature />
    )}
   </View>
  </>
 );
};

export { HomeScreen };
