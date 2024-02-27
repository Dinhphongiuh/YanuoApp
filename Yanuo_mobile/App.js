import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import HomeSCR from './component/HomeScreen';
import ContactSCR from './component/ContactScreen';
import DiscoverySCR from './component/DiscoveryScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const TabNavigation = () => (
  <BottomTab.Navigator
    initialRouteName='Home'
    screenOptions={{
      tabBarStyle: {
        height: 80,
        borderTopWidth: 1,
        borderTopColor: '#cdcdcd'
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: 'white',
    }}
  >
    <BottomTab.Screen
      name='HomeScreen'
      component={HomeSCR}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => (
          <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Image
              style={{height: 25}}
              resizeMode='contain'
              source={focused ? require('./component/Icon/MessageActive.png') : require('./component/Icon/messagerNoActiveIcon.png')}
            ></Image>
            <Text
              style={{
                color: focused ? '#0C75ED' : '#A3A3A3',
                textAlign: 'center'
              }}
            >
              Tin nhắn
            </Text>
          </View>
        )
      }}
    ></BottomTab.Screen>
    <BottomTab.Screen
      name='ContactScreen'
      component={ContactSCR}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => (
          <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Image
              style={{height: 25}}
              resizeMode='contain'
              source={focused ? require('./component/Icon/ContactActive.png') : require('./component/Icon/contactNoActive.png')}
            ></Image>
            <Text
              style={{
                color: focused ? '#0C75ED' : '#A3A3A3',
                textAlign: 'center'
              }}
            >
              Danh bạ
            </Text>
          </View>
        )
      }}
    ></BottomTab.Screen>
    {/*  */}
    <BottomTab.Screen
      name='DiscoveryScreen'
      component={DiscoverySCR}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size, focused}) => (
          <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Image
              style={{height: 25}}
              resizeMode='contain'
              source={focused ? require('./component/Icon/categoryActive.png') : require('./component/Icon/categoryNoActive.png')}
            ></Image>
            <Text
              style={{
                color: focused ? '#0C75ED' : '#A3A3A3',
                textAlign: 'center'
              }}
            >
              Khám phá
            </Text>
          </View>
        )
      }}
    ></BottomTab.Screen>
  </BottomTab.Navigator>
);

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MainTabs'
          component={TabNavigation}
          options={{headerShown: false, gestureEnabled: false}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}