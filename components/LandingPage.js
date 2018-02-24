import React from 'react'
import {View, Text, Button, Image} from 'react-native'




class Landing extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent:'space-between', margin: 20, borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset:{width: 0 , height: 2}, shadowOpacity: 0.2}}>
                <View style ={{alignItems: 'flex-end'}}>
                    <Button title='Close' onPress={this.props._clearLanding}/>
                </View>
                <View style={{alignItems: 'center'}}>
                    {/* <Image style={{height: 200, width: 310}} source={{uri: this.props.photo[0].urls.regular}}/> */}
                    <View>
                    <Text style={{textAlign: 'center'}}>Gavin Brown</Text>
                    <Text style={{textAlign: 'center'}}>@gavindevelops</Text>
                    </View>
                </View>
                
                <View style={{alignItems: 'center'}}>
                   <Text>Geocode Location</Text>
                </View>
            </View>
        )
    }
}




export default Landing