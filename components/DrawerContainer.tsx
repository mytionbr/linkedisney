import { AntDesign, Ionicons } from "@expo/vector-icons";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import React from "react";
import { SectionList, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DRAWER_SECTIONS, USER } from "../constants/dummy";
import { COLORS, FONTS, SIZES } from "../constants/theme";

type Props = {
  handleClose: ()=> void
}

const DrawerHeader = ({ handleClose }: Props) => {
  return (
    <View
      style={{
        height: 140,
        width: "100%",
        backgroundColor: COLORS.paper,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.radius,
        paddingVertical: 20,
        alignItems: "center",
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
      }}
    >
      <View>
        <Avatar
          size={50}
          source={{
            uri: USER.img,
          }}
          rounded
        />
      </View>
      <View
        style={{
          justifyContent: "space-evenly",
          height: "100%",
          flex: 1,
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            fontWeight: "600",
          }}
        >
          {USER.name}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: "#184fe7",
            fontWeight: "600",
          }}
        >
          Visualizar perfil
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: "#184fe7",
            fontWeight: "600",
          }}
        >
          Configurações
        </Text>
      </View>
      <TouchableOpacity onPress={handleClose}>
        <AntDesign name="close" size={24} color={COLORS.darkGray} />
      </TouchableOpacity>
    </View>
  );
};


const DrawerSections = () => {
  
  function renderItem (title:string){
      return (
          <TouchableOpacity
            style={{
                width: '100%',
                padding: SIZES.radius,
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <Ionicons name="people" size={20} color={COLORS.darkGray} />
                <View
                    style={{
                        paddingHorizontal: SIZES.base
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body4,
                            fontWeight: '600'
                        }}
                    >
                        {title}
                    </Text>
                </View>
          </TouchableOpacity>
      )
  }

  return (
    <View
        style={{
            padding: SIZES.base,
            flex: 1
        }}
    >
      <SectionList
        sections={DRAWER_SECTIONS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => renderItem(item)}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{...FONTS.body3, color: COLORS.gray}}>{title}</Text>
        )}
        renderSectionFooter={()=>(
            <View style={{
                borderBottomColor: COLORS.darkGray,
                borderBottomWidth: 1,
                marginBottom: SIZES.radius
            }} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const DrawerContainer = ({ navigation }: { navigation: DrawerNavigationHelpers }) => {
  const handleClose = () => {
    navigation.closeDrawer();
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <DrawerHeader handleClose={handleClose} />
      <DrawerSections />
    </View>
  );
};

export default DrawerContainer;
