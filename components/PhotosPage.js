import React from 'react'
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native'
import {Button, Icon} from 'native-base'


export default class PhotoPage extends React.Component {
    constructor() {
        super()
        this.state={

        }
    }

    render() {
        return (
            <View style={{ margin: 10, justifyContent: 'space-around' }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 80}}>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontSize:36}}>My Photos</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Button iconLeft><Icon name='list'/><Text style={{marginLeft: 5}}>List</Text></Button>
                        <Button iconLeft><Icon name='grid'/><Text style={{marginLeft: 5}}>Grid</Text></Button>
                        {/* Button
                    Button */}
                    </View>
                </View>
                <View>
                    {/* SearchBar */}
                </View>
                <ScrollView>
                    {this.props.images.map((a, i) => {
                        return (
                            <View key={i} style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Image style={{ height: 60, width: 90 }} source={{ uri: a.urls.small }} />
                                </View>

                                <View style={{justifyContent: 'center', width: 280, margin: 10}}>
                                    <TouchableHighlight>
                                    <Text>{a.links.self}</Text>
                                    </TouchableHighlight>
                                </View>

                            </View>
                        )
                    })}
                </ScrollView>
                <View style={{ height: 60, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 26 }}>Get Photos</Text>
                </View>
            </View>
        )
    }
}