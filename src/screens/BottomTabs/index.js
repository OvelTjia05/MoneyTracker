import React from 'react';
import Home from '../Home';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconMenu} from '../../assets/icons';
import {IconHome} from '../../assets/icons';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <View style={styles.tab}>
              <IconHome />
              <IconMenu />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 150,
  },
});
