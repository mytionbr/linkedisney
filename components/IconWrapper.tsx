import { Icon } from '@expo/vector-icons/build/createIconSet';
import React, { ReactElement } from 'react'
import { View } from 'react-native';

type Props = {
    icon: ReactElement<any, any>,
    color: string 
}

const IconWrapper = ({ icon, color }: Props) => {
    return (
      <View
        style={{
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          width: 20,
          height: 20,
          borderRadius: 50,
        }}
      >
        {icon}
      </View>
    );
  };

export default IconWrapper
