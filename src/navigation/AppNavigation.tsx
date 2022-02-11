import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Strings from './../res/Strings';
import Images from './../res/Images';
import Colors from './../res/Colors';
import { Home, DebitCard,Payments,Credit,Profile } from '../components/screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SpendingLimit from '../components/screen/SpendingLimit/SpendingLimit';

function tabElement(title, image) {
  return {
    tabBarLabel: ({focused}) => (
      <Text
        style={focused ? {color: Colors.app_theme} : {color: Colors.silver}}>
        {title}
      </Text>
    ),
    tabBarIcon: ({focused}) => (
      <Image
        source={image.source}
        style={[
          image.style,
          {tintColor: focused ? Colors.app_theme : Colors.silver},
        ]}
      />
    ),
  };
}

function TabBar() {
  const tabTitle = Strings.TabTitles;
  return (
    <Tab.Navigator initialRouteName={tabTitle.debitCard} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={tabTitle.home}
        component={Home}
        options={tabElement(Strings.TabTitles.home, Images.tab1)}
      />
      <Tab.Screen
        name={tabTitle.debitCard}
        component={DebitCard}
        options={tabElement(Strings.TabTitles.debitCard, Images.tab2)}
      />
      <Tab.Screen
        name={tabTitle.payments}
        component={Payments}
        options={tabElement(Strings.TabTitles.payments, Images.tab3)}
      />
      <Tab.Screen
        name={tabTitle.credit}
        component={Credit}
        options={tabElement(Strings.TabTitles.credit, Images.tab4)}
      />
      <Tab.Screen
        name={tabTitle.profile}
        component={Profile}
        options={tabElement(Strings.TabTitles.profile, Images.tab5)}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="TabBar"
          component={TabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SpendingLimit"
          component={SpendingLimit}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
