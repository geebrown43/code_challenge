import React from 'react'
import { ScrollView, Image, View, TouchableHighlight, Dimensions, StyleSheet} from 'react-native'



const {width, height} = Dimensions.get('screen')

export default class GridView extends React.Component {
    state = {
        gridSize: styles.smallGrid
    }

    async componentDidMount(){
       if(width > 700){
           return this.setState({gridSize: styles.largeGrid})
       } else {
        return this.setState({gridSize:styles.smallGrid})
       } 
    }
    render() {
        let photos = this.props.images
            return (
                <View style={this.state.gridSize}>
                    {photos.map((a, i) => {
                        return (
                            <View key={i} style={{marginTop: 15, marginLeft:2, marginRight: 2}}>
                                <TouchableHighlight onPress={this.props._detailsView}>
                                <Image style={styles.container} source={{uri: a.urls.regular }}/> 
                                </TouchableHighlight>                       
                            </View>
                        )
                    }) }
                    
                </View>
    
            ) 
        
        
    }
}


const styles = StyleSheet.create({
    container: {
        height: height / 6.8,
        width: width / 2.5
    },
    smallGrid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        left: 25,
    },
    largeGrid : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        left: 90
    }
    
})