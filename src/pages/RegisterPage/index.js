import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";

import styles from "../LoginPage/styles";
import { Link } from "@react-navigation/native";

export default function RegisterPage()
{
    return(
        <View style={styles.container}>
            <Image source= {require('../../assets/images/logo.png')} style={styles.imgLogo}/>
            <TextInput
            placeholder = "USERNAME" style={styles.input}/>
            <TextInput
            placeholder = "EMAIL" style={styles.input}/>
            <TextInput
            placeholder = "PASSWORD" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>SIGN UP</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"LoginPage"}}>
                    SIGN IN</Link>
                <Link to={{screen:"ForgetPasswordPage"}}>
                    FORGOT PASSWORD?</Link>
            </View>
        </View>
    )
}