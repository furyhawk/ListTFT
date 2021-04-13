import React from 'react';
import { Text, View } from 'react-native';

import Champion from '../components/Champion';
import Loading from '../components/Loading';


const ChampionScreen = props => {
  const id = props.navigation.getParam('id');
  console.log(props);
  return <Champion champion={id} />;
};

export default ChampionScreen;
