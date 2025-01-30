import { useState } from "react";


import Gamecard from "../gamecards/cards.jsx";
import "./container.css";


export default function GamecardContainer ({ gamecards }) {
    return (
        <div className="gamecards-container">
             <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
          
        </div>
    );
}