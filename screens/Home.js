import React from 'react';
import { View, Text, Alert } from 'react-native';
//import { StackActions, NavigationActions } from 'react-navigation';


export default class HomeScreen extends React.Component {
    /*static navigationOptions = ({ navigation }) => {
        return {
            tabBarOnPress: ({navigation, defaultHandler }) => {
                StackActions.reset({
                    index: 0,

                })
                Alert.alert("New Tab Screen tabBarOnPress working")
                defaultHandler()
            }
        };
    };*/
    render(){
        return(
            <View>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}