import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants/theme';

type Props = {
    text: string
}

const TextBox = ({text} : Props) => {
    const [show, setShow] = React.useState(false);

    const handleShowMore = ()=>{
        setShow(true);
    }

    const ShowMore = ()=>{
        return (
            <TouchableOpacity
                onPress={handleShowMore}
            >
                <Text
                    style={{
                        ...FONTS.body4,
                        color: COLORS.gray
                    }}
                >
                    Veja mais
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <Text
        style={{
          ...FONTS.body4,
          lineHeight: 18,
        }}
      >
            {
             !show ? (
                 <>
                 {
                    text.slice(0,150)
                 }
                    <ShowMore/>
                 </>
             ): (
                 text
             )
            }
        </Text>
    )
}

export default TextBox
