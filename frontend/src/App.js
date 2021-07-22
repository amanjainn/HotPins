
import * as React from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import RoomIcon from '@material-ui/icons/Room';
import Star from '@material-ui/icons/Stars';
import './app.css'
function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 20.5937,
    longitude: 78.9629,
    height: "100vh",
    width: "100vw",
    zoom: 4
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}

        mapboxApiAccessToken='pk.eyJ1IjoiYW1hbmphaW5uIiwiYSI6ImNrcmVjbGd0MDFxaXgyb3F1YTd6Y3J1c2YifQ.sE_EDXZcx_EZ0fFTVUWivw'
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/amanjainn/ckredu4093d9217qylj27ohqn"
      >
        <Marker
          latitude={12.935723}
          longitude={77.565125}
          offset={-20}
          offsetTop={-10}
        >
          <RoomIcon style={{ fontSize: viewport.zoom * 6, color: "blue" }} />
        </Marker >
        <Popup
          latitude={12.935723}
          longitude={77.565125}
          closeButton={true}
          closeOnClick={true}
          anchor="left"
          zoom={viewport.zoom}>
          <div className="card">
            <label>Place</label>
            <h4 >Aman's home</h4>
            <label>Review</label>
            <p>Home sweet home</p>
            <label className="desc">Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Aman</b></span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
