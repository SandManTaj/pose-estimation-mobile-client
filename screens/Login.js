import React from 'React';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style = {styles.View}>
                <Input
                    label = 'Email'
                    leftIcon={{ type: 'ionicon', name: 'md-mail', color: 'grey' }}
                    placeholder = 'Enter Email'
                />
                <Input
                    label = 'Password'
                    leftIcon={{ type: 'ionicon', name: 'md-lock', color: 'grey' }}
                    placeholder = 'Enter Password'
                    secureTextEntry = {true}
                />
                <Button 
                    title="Login"
                    onPress={()=>this.props.navigation.navigate('Main')}
                />
                <Button 
                    style = {styles.Button}
                    title="Need Account?"
                    onPress={()=>this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    View: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    Button: {
    }
})