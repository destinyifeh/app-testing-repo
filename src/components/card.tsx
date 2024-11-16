import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CardItem} from '../../App';
type CardProps = {
  item: CardItem;
};

export const Card: React.FC<CardProps> = ({item}) => {
  const [state, useState] = React.useState<string | boolean>('');

  const copyToClipboard = (text: string) => {
    console.log(text, 'texttt');
    Clipboard.setString(text);
    ToastAndroid.show('Copied', ToastAndroid.LONG);
  };
  return (
    <View className="bg-white h-14 w-[95%] self-center rounded-lg my-2">
      <View className="flex-row items-center px-3 py-1">
        <Text className="text-red-500">{item.body}</Text>
        <TouchableOpacity
          className="ml-auto"
          onPress={() => copyToClipboard(item.body)}>
          <Feather name="copy" color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
