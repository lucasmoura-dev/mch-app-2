type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface TextProps {
    p1Style: StyleProp<TextStyle>;
  }

  export interface Colors {
    primary: string;
    white: string;
    black: string;
    blue1: string;
    green1: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
    Text: Partial<TextProps>;
  }
}
