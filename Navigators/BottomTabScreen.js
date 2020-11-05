import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  EvilIcons from 'react-native-vector-icons/EvilIcons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../AppScreens/HomeScreen';
import LibraryScreen from '../AppScreens/LibraryScreen';
import PremScreen from '../AppScreens/PremScreen';
import SearchScreen from '../AppScreens/SearchScreen';

const BottomTab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PremiumStack = createStackNavigator();

export default function BottomTabScreen() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName="Home" >
                <BottomTab.Screen name="Home" component={HomeNavigator}
                    options={{tabBarLabel:"Home",tabBarColor: '#424242',tabBarIcon:({color})=>(<Entypo name="home" size={25} />)}}/>
                <BottomTab.Screen name="Search" component={SearchNavigator}
                    options={{tabBarLabel:"Search",tabBarColor: '#424242', tabBarIcon:({color})=>(<EvilIcons name="search" size={25} />)}}/>
                <BottomTab.Screen name="Library" component={LibraryNavigator}
                    options={{tabBarLabel:"Library",tabBarColor: '#424242',tabBarIcon:({color})=>(<MaterialCommunityIcons name="library-shelves" size={25} />)}}/>
                <BottomTab.Screen name="Premium" component={PremNavigator}
                    options={{tabBarLabel:"Premium",tabBarColor: '#424242', tabBarIcon:({color})=>(<FontAwesome5 name="spotify" size={25} />)}}/>            
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

function HomeNavigator({navigation}) {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}
function LibraryNavigator({navigation}) {
    return(
        <LibraryStack.Navigator>
            <LibraryStack.Screen name="Library" component={LibraryScreen} />
        </LibraryStack.Navigator>
    );
}
function SearchNavigator({navigation}) {
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={SearchScreen}/>
        </SearchStack.Navigator>
    );
}
function PremNavigator({navigation}) {
    return(
        <PremiumStack.Navigator>
            <PremiumStack.Screen name="Premium" component={PremScreen}/>
        </PremiumStack.Navigator>
    );
}