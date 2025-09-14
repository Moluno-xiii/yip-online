import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type IoniconsProps = ComponentProps<typeof Ionicons>;

const HeaderIcon: React.FC<IoniconsProps> = ({ color = "white", ...rest }) => {
  return <Ionicons color={color} size={24} {...rest} />;
};

export default HeaderIcon;
