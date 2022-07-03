/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import {ColorfulTabBar} from 'react-navigation-tabbar-collection';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {t} from 'react-native-tailwindcss';

const Tab: any = createBottomTabNavigator();

const DemoScreen = ({ route }: any) => {
  console.log('SCreen name', route);

  return (<View style={[styles.screen]}>
    <View
      style={[
        t.bgGray100,
        t.shadow2xl,
        t.roundedLg,
        t.h100,
        t.w112,
        t.pX10,
        t.pY5,
      ]}>
      <Text style={[t.textLg, t.textBlue600]}>{route.name}</Text>
    </View>
  </View>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props: any) => <ColorfulTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={DemoScreen}
        options={{
          title: 'Home',
          icon: ({color, size}: any) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          color: 'primary',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={DemoScreen}
        options={{
          title: 'Chat',
          icon: ({color, size}: any) => (
            <AntDesign name="wechat" size={size} color={color} />
          ),
          color: 'warning',
        }}
      />
      <Tab.Screen
        name="Likes"
        component={DemoScreen}
        options={{
          title: 'Likes',
          icon: ({color, size}: any) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
          color: 'danger',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={DemoScreen}
        options={{
          title: 'Settings',
          icon: ({color, size}: any) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
          color: 'success',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
