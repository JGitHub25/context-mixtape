import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";

export const Controls = () => {
    const { genre, sortOrder, setGenre, setSortOrder } = useContext(MixtapeContext);

    const genres = ['all', 'hip hop', 'rap', 'rock', 'pop']

    //Se usa un handler para controlar el valor/state.
    const onGenreChange = (e) => setGenre(e.target.value)

    //Se generan las options dinámicamente.
    const genreOptions = genres.map((genreName, index) => (
        <option key={index} value={genreName}>
            {genreName.charAt(0).toUpperCase()
                + genreName.slice(1)}
        </option>
    ))

    return (
        <div className="controls">
            <label htmlFor="genre">Genre</label>
            <select id="genre" value={genre} onChange={onGenreChange}>
                {genreOptions}
            </select>
            <button onClick={() => { setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending') }}>{sortOrder.charAt(0).toUpperCase()
                + sortOrder.slice(1)} Order</button>
        </div>
    );
};
