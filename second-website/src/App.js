import { data } from "./data.js";
import React from 'react';

import Card from './components/Card';

export default function App(props) {
    const cards = data.map(Profile => {
        return <Card 
            img = {Profile.img}
            name = {Profile.name}
            about = {Profile.about}
            interests = {Profile.interests}
        />
    })
    return(
    <>
        {cards}
    </>
  );
}

