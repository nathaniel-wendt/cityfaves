import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    locations: []
  }

  componentDidMount() {
    this.fetchLocData()
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.1672, lng: -105.1019},
      zoom: 13
    });

    this.state.locations.map(location => {

      let marker = new window.google.maps.Marker({
        position: {lat: location.pos.lat, lng: location.pos.lng},
        map: map,
        title: location.name
      })
    });
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAp2UAcZ8h6HlJ_J3Ha9qZcbt6ohSR9yFs&callback=initMap")
    window.initMap = this.initMap
  }

  fetchLocData = () => {
    fetch('https://api.myjson.com/bins/f948q')
    .then(response => response.json())
    .then(data =>
      this.setState({
        locations: data
      },  this.renderMap())
    )
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

/* learned from Yahya Elharony's YouTube Video: http://www.youtube.com/watch?v=W5LhLZqj76s */
function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
