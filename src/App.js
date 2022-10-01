import React from "react";
import { Controls } from "./Controls";
import { MixtapeProvider } from "./MixtapeContext";
import { SongList } from "./SongList";

export const MixtapeApp = () => {
  return (
    <MixtapeProvider songs={songs}>
      <div className="app">
        <h1 className="heading">My 🔥 Mixtape</h1>
      </div>
      <Controls />
      <SongList />
    </MixtapeProvider>
  );
};

const songs = [
  {
    artist: "Smash Mouth",
    genre: "pop",
    name: "All Star",
    year: 1999
  },
  {
    artist: "Drake",
    genre: "rap",
    name: "Hotline Bling",
    year: 2015
  },
  {
    artist: "Lizzo",
    genre: "hip hop",
    name: "Juice",
    year: 2019
  },
  {
    artist: "Rick Astley",
    genre: "rock",
    name: "Never Gonna Give You Up",
    year: 1987
  },
  {
    artist: "4 Non Blondes",
    genre: "rock",
    name: "What's Up",
    year: 1993
  }
];
