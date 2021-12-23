import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { TextInput, View } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'


const SearchBar = ()=>{
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.lightBlue,
                width: 250,
                height: 35,
                paddingHorizontal: 5,
                borderRadius: SIZES.base
            }}
        >
            <FontAwesome name="search"  size={18} color={COLORS.darkGray} />
            <TextInput 
                style={{
                    backgroundColor:'transparent',
                    marginLeft: 5
                }}
                placeholder='Pesquisar'
            />
        </View>
    )
}


export default SearchBar
