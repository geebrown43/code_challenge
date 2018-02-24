import React from 'react'
import {View, Text, Button, ScrollView, Image} from 'react-native'


export default class PhotoPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this.props.images)
        return(
            <View style={{margin:20, justifyContent:'space-around'}}>
            <View>
                <View>
                    <Text>My Photos</Text>
                </View>
                <View>
                    {/* Button
                    Button */}
                </View>
            </View>
            <View>
                {/* SearchBar */}
            </View>
            <ScrollView>
                    {this.props.images.map((a, i) =>{
                        return (
                            <View key={i} style={{margin: 10}}>
                            <Image  style={{height:60, width: 90}} source={{uri: a.urls.small }}/>
                            </View>
                        )
                    })}
            </ScrollView>
            <View style={{height: 60}}>
                <Text style={{textAlign: 'center'}}>Get Photos</Text>
            </View>
            </View>
        )
    }
}