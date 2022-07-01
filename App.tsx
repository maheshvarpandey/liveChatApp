/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
// import {ColorfulTabBar} from 'react-navigation-tabbar-collection';
// import Icon from 'react-native-vector-icons/AntDesign';
import BottomTabs from './routes/BottomTabs/BottomTabs';

// const Tab: any = createBottomTabNavigator();

// const DemoScreen = ({route}: any) => (
//   <View style={styles.screen}>
//     <Text>{route.name}</Text>
//   </View>
// );

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
