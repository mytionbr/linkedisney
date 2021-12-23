import VisibilitySensor from "@svanboxel/visibility-sensor-react-native";
import { Video } from "expo-av";
import React from "react";

type Props = {
  url?: string;
};

const VideoView = ({ url }: Props) => {
  const [visible, setVisible] = React.useState(false);

  const handleVideoVisibility = (visible: boolean) => {
    setVisible(visible);
  };

  return (
    <VisibilitySensor onChange={(visible) => handleVideoVisibility(visible)}>
      {url && (
        <Video
          style={{
            minHeight: 200,
            width: "100%",
          }}
          source={{
            uri: url,
          }}
          useNativeControls
          resizeMode="contain"
          isMuted
          shouldPlay={visible}
        />
      )}
    </VisibilitySensor>
  );
};

export default VideoView;
