import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    imgLogo: {
        height: 150,
        width: 150,
        marginBottom: 15
    },
    input: {
        borderWidth: 3,
        borderColor: 'black',
        width: '40%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'orange',
        borderRadius: 5
    },
    btnLogin: {
        borderWidth: 2,
        borderColor: 'black',
        width: '20%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'lightblue'
    },
    viewLinks:{
        marginTop: 10,
        flexDirection: 'column',
        width: '30%',
        justifyContent: 'space-between',
    }
});

export default styles;
