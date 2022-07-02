import React from 'react';
import { useState } from 'react';
import {
   ScrollView,
   Text,
   View,
   TouchableOpacity, 
   Image,
   TextInput,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const Register = () =>{
    const navigation = useNavigation();
    
    return(
        <KeyboardAwareScrollView>
             <View style={styles.contReg}>
                <Text style={styles.textReg}>REGISTER</Text>
                <Text style={styles.textLineR}>________________________________________________</Text>
                <TextInput style={styles.inputFullN} placeholder="Full name" placeholderTextColor={"#D0C5C7"} />
                <TextInput style={styles.inputUserN} placeholder="Username" placeholderTextColor={"#D0C5C7"} />
                <TextInput style={styles.inputEmail} placeholder="Email" placeholderTextColor={"#D0C5C7"} />
                <TextInput style={styles.inputPass} placeholder="Password" placeholderTextColor={"#D0C5C7"} />
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.textRegister}>REGISTER</Text>
                </TouchableOpacity>
                <Text style={styles.textLog}>Allrady has an account?</Text>
            </View>
            <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('HomePage')}>
                <Text style={styles.textLogin}>LOGIN</Text>
                <Text style={styles.textLineL}>________________________________________________</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    )
};
export default Register;