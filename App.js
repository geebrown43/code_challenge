import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/LandingPage'
export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      photos: [],
      landing: true
    }
  }
  
  async componentDidMount(){
    fetch('https://api.unsplash.com/photos/random?client_id=5f3c9049f0101b057020dc3171e8b4c01b92b22eb53563e1bbfcf333a44d6bcd&count=10').then(items => items.json()).then(data => this.setState({photos: data}))
  }
  render() {
    console.log(this.state.photos.map(a => a.urls.full))
    return (
      <View style={{flex : 1, backgroundColor: 'grey'}}>
        {this.state.landing ? <Landing photo={this.state.photos}/>  : null}
      </View>
    );
  }
}


