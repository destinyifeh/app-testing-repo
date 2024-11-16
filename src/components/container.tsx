import {FC} from 'react';
import {Text, View} from 'react-native';

interface ContainerProps {
  title: string;
  body: string;
}

export const Container: FC<ContainerProps> = ({
  title,
  body,
}): React.JSX.Element => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
