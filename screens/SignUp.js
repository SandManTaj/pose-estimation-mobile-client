import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export default class SignUpScreen extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Input
                    label = 'Email'
                    leftIcon = {{type: 'ionicon', name: 'md-mail', color: 'grey'}}
                    placeholder = 'Enter Email'
                />
                <Input
                    label = 'Password'
                    leftIcon = {{type: 'ionicon', name: 'md-lock', color: 'grey'}}
                    placeholder = 'Enter Password'
                />
                <Input
                    label = 'Confirm Password'
                    leftIcon = {{type: 'ionicon', name: 'md-lock', color: 'grey'}}
                    placeholder = 'Re-Enter Password'
                />
                <Button
                    title="Sign up"
                    onPress={()=>this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})