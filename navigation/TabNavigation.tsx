import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Animated, Easing, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import Feed from '../screens/Feed';
import Header from '../components/Header';


const Tab = createBottomTabNavigator();

const IconBox = ({icon,label, active} : { icon: any, label: string, active: boolean })=>{
    return (
        <View
            style={{
                justifyContent: 'space-evenly',
                alignItems: "center",
                borderTopWidth: 2,
                borderColor: COLORS.white,
                borderTopColor: active ? COLORS.black : COLORS.white,
                flex: 1,
                width: '100%',
            }}
        >
            {icon}
            <Text
                style={{
                    ...FONTS.body5,
                    color: active ? COLORS.black : COLORS.gray,
                    fontWeight: active ? '700' : '500'
                }}
            >
                {label}
            </Text>

        </View>
    )
}

export default function TabNavigation({navigation} : {navigation:any}) {
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY,0,70)
    
    const openDrawer = ()=>{
        navigation.openDrawer();
    }
    
    const translateHeader = diffClamp.interpolate({
        inputRange: [0,70],
        outputRange: [0,-70]
    })

    const translateTab = diffClamp.interpolate({
        inputRange: [0,70],
        outputRange: [0,140]
    })

    const HeaderWrapper = () => {
        return (
            <Animated.View
            style={{
                transform:[
                    {translateY: translateHeader}
                ]
            }}
        >
            <Header openDrawer={openDrawer}/>
        </Animated.View>
        )
    }

    const FeedWrapper = ()=> {
        return (
            <Feed scrollY={scrollY} />
        )
    }

    return (
        <Tab.Navigator
            initialRouteName='Feed'
            screenOptions={{
                tabBarStyle:{
                    flexDirection: 'row',
                    height: 50,
                    backgroundColor: COLORS.white,
                    width: SIZES.width,
                    position: 'absolute',
                    transform:[
                        {translateY: translateTab}
                    ]
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: COLORS.gray,
                header: HeaderWrapper
            }}
        >
            <Tab.Screen 
                name='Feed'
                component={FeedWrapper}
                options={{
                    tabBarIcon: ({focused,size})=>{
                        return (
                                <IconBox 
                                    label='inicio'
                                    icon={<Entypo 
                                            name="home" 
                                            size={size} 
                                            color={focused ? COLORS.black : COLORS.gray }
                                             />}
                                    active={focused}
                                />
                            )
                        }
                }}
            />
            <Tab.Screen 
                name='Network'
                component={Feed}
                options={{
                    tabBarIcon: ({focused,size})=>{
                        return (
                                <IconBox 
                                    label='Minha rede'
                                    icon={<Ionicons 
                                            name="people-sharp" 
                                            size={size} 
                                            color={focused ? COLORS.black : COLORS.gray }
                                             />}
                                    active={focused}
                                />
                            )
                        }
                }}
            />
            <Tab.Screen 
                name='Publication'
                component={Feed}
                options={{
                    tabBarIcon: ({focused,size})=>{
                        return (
                                <IconBox 
                                    label='Publicação'
                                    icon={<Entypo 
                                            name="squared-plus" 
                                            size={size} 
                                            color={focused ? COLORS.black : COLORS.gray }
                                             />}
                                    active={focused}
                                />
                            )
                        }
                }}
            />
            <Tab.Screen 
                name='Notification'
                component={Feed}
                options={{
                    tabBarIcon: ({focused,size})=>{
                        return (
                                <IconBox 
                                    label='Notificação'
                                    icon={<FontAwesome
                                            name="bell"  
                                            size={size} 
                                            color={focused ? COLORS.black : COLORS.gray }
                                             />}
                                    active={focused}
                                />
                            )
                        }
                }}
            />
             <Tab.Screen 
                name='Jobs'
                component={Feed}
                options={{
                    tabBarIcon: ({focused,size})=>{
                        return (
                                <IconBox 
                                    label='Vagas'
                                    icon={<Entypo
                                            name="suitcase"   
                                            size={size} 
                                            color={focused ? COLORS.black : COLORS.gray }
                                             />}
                                    active={focused}
                                />
                            )
                        }
                }}
            />
        </Tab.Navigator>
    )
}
