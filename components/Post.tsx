import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { Post as PostInterface } from '../types/types';
import IconBox from './IconBox';

import IconWrapper from './IconWrapper';
import LikeButton from './LikeButton';
import TextBox from './TextBox';
import VideoView from './VideoView';

type Props  = {
    item : PostInterface,
    index: number
}

const Post = ({item,index} : Props) => {
  
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          flexDirection: "column",
          paddingVertical: SIZES.base,
          width: SIZES.width,
          marginVertical: SIZES.base,
          marginTop: index === 0 ? 70 : 0
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SIZES.radius,
          }}
        >
          <Avatar
            rounded
            size={50}
            source={{
              uri: item.user.img,
            }}
          />
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
              marginLeft: 5,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.black,
              }}
            >
              {item.user.name}
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.gray,
              }}
            >
              {item.user.role}
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.gray,
              }}
            >
              {item.date}
            </Text>
          </View>
          <TouchableOpacity>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={COLORS.darkGray}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.radius,
          }}
        >
          <TextBox text={item.description} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.black,
            marginVertical: 5,
          }}
        >
          {item.midia === "video" ? (
           <VideoView url={item.video} />
          ) : (
            <Image
              source={{
                uri: item.image,
              }}
              resizeMode="contain"
              style={{
                minHeight: 200,
                width: "100%",
              }}
            />
          )}
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.radius,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: SIZES.base,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconWrapper
                icon={<AntDesign name="like1" size={10} color="white" />}
                color="#1E18D3"
              />
              <IconWrapper
                icon={<FontAwesome5 name="hands" size={10} color="white" />}
                color="#219606"
              />
              <IconWrapper
                icon={<AntDesign name="heart" size={10} color="white" />}
                color="#f70e08"
              />
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 5,
              }}
            >
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.gray,
                }}
              >
                {item.likes} Pessoas
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.gray,
              }}
            >
              {item.comments} comentários
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              borderColor: COLORS.white,
              borderTopColor: COLORS.gray,
              borderWidth: 1,
              paddingTop: SIZES.base,
            }}
          >
            <LikeButton />
            <IconBox
              icon={
                <FontAwesome5 name="comment" size={18} color={COLORS.darkGray} />
              }
              label="Comentar"
            />
            <IconBox
              icon={
                <FontAwesome name="share" size={18} color={COLORS.darkGray} />
              }
              label="Compartilhar"
            />
            <IconBox
              icon={<Feather name="send" size={18} color={COLORS.darkGray} />}
              label="Enviar"
            />
          </View>
        </View>
      </View>
    );
  };
  
export default Post
