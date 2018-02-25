import React from 'react'
import { ScrollView, Image, View, TouchableHighlight} from 'react-native'



export default class GridView extends React.Component {

    render() {
        let photos = this.props.images
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', left: 3}}>
                {photos.map((a, i) => {
                    return (
                        <View key={i} style={{marginTop: 15, marginLeft:2, marginRight: 2}}>
                            <TouchableHighlight onPress={this.props._detailsView}>
                            <Image style={{height: 105, width: 190}} source={{uri: a.urls.regular }}/> 
                            </TouchableHighlight>                       
                        </View>
                    )
                }) }
                
            </View>

        )
    }
}