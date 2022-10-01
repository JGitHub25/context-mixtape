import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";
import { Song } from "./Song";

export const SongList = () => {
    // Your code here! ✨
    const { songs, genre, sortOrder } = useContext(MixtapeContext);

    const renderSongs = (songList) => {
        const songsByGenre = songList.filter((song) => genre === 'all' || song.genre === genre);
        const songsToRender = songsByGenre.sort((a, b) => a.year - b.year);
        if (sortOrder === 'descending') {
            songsToRender.reverse()
        }

        return songsToRender.map(song => <Song {...song} key={song.name} />);
    }


    return (
        <>
            {renderSongs(songs)}
        </>
    );
};
