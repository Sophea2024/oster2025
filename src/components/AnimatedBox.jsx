import React, { useState } from "react";
import "./css/AnimatedBox.css";
import frontImg from "../images/oster1.jpg";
import backImg from "../images/oster2.jpg";
import rightImg from "../images/oster3.jpg";
import leftImg from "../images/oster4.jpg";
import topImg from "../images/oster5.jpg";
import buttomImg from "../images/oster6.jpg";

const AnimatedBox = () => {
  const [message, setMessage] = useState("");

  const handleFaceClick = (text) => {
    setMessage(text);
  };
  return (
    <div className="wrap">
      <div className="scene">
        <div className="cube">
          <div
            className="face front"
            onClick={() =>
              handleFaceClick(
              <h2
              style={{color:"darkred"}}
              >
                1. Wir wünschen euch ein wundervolles Osterfest mit vielen bunten Momenten und sonnigen Gedanken!
              </h2>
            )}
          >
            <img src={frontImg} alt="Vorderseite" />
          </div>
          <div
            className="face back"
            onClick={() =>
              handleFaceClick(
                <h2 style={{color:"blue"}}>
                  2. Bunte Eier, Frühlingsduft – Ostern liegt in der Luft!
                </h2>
              )
            }
          >
            <img src={backImg} alt="Rückseite" />
          </div>
          <div
            className="face right"
            onClick={() =>
              handleFaceClick(
                <h2 style={{ color: "gold" }}>
                  3. Hasige Grüße und bunte Eier – ich wünsche dir ein schönes
                  Osterfeiern!
                </h2>
              )
            }
          >
            <img src={rightImg} alt="recte seite" />
          </div>
          <div
            className="face left"
            onClick={() => handleFaceClick(
              <h2 style={{color:"green"}}>
                4. Schokohasen, Frühlingsglanz – ich wünsch dir einen Oster-Tanz!
              </h2>
            )}
          >
            <img src={leftImg} alt="linke seite" />
          </div>
          <div
            className="face top"
            onClick={() => handleFaceClick(
              <h2 style={{ color: "purple" }}>
                5. Ostern ist, wenn die Sonne lacht und das Herz hüpft. 🌷
              </h2>
            )}
          >
            <img src={topImg} alt="uben seite" />
          </div>
          <div
            className="face bottom"
            onClick={() =>
              handleFaceClick(
                <h2 style={{ color: "turquoise" }}>
                  6. Ein frohes und gesegnetes Osterfest mit viel Freude, Hoffnung
                  und Frühling im Herzen!
                </h2>
              )
            }
          >
            <img src={buttomImg} alt="unten seite" />
          </div>
        </div>
      </div>
      {message && (
        <div className="info-box">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default AnimatedBox;
