import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const defaultHistory = createBrowserHistory();

const { REACT_APP_DOGS_HOST: dogsHost, REACT_APP_CATS_HOST: catsHost } =
  process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">&#128571; Cats &amp; Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
    </div>
  );
}

function Dogs({ history } : {history:any}) {
  return (
    <MicroFrontend
      history={history}
      host={dogsHost}
      name="Dogs"
    ></MicroFrontend>
  );
}

function Cats({ history } : {history:any}) {
  return (
    <MicroFrontend
      history={history}
      host={catsHost}
      name="Cats"
    ></MicroFrontend>
  );
}

function GreetingCat({ history } : {history:any}) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}

function Home({ history }: any) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Insert a greeting"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={handleOnClick}>Greet Me</button>
      </div>
      <div className="home">
        <div className="content">
          <div className="cat">
            <img
              width="400px"
              src="https://cataas.com/cat/says/hello"
              alt="cat"
            />
          </div>
          <div className="dog">
            <img
              width="400px"
              src="https://random.dog/91474781-c254-4397-b658-d19b7f0a4f5b.jpeg"
              alt="dog"
            />
          </div>
        </div>
      </div>
      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats history={history}/>
          </div>
          <div className="dog">
            <Dogs history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home history={history} />}/>
          <Route exact path="/cat/:greeting" component={GreetingCat} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
