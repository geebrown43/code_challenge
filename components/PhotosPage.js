import React from 'react'
import { View, Text, ScrollView, Image, TouchableHighlight, StyleSheet } from 'react-native'
import {Button, Icon} from 'native-base'


export default class PhotoPage extends React.Component {
    constructor() {
        super()
        this.state={
            gridView: true,
            listView: false
        }
    }

    _switchViews = () => {
        this.setState({gridView: !this.state.gridView, listView: !this.state.listView})
    }

    render() {
        return (
            <View style={{ margin: 10, justifyContent: 'space-around' }}>
                <View style={styles.headingcontainer}>
                    <View style={{marginTop: 10}}>
                        <Text style={styles.brand}>My Photos</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Button iconLeft onPress={this._switchViews}><Icon name='list'/><Text style={{marginLeft: 5}}>List</Text></Button>
                        <Button iconLeft onPress={this._switchViews}><Icon name='grid'/><Text style={{marginLeft: 5}}>Grid</Text></Button>
                    </View>
                </View>
                <View>
                    {/* SearchBar */}
                </View>
                {this.state.gridView}
                {this.state.listView}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                    <Text style={styles.footer}>Get Photos</Text>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create ({
    brand: {
        fontFamily: 'open-sans',
        fontSize: 28
    },
    headingcontainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    footer:{
        textAlign: 'center',
        fontSize: 26,
        fontFamily: 'open-sans'
    }
})