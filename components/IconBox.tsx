import React, { ReactElement } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

type Props = {
    icon: ReactElement,
    label: string
}

const IconBox = ({ icon, label }: Props) => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {icon}
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.darkGray,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };
  

export default IconBox
