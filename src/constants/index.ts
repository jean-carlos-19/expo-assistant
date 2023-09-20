import {
 imgBot,
 imgChatgptIcon,
 imgDellaIcon,
 imgRecordingIcon,
 imgSmartIcon,
 imgWelcome,
 imgVoice,
 imgLoading,
} from '@/assets';

const images = Object.freeze({
 bot: {
  src: imgBot,
  alt: '',
 },
 chatGpt: {
  src: imgChatgptIcon,
  alt: '',
 },
 dellaIcon: {
  src: imgDellaIcon,
  alt: '',
 },
 recordingIcon: {
  src: imgRecordingIcon,
  alt: '',
 },
 smartIcon: {
  src: imgSmartIcon,
  alt: '',
 },
 welcome: {
  src: imgWelcome,
  alt: '',
 },
 voice: {
  src: imgVoice,
  alt: '',
 },
 loading: {
  src: imgLoading,
  alt: '',
 },
});

const contentWelcomeScreen = Object.freeze({
 title: 'Jarvis',
 subtitle: 'The future is here, powered by AI',
 img: images.welcome,
 button: 'Get Started',
});

const contentHomeScreen = Object.freeze({
 title: 'Jarvis',
 subtitle: 'The future is here, powered by AI',
 img: images.bot,
 button: 'Get Started',
});

const consteFeature = Object.freeze({
 title: 'Features',
 subtitle: 'ChatGpt',
 img: images.chatGpt,
 infos: [
  {
   title: 'ChatGpt',
   text:
    'ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.',
   background: 'bg-emerald-200',
  },
  {
   title: 'DALL-E',
   text:
    'DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.',
   background: 'bg-purple-200',
  },
  {
   title: 'Smart AI',
   text:
    'A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.',
   background: 'bg-cyan-200',
  },
 ],
});
const constentMessage = Object.freeze({
 title: 'Assistant',
 recording: images.recordingIcon,
 voice: images.voice,
 clear: 'Clear',
 stop: 'Stop',
 audioPermissionErro: {
  title: 'Error de usario',
  text:
   'Permiso denegado para acceder al microfono del celular. por favor para usar la app habilite las condiciones que se requieran',
 },
});

const dummyMessage = [
 {
  role: 'user',
  content: 'How are you?',
 },
 {
  role: 'assistant',
  content: "I'm fine, How may i help you today.",
 },
 {
  role: 'user',
  content: 'create an image of a dog playing with cat',
 },
 {
  role: 'assistant',
  content:
   'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg',
 },
];

export {
 images,
 contentWelcomeScreen,
 contentHomeScreen,
 consteFeature,
 dummyMessage,
 constentMessage,
};
