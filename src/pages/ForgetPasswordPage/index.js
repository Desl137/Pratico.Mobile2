import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage()
{
    return(
        <View style={styles.container}>
            <Image source= {require('../../assets/images/logo.png')} style={styles.imgLogo}/>
            <TextInput
            placeholder = "EMAIL" style={styles.input}/>
            <TextInput/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>RECOVER</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"RegisterPage"}}>
                    SIGN UP</Link>
                <Link to={{screen:"LoginPage"}}>
                    SIGN IN</Link>
            </View>
        </View>
    )
}