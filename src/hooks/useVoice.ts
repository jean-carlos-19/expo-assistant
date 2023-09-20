import { useEffect, useState } from 'react';
import Voice, {
 SpeechEndEvent,
 SpeechErrorEvent,
 SpeechResultsEvent,
 SpeechStartEvent,
} from '@react-native-voice/voice';

const useVoice = () => {
 const [recording, setRecording] = useState<boolean>(false);
 const [speaking] = useState<boolean>(true);
 const [results, setResults] = useState<string | undefined>();

 const speechStartHandler = (e: SpeechStartEvent) => {
  //   console.log('speech star handler: ' + e);
 };
 const speechEndHandler = (e: SpeechEndEvent) => {
  setRecording(false);
  //   console.log('speech end handler: ' + e);
 };
 const speechResultsHandler = (e: SpeechResultsEvent) => {
  const text: string | undefined = e?.value![0];
  setResults(text);
 };
 const speechErrorHandler = (e: SpeechErrorEvent) => {
  console.log('Error: ' + e.error?.message);
 };

 const startRecordering = async () => {
  setRecording(true);
  try {
   await Voice.start('us-GB');
  } catch (error) {
   console.log(error);
  }
 };

 const stopSpeaking = async () => {
  try {
   await Voice.stop();
   setRecording(false);
  } catch (error) {
   console.log(error);
  }
 };

 useEffect(() => {
  Voice.onSpeechStart = speechStartHandler;
  Voice.onSpeechEnd = speechEndHandler;
  Voice.onSpeechResults = speechResultsHandler;
  Voice.onSpeechError = speechErrorHandler;
  return () => {
   Voice.destroy().then(Voice.removeAllListeners);
  };
 }, []);

 return { recording, speaking, results, startRecordering, stopSpeaking };
};
export { useVoice };
