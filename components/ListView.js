import React from 'react'
import {View, ScrollView, Text, Image, TouchableHighlight} from 'react-native'



export default class List extends React.Component {
    render(){
        return (
            <ScrollView>
                    {this.props.images.map((a, i) => {
                        return (
                            <View key={i} style={{ margin: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                <TouchableHighlight onPress={this.props._detailsView}>
                                    <Image style={{ height: 200, width: 300 }} source={{ uri: a.urls.small }} />
                                </TouchableHighlight>
                            </View>
                        )
                    })}
                </ScrollView>
        )
    }
}