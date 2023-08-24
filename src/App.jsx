import "./App.css";
import { useState } from "react";
import AlbumList from "./components/AlbumList";
export default function App() {
  const myAlbums = [
    {
      name: "Quacking Melodies",
      songs: [
        "Duck Dreams",
        "Feathered Serenade",
        "Pondside Lullaby",
        "Wings of Harmony",
      ],
    },
    {
      name: "Duck Beats",
      songs: [
        "Quackstep Groove",
        "Waddle and Jive",
        "Ducktail Boogie",
        "Splashy Moves",
      ],
    },
    {
      name: "Duck Ballads",
      songs: [
        "Misty Waters",
        "Whispers of Quacks",
        "Reflections in the Pond",
        "Solitude Soaring",
      ],
    },
  ];

  return (
    <div className="App">
      <h1>My albums</h1>
      <AlbumList albums={myAlbums} />
    </div>
  );
}
