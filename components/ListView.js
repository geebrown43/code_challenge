import React from 'react'
import { View, ScrollView, Text, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')
export default class List extends React.Component {
    render() {
        return (
            <ScrollView>
                {this.props.images.map((a, i) => {
                    return (
                        <View key={i} style={{ margin: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                            <TouchableHighlight onPress={this.props._detailsView}>
                                <Image style={styles.size} source={{ uri: a.urls.regular }} />
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    size: {
        height: height / 4,
        width: width - 100
    }
})