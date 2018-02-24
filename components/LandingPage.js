import React from 'react'
import {View, Text, Button, Image} from 'react-native'




class Landing extends React.Component{
    render(){
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style ={{backgroundColor: 'black', marginTop: 30}}>
                    <Button onPress={this._getphoto} title='Press' />
                    {/* Button */}
                </View>
                <View style={{backgroundColor: 'grey', height: 300}}>
                    <Image source={{uri: this.props.photos[0].urls.full}}/>
                
                {/* Image */}
                </View>
                <View>
                    {/* Personal Image
                    Name
                    Handle */}
                </View>
                <View>
                    {/* Location */}
                </View>
            </View>
        )
    }
}




export default Landing