import { constentMessage } from '@/constants';
import { MessagesProps } from '@/types';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { CustomButton, Message, Photo } from '@/atomic/elements';
import { useVoice } from '@/hooks';

const Messages = (props: MessagesProps) => {
 const { messages, allClear } = props;
 const { recording, speaking, results, startRecordering, stopSpeaking } =
  useVoice();
 console.log('result: ', results);

 return (
  <View className="flex-1 space-y-2">
   <Text className="text-gray-700 text-2xl"> {constentMessage.title} </Text>
   <View className="flex-1 bg-neutral-200 rounded-3xl p-4">
    <ScrollView
     bounces={false}
     className="space-y-4"
     showsVerticalScrollIndicator={false}
    >
     {messages.map((message, i) => {
      if (message.role === 'assistant') {
       if (message.content.includes('https')) {
        /* it's a image */
        return (
         <View key={i}>
          <Photo
           className="w-52 h-52 rounded-xl"
           direction="start"
           uri={message.content}
          />
         </View>
        );
       } else {
        /* it's a text */
        return (
         <View key={i}>
          <Message
           message={message.content}
           direction="start"
           background="bg-emerald-100"
          />
         </View>
        );
       }
      } else {
       /* it's a user */
       return (
        <View key={i}>
         <Message
          message={message.content}
          direction="end"
          background="bg-white"
         />
        </View>
       );
      }
     })}
    </ScrollView>
   </View>
   <View className="flex-row justify-center items-center">
    {recording ? (
     /* button stop recording */
     <CustomButton
      type="icon"
      img={constentMessage.voice}
      sizeIcon={[75, 75]}
      handlePress={stopSpeaking}
     />
    ) : (
     /* button start recording */
     <CustomButton
      type="icon"
      img={constentMessage.recording}
      sizeIcon={[75, 75]}
      handlePress={startRecordering}
     />
    )}
    {messages.length > 0 && (
     <CustomButton
      type="text"
      className="absolute right-10 p-2 rounded-xl"
      background="bg-neutral-400"
      color="text-white"
      sizeText="text-sm"
      text={constentMessage.clear}
      handlePress={allClear}
     />
    )}
    {speaking && (
     <CustomButton
      type="text"
      className="absolute left-10 p-2 rounded-xl"
      background="bg-red-400"
      color="text-white"
      sizeText="text-sm"
      text={constentMessage.stop}
      handlePress={stopSpeaking}
     />
    )}
   </View>
   <Text> {results} </Text>
  </View>
 );
};

export { Messages };
