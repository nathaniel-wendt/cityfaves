import React, { Component } from 'react';
import ListItem from "./ListItem";

class LocationList extends Component {
    render() {
        return (
            <ol className="location-list">
                {this.props.locations && this.props.locations
                    .map((location, idx) => 
                        <ListItem 
                            key={idx}
                            {...location}
                        />
                )}
            </ol>
        )
    }
}

export default LocationList;