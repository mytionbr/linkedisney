import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import DrawerContainer from '../components/DrawerContainer';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
            <Drawer.Navigator 
                initialRouteName="Tabs" 
                screenOptions={{
                    headerShown: false,
                  }}
                drawerContent={({navigation})=>{
                    return (
                        <DrawerContainer navigation={navigation} />
                    )
                }}  
                >
                <Drawer.Screen 
                name="Tabs" component={TabNavigation} />
            </Drawer.Navigator>
    )
}
export default DrawerNavigation