import {expect, it, test} from '@jest/globals';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Header} from '../src/components/Header';
const mockItem = {
  // Replace these properties with actual ones from CardProps
  _id: '1',
  body: 'Sample Title',
};

it('renders cirrctly', () => {
  renderer.create(
    <Header title="dee" headerStyle={{}}>
      deee
    </Header>,
  );
});

test('The mock body has a great name:', () => {
  expect(mockItem.body).toBe('Sample Titles');
});
