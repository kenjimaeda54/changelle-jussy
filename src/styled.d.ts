import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      greenLight: string;
      pink: string;
      gray: string;
      darkLight: string;
    };
  }
}
