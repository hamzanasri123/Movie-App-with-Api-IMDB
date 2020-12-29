import React from "react";
import "../App.css";
function Search({ hyndelInput, search, state }) {
  return (
    <div className="main">
      <section className="search-box-wrap">
        <input
          type="text"
          placeholder="Search for a movie"
          className="search-box"
          onChange={hyndelInput}
          onKeyPress={search}
        />
        <button type="submit" onClick={search}>
          Search
        </button>
      </section>
      <div className="movie-list">
        {state.results.map((el) => {
          return (
            <div className="card-search">
              <img src={el.Poster} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
