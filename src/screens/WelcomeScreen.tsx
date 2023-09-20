import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { contentWelcomeScreen } from '@/constants';
import { CustomButton, Photo } from '@/atomic/elements';
import { useNavigation } from '@react-navigation/native';
import { Modal } from '@/atomic/components';
import { usePermission } from '@/hooks';
const WelcomeScreen = () => {
 const navigation = useNavigation();
 const { state, error } = usePermission();

 if (state) return <Modal state={state} error={error} />;

 return (
  <>
   <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
   <View className="w-full h-full p-4 py-16 bg-white flex-col justify-between items-stretch">
    <View>
     <Text className="text-center text-4xl font-bold text-gray-700">
      {contentWelcomeScreen.title}
     </Text>
     <Text className="text-center tracking-wider text-gray-600 font-semibold">
      {contentWelcomeScreen.subtitle}
     </Text>
    </View>
    <Photo
     className="w-72 h-72"
     direction="center"
     img={contentWelcomeScreen.img}
     size={[300, 300]}
    />
    <CustomButton
     type="text"
     className="px-16 py-4 rounded-xl flex-row justify-center items-center"
     background="bg-emerald-600"
     color="text-white"
     sizeText="text-2xl"
     text={contentWelcomeScreen.button}
     handlePress={() => navigation.navigate('Home')}
    />
   </View>
  </>
 );
};
export { WelcomeScreen };
