import React from 'react';
import {Text, View} from 'react-native';

interface Headerprops {
  title?: string;
  children: React.ReactNode;
  headerStyle: Object;
}

export const Header = ({
  title,
  children,
  headerStyle,
}: Headerprops): React.JSX.Element => {
  return (
    <View style={headerStyle} className="mt-3 self-center">
      <Text className="text-xl text-center text-white ">{title}</Text>
      <View>{children}</View>
    </View>
  );
};
