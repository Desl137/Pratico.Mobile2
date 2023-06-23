import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function LoginPage()
{

    const {signIn} = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Image source= {require('../../assets/images/logo.png')} style={styles.imgLogo}/>
            <TextInput
            placeholder = "EMAIL" style={styles.input}/>
            <TextInput
            placeholder = "PASSWORD" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen:"RegisterPage"}}>
                    SIGN UP</Link>
                <Link to={{screen:"ForgetPasswordPage"}}>
                    FORGOT PASSWORD?</Link>
            </View>
        </View>
    )
}