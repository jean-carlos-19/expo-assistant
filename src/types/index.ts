import { ImageSourcePropType } from 'react-native';
/* components props */
interface CustomButtonProps {
 className?: string;
 type: 'text' | 'icon';
 background?: string;
 color?: string;
 text?: string;
 sizeText?: string;
 sizeIcon?: number[];
 img?: {
  src: ImageSourcePropType;
  alt: string;
 };
 handlePress: () => void;
}
interface PhotoProps {
 className: string;
 direction: 'center' | 'start' | 'end';
 uri?: string;
 size?: number[];
 img?: {
  src: ImageSourcePropType;
  alt: string;
 };
}
interface MessagesProps {
 allClear: () => void;
 messages: {
  role: string;
  content: string;
 }[];
}
interface MessageProps {
 message: string;
 direction: 'center' | 'start' | 'end';
 background: string;
}
interface ModalProps {
 state: boolean;
 error?: MessageError;
}
interface MessageError {
 title: string;
 text: string;
}
/* roots params */
type RootStackParamList = {
 Home: undefined;
 Welcome: undefined;
};
export type {
 RootStackParamList,
 CustomButtonProps,
 MessagesProps,
 MessageProps,
 MessageError,
 ModalProps,
 PhotoProps,
};
