import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native'

export default class Users extends Component {

    state={
        data: []
    }

    fetchData = async()=>{
        // const response = await fetch('http://192.168.1.6:4545/users');
        const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
        const users = await response.json();
        this.setState({data:users});
    }

    componentDidMount(){
        this.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>List Users</Text>
                <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item})=>

                <View style={styles.lviContainer}>
                    <Text style={styles.lviTitle}>{item.username} - {item.name}</Text>
                    <Text style={styles.lviCaption}>{item.email}</Text>
                </View>

                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acacac',
        paddingVertical: 10,
    },
    logoText: {
        color: '#3498db',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10,
        marginBottom: 20,
        textAlign: 'center',
    },
    lviContainer: {
        backgroundColor: '#fcfcfc',
        margin: 10,
        marginBottom: 0,
        padding: 10,
    },
    lviTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lviCaption: {
        color: 'rgba(0, 0, 0, 0.3)'
    }
});
