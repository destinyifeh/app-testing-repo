'use client';
import {FlatList, ListRenderItem, Text, View} from 'react-native';

import React from 'react';
import {Header} from './src/components/Header';
import {Card} from './src/components/card';
import cardText from './src/fixtures/dev-text.json';
export interface CardItem {
  body: string;
  _id: string;
}
export default function App(): React.JSX.Element {
  const ref = React.useRef();

  const _renderItem: ListRenderItem<CardItem> = ({item}) => {
    return <Card item={item} />;
  };

  return (
    <View className="bg-orange-500 flex-1">
      <Header title="CopyMe" headerStyle={{}}>
        <View className="container">
          <Text className="text-white text-lg font-body">Dev Text</Text>
        </View>
      </Header>
      <FlatList
        data={cardText}
        renderItem={_renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
}
