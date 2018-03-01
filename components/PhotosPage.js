import React from 'react'
import { View, Text, ScrollView, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'
import { Button, Icon } from 'native-base'
import Grid from './GridView'
import List from './ListView'
import Detail from './DetailsView'


const {width, height} = Dimensions.get('window')

export default class PhotoPage extends React.Component {
constructor(){
    super()
    this. state = {
        gridView: true,
        listView: false,
        detailsView: false,
        size: styles.container,
        buttonHeight: styles.button,
        visible: 'transparent',
        listButton: styles.listInactive,
        gridButton: styles.gridActive,
        listIcon: styles.listColorInactive,
        gridIcon: styles.gridColorActive
    }
}

async componentDidMount(){
    if(width < 380){
        this.setState({size: styles.containerSmall, buttonHeight: styles.buttonContainer})
    }
}
    


    _listView = () => {
        this.setState({ gridView: false, listView: true, detailsView: false, gridButton: styles.gridInactive, listButton: styles.listActive, listIcon: styles.listColorActive, gridIcon: styles.gridColorInactive })
    }
    _gridView = () => {
        this.setState({ gridView: true, listView: false, detailsView: false, gridButton: styles.gridActive, listButton: styles.listInactive, listIcon: styles.listColorInactive, gridIcon: styles.gridColorActive})
    }

    _detailsView = () => {
        this.setState({ gridView: false, listView: false, detailsView: true })
    }

    render() {
        return (
            <View style={{ margin: 10, justifyContent: 'space-around' }}>
                <View style={styles.headingcontainer}>
                    <View style={this.state.size}>
                        <Text style={styles.brand}>My Photos</Text>
                    </View>
                    <View style={this.state.buttonHeight}>
                        <Button  onPress={this._listView} style={this.state.listButton}><Icon name='list' style={this.state.listIcon}/></Button>
                        <Button onPress={this._gridView} style={this.state.gridButton}><Icon name='grid' style={this.state.gridIcon}/></Button>
                    </View>
                </View>
                <View>
                    {/* SearchBar */}
                </View>
                {this.state.gridView ? <Grid images={this.props.images} _detailsView={this._detailsView}/> : null}
                {this.state.listView ? <List images={this.props.images} _detailsView={this._detailsView}/> : null}
                {this.state.detailsView ? <Detail images={this.props.images}/>: null}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <View>
                    <Button iconLeft small onPress={this.props._newPhotos}><Icon name='ios-refresh-circle' style={{color: 'white'}}/><Text style={styles.footer}>Get Photos</Text></Button>
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
        fontSize: 14,
        color: 'white',
        paddingRight: 10
    },
    container: {
        marginTop: 10
    },
    containerSmall: {
        marginTop: 18
    },
    button:{
        flexDirection: 'row',
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 18
    },
    listInactive: {
        backgroundColor: 'white'
    },
    listActive: {
        backgroundColor: 'rgb(50, 124, 246)'
    },
    gridActive: {
        backgroundColor: 'rgb(50, 124, 246)'
    },
    gridInactive: {
        backgroundColor: 'white'
    },
    listColorActive: {
        color: 'white'
    },
    listColorInactive : {
        color: 'rgb(50, 124, 246)'
    },
    gridColorActive: {
        color: 'white'
    },
    gridColorInactive: {
        color: 'rgb(50, 124, 246)'
    }
})