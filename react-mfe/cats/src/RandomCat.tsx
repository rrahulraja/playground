import { useEffect, useState } from "react";

export default function RandomCat() {
  const [randomCatImage, setRandomCatImage] = useState("");

  const fetchRandomCat = () => {
    setRandomCatImage("");

    fetch("https://aws.random.cat/meow")
      .then((res) => res.json())
      .then((catInfo) => setRandomCatImage(catInfo.file));
  };

  useEffect(() => {
    if (randomCatImage === '') fetchRandomCat();
  });

  return (
    <div>
      <header>
        <h3> Cat of the day </h3>
        <div>
          <button onClick={() => fetchRandomCat()}>New Cat</button>
        </div>
        {randomCatImage !== "" ? (
          <div>
            <img src={randomCatImage} width="400px" alt="cat"></img>
          </div>
        ) : (
          <div>Loading page</div>
        )}
      </header>
    </div>
  );
}
