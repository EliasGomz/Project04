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

const HomePage = () => {
    const navigation = useNavigation();

    return(
        <KeyboardAwareScrollView>
            <View style={styles.ViewP}>
                <Image
                    style={styles.img}
                    source={require('../../img/fondo.jpg')}
                /> 
            </View>    

            <View style={styles.contLog}>
                <Text style={styles.textLog}>LOGIN</Text>
                <Text style={styles.textLineL}>________________________________________________</Text>
                <TextInput style={styles.inputEmail} placeholder="Email" placeholderTextColor={"#D0C5C7"} />
                <AntDesign name='user' style={styles.iconL}/>
                <TextInput style={styles.inputPass} placeholder="Password" placeholderTextColor={"#D0C5C7"} />
                <AntDesign name='eyeo' style={styles.iconP}/>
                <Text style={styles.textFor}>Forgot password?</Text>
                <TouchableOpacity style={styles.btnClic}>
                    <Text style={styles.textClic}>Click here</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textLogin}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.textOr}>Or try login using</Text>
                <TouchableOpacity style={styles.btnGoogle}>
                    <AntDesign name='google' style={styles.iconG}/>
                    <Text style={styles.textG}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFace}>
                    <AntDesign name='facebook-square' style={styles.iconF}/>
                    <Text style={styles.textF}>Facebook</Text>
                </TouchableOpacity>
                <Text style={styles.textReg}>Don't have account?</Text>
            </View>
            <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.textRegister}>REGISTER</Text>
                <Text style={styles.textLineR}>________________________________________________</Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>
    )
};
export default HomePage;