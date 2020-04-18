import {DefaultTheme} from "@react-navigation/native";
import colors from "./colors";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        colors,
    }
};

export default theme;
