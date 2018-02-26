import React from 'react'
import { View, ScrollView, Text, Image, TouchableHighlight} from 'react-native'



export default class Details extends React.Component {
    render(){
        return (
            <ScrollView>
                    {this.props.images.map((a, i) => {
                        return (
                            <View key={i} style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Image style={{ height: 80, width: 120 }} source={{ uri: a.urls.small }} />
                                </View>

                                <View style={{justifyContent: 'center', width: 280, margin: 10}}>
                                    <TouchableHighlight>
                                    <Text style={{color: 'rgb(69, 129, 229)'}}>{a.links.self}</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
        )
    }
}