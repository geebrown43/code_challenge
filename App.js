import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './components/LandingPage'
import PhotoPage from './components/PhotosPage'
import { Constants, Location, Permissions, Font } from 'expo';



const unsplashAPIKey = '97647c8005793cda1f983ca28203bb35863946d4e438541d6736a8759d644295'
const googleAPIKEY = 'AIzaSyARnfsD2NkNKrvm68t2dA6EdB7SWbjaDZI'
export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      photos: [],
      photosPage: false,
      location: null,
      current: '',
      fontLoaded: false
    }
  }
  
  async componentDidMount(){
    await fetch(`https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}&count=10`).then(items => items.json()).then(data => this.setState({photos: data, landing: !this.state.landing}))
    
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({fontLoaded: true})
    this._getLocationAsync()

  }

  _clearLanding = () => {
    this.setState({fontLoaded: !this.state.landing, photosPage: !this.state.photosPage})
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });

    if(this.state.location !== null){
      let lat = this.state.location.coords.latitude
      let lng = this.state.location.coords.longitude
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleAPIKEY}`)
      .then(data => data.json())
      .then(item => this.setState({current:item.results[0].formatted_address}))
    }  
  };

  _newPhotos = () => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}&count=10`).then(items => items.json()).then(data => this.setState({photos: data}))
  }

  render() {
    let value = this.state.photos
    return (
      <View style={{flex : 1}}>
        {this.state.fontLoaded ? <Landing photo={value} _clearLanding={this._clearLanding} currentLocation={this.state.current}/>  : null}
        {this.state.photosPage ? <PhotoPage images={value} _newPhotos={this._newPhotos}/>: null}
      </View>
    );
  }
}


