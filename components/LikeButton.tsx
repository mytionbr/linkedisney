import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Alert, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../constants/theme'
import LottieView from 'lottie-react-native';
import { animations } from '../constants'


const LikeButton = () => {
    const [active, setActive] = React.useState(false);
    const animation = React.useRef<LottieView>(null)
    
    const handleClick = ()=>{
        setActive(true);
        animation.current?.play()
        setTimeout(() => {
            animation.current?.pause()
        }, 1800)
    }

    return (
        <TouchableOpacity
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={handleClick}
      >
            {
                active ? (
                    <LottieView 
                            style={{
                                width: 55,
                                height: 55,
                                position: 'absolute',
                                top: -9

                            }} 
                            ref={animation}
                            source={animations.likeAnimation} 
                            autoPlay 
                            colorFilters={[
                                {
                                  keypath: 'like-hand',
                                  color: COLORS.blue,
                                },
                                {
                                    keypath: 'spark',
                                    color: COLORS.blue,
                                  },
                              ]}
                              
                            />
                ) : (
                    <AntDesign name="like2" size={18} color={COLORS.darkGray} />
                )
            }
            <Text
                style={{
                  ...FONTS.body5,
                  color:  active ? COLORS.blue : COLORS.darkGray,
                  marginTop: active ? 18 : 0,

                }}
              >
                  Gostei
              </Text>

        </TouchableOpacity>
    )
}

export default LikeButton
