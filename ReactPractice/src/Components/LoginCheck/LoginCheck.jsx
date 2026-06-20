import React from "react";
import { useState } from "react";

function UsestatePractice() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  function handleFromChange(event) {
    setErrorMessage("");
    setIsSearching(false);
    setFromStation(event.target.value);
  }

  function handleToChange(event) {
    setErrorMessage("");
    setIsSearching(false);
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
    <>
      <div className="maindiv">
        <h4> IRCTC Train  </h4>
        <div>
          <input
            name="fromStation"
            type="text"
            value={fromStation}
            onChange={handleFromChange}
          />
        </div>

        <div className="pwd">
          <input
            name="toStation"
            type="text"
            value={toStation}
            onChange={handleToChange}
          />
        </div>
      </div>
      <div>
        <button onClick={handleSearch}> Search Trains </button>
      </div>

      <div className="dispaly">
        {errorMessage && (
          <p> {errorMessage} </p>
        )}
        {isSearching && (
          <p> Searching trains from {fromStation} to {toStation}... </p>
        )}
      </div>
    </>
  );
}

export default UsestatePractice;