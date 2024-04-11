import {LinkingOptions} from '@react-navigation/native';
type RootStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};
export const pageLinking: LinkingOptions<RootStackParamList> = {
  prefixes: ['mychat://'],
  config: {
    screens: {
      LogIn: 'chat/login',
      SignUp: 'chat/signup',
    },
  },
};
