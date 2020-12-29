import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./component/Search";
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = " http://www.omdbapi.com/?i=tt3896198&apikey=2dc1759d";

  const search = (e) => {
    console.log(e.type);
    if (e.key === "Enter" || e.type === "click") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        console.log(data);

        let result = data.Search;
        setState((prevState) => {
          return { ...prevState, results: result };
        });
      });
    }
  };
  const hyndelInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
    console.log(state.s);
  };
  return (
    <div className="App">
      <h1>This is a NavBar </h1>
      <main>
        <Search hyndelInput={hyndelInput} search={search} state={state} />
      </main>
    </div>
  );
}
export default App;
