import { EvilIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { images } from '../constants'
import { COLORS, SIZES } from '../constants/theme'
import SearchBar from './SearchBar'

type Props = {
    openDrawer: ()=> void
}

function Header({openDrawer}:Props) {
    return (
        <View
            style={{
                height: 70,
                width: SIZES.width,
                flexDirection: 'row',
                paddingHorizontal:SIZES.radius,
                paddingTop: 20,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                
            }}
        >
            <TouchableOpacity
                onPress={openDrawer}
            >
            <Avatar 
                size={30}
                source={{
                    uri:
                      images.theOfficeMichael,
                  }}
                rounded
            />
            </TouchableOpacity>
            <SearchBar />
            <MaterialIcons name="message" size={25} color={COLORS.darkGray} />

        </View>
    )
}

export default Header
