import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  const [dogImage, setDogImage] = useState("");

  const fetchDoggo = () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => setDogImage(dogInfo.message));
  };

  useEffect(() => {
    if (dogImage === "") fetchDoggo();
  });

  return (
    <div>
      <header>
        <h3> Doggo of the day </h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Doggo</button>
        </div>
        {dogImage !== "" ? (
          <div>
            <img src={dogImage} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image </div>
        )}
      </header>
    </div>
  );
}

export default App;
