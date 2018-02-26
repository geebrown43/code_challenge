import React from 'react'
import { View, Text, ScrollView, Image, TouchableHighlight, StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'
import Grid from './GridView'
import List from './ListView'
import Detail from './DetailsView'

export default class PhotoPage extends React.Component {

    state = {
        gridView: true,
        listView: false,
        detailsView: false
    }


    _listView = () => {
        this.setState({ gridView: false, listView: true, detailsView: false })
    }
    _gridView = () => {
        this.setState({ gridView: true, listView: false, detailsView: false})
    }

    _detailsView = () => {
        this.setState({ gridView: false, listView: false, detailsView: true })
    }

    render() {
        console.log(this.props.images)
        return (
            <View style={{ margin: 10, justifyContent: 'space-around' }}>
                <View style={styles.headingcontainer}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.brand}>My Photos</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Button transparent onPress={this._listView}><Icon name='list' fontSize={24}/></Button>
                        <Button transparent onPress={this._gridView}><Icon name='grid' fontSize={24}/></Button>
                    </View>
                </View>
                <View>
                    {/* SearchBar */}
                </View>
                {this.state.gridView ? <Grid images={this.props.images} _detailsView={this._detailsView}/> : null}
                {this.state.listView ? <List images={this.props.images} _detailsView={this._detailsView}/> : null}
                {this.state.detailsView ? <Detail images={this.props.images}/>: null}
                <View style={{ alignItems: 'center', marginTop: 6 }}>
                    <View>
                    <Button iconLeft transparent onPress={this.props._newPhotos}><Icon name='ios-refresh-circle'/><Text style={styles.footer}>Get Photos</Text></Button>
                    </View>                        
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    brand: {
        fontFamily: 'open-sans',
        fontSize: 28
    },
    headingcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        textAlign: 'center',
        fontSize: 18
    }
})