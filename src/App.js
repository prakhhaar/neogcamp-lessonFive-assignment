import React, { useState } from "react";
import "./styles.css";

const musicGenre = {
  Hiphop: [
    { name: "Lose Yourself", by: "Eminem", ratings: "9/10" },
    { name: "Ms. Jackson", by: "Outcast", ratings: "9/10" },
    { name: "Mind Playing Tricks on Me", by: "Geto Boys", ratings: "8/10" },
    { name: "Lost Ones", by: "Lauryn Hill", ratings: "7/10" }
  ],
  Electronic: [
    { name: "Animals", by: "Martin Garrix", ratings: "9/10" },
    { name: "Levels", by: "Avicii", ratings: "9/10" },
    { name: "Titanium", by: "David Guetta", ratings: "8/10" },
    { name: "Lean On", by: "DJ Snake", ratings: "8/10" }
  ],
  Dubstep: [
    { name: "I can't stop", by: "Flux Puvilion", ratings: "9/10" },
    { name: "Promises", by: "NERO", ratings: "8/10" },
    { name: "Bangarang", by: "Skrillex", ratings: "8/10" },
    { name: "Centipede", by: "Knife party", ratings: "7/10" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Dubstep");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Good music🎵</h1>
      <p style={{ fontSize: "smaller" }}>
        Check out my favourite music from each genre.
      </p>

      <div>
        {Object.keys(musicGenre).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <ul style={{ paddingInlineStart: "0", textAlign: "left" }}>
        {musicGenre[selectedGenre].map((music) => (
          <li
            key={music.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "0.5px solid black",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem"
            }}
          >
            <div style={{ fontSize: "larger" }}> {music.name} </div>
            <div style={{ fontSize: "smaller" }}> By {music.by} </div>
            <div style={{ fontSize: "smaller" }}> {music.ratings} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
