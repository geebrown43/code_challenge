import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {Button, Icon} from 'native-base'



class Landing extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent:'space-between', margin: 20, borderRadius: 1.5, borderWidth: 0.16, borderColor: 'black', shadowColor: 'black', shadowOffset:{width: 0 , height: 2}, shadowOpacity: 0.2}}>
                <View style ={{alignItems: 'flex-end'}}>
                    <View>
                    <Button transparent onPress={this.props._clearLanding}><Icon name='close' style={{fontSize: 40, color: 'gray'}}/></Button>
                    </View>
                    
                </View>
                <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
                    <Image style={{height: 200, width: 310}} source={{uri: this.props.photo[0].urls.regular}}/>
                    <View style={{borderWidth: 1, borderRadius: 50, height: 100, width: 100, marginTop: 20, marginBottom: 10}}></View>
                    <View>
                    <Text style={styles.name}>Gavin Brown</Text>
                    <Text style={styles.tag}>@gavindevelops</Text>
                    </View>
                </View>
                
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginBottom: 40}}>
                   

                    <Icon name='pin'/>
                   <Text style={styles.location}>{this.props.currentLocation}</Text>
                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 22,
        textAlign:  'center',
        fontFamily: 'open-sans'
    },
    tag:{
        fontSize: 16,
        textAlign:  'center',
    },
    location:{
        fontSize: 12,
        margin: 10
    }
})


export default Landing