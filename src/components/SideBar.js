import React, { Component } from 'react';
import LocationList from './LocationList';

class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
                <input type={"search"} id={"search"} placeholder={"Search Locations"} />
                <LocationList {...this.props} />
            </div>
        )
    }
}

export default SideBar;