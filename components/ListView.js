import React from 'react'
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native'



export default class List extends React.Component {
    render(){
        return (
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
        )
    }
}