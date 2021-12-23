import React from "react";
import { Animated, FlatList, View } from "react-native";
import { COLORS } from "../constants/theme";
import Post from "../components/Post";
import { POSTS } from "../constants/dummy";

type Props = {
  scrollY: Animated.Value
}

const Feed = ({scrollY} : Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.paper,
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={POSTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <Post item={item} index={index} />}
        onScroll={(e)=>{
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
      />
    </View>
  );
}


export default Feed