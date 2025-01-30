import { useState } from "react";


import Gamecard from "../gamecards/cards.jsx";
import "./container.css";


export default function GamecardContainer ({ PLACEHOLDERS}){
    return (
        <div className="gamecards-container">
          //{gamecards.slice(0, 9).map((gamecard, index) => (
            <Gamecard
              key="INDEX"
              title="TITLE"
            />
        </div>
)}