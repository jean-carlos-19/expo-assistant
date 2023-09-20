import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { MessageError } from '@/types';
import { MESSAGE } from '@/constants';

const usePermission = () => {
 const [state, setState] = useState<boolean>(false);
 const [error, setError] = useState<MessageError>();

 useEffect(() => {
  getPersmissionAudio();
 });

 const getPersmissionAudio = async () => {
  try {
   const { status } = await Audio.requestPermissionsAsync();
   if (status === 'granted') {
    setState(false);
   } else {
    setState(true);
    setError(MESSAGE.audioPermissionErro);
   }
  } catch (error) {
   setError(MESSAGE.audioPermissionErro);
  }
 };
 return { state, error };
};
export { usePermission };
