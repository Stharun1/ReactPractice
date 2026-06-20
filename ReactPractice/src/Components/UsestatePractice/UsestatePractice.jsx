import { useState } from "react";
import React from "react";

function UsestatePractice() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [isSearching, setIsSearching] = useState(false);
 
  const [errorMessage, setErrorMessage] = useState("");


  function handleFromChange(event) {
    setIsSearching(false);
    setErrorMessage("");
    setFromStation(event.target.value);
  }

  function handleToChange(event) {
    setIsSearching(false);
    setErrorMessage("");
    setToStation(event.target.value);
  }

  function handleSearch() {
    if (fromStation === "" || toStation === "") {
      setErrorMessage("enter station name");
      setIsSearching(false);
    } else {
      setErrorMessage("");
      setIsSearching(true);
    }
  }

  return (
    <div>
      <h2>IRCTC Train Search</h2>

      <div>
        <label>From Station: </label>
        <input
          type="text"
          placeholder="e.g. Kacheguda"
          value={fromStation}
          onChange={handleFromChange}
        />
      </div>

      <div>
        <label>To Station: </label>
        <input
          type="text"
          placeholder="e.g. Kakinada"
          value={toStation}
          onChange={handleToChange}
        />
      </div>

      <button onClick={handleSearch}>
        Search Trains
      </button>


      {errorMessage && (
        <div>
          {errorMessage}
        </div>
      )}

  
      {isSearching && (
        <div>
          Searching trains from {fromStation} to {toStation}...
        </div>
      )}
    </div>
  );
}

export default UsestatePractice;