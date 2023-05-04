import { Pressable, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons";

const IconButton = ({icon,onPress, color, stylebutton}) =>{
    
    return (
        <TouchableOpacity onPress={onPress} style={stylebutton}>
            <Ionicons name={icon} size={24} color={color}/>
        </TouchableOpacity>
    );
}

export default IconButton;