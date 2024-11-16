import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

type ContentProps = PropsWithChildren<{
  title?: string;
}>;

export const Content = ({children, title}: ContentProps): React.JSX.Element => {
  return <View>{children}</View>;
};
