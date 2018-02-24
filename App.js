import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/LandingPage'
export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      photos: [],
      landing: false
    }
  }
  
  async componentDidMount(){
    fetch('https://api.unsplash.com/photos/random?client_id=5f3c9049f0101b057020dc3171e8b4c01b92b22eb53563e1bbfcf333a44d6bcd&count=10').then(items => items.json()).then(data => this.setState({photos: data, landing: !this.state.landing}))
  }

  _clearLanding = () => {
    this.setState({landing: !this.state.landing})
  }

  render() {
    let value = this.state.photos
    return (
      <View style={{flex : 1}}>
        {this.state.landing ? <Landing photo={value} _clearLanding={this._clearLanding}/>  : null}
      </View>
    );
  }
}


