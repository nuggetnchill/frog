import React from "react";

import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import FrogList from "./components/FrogList/FrogList";
import "./assets/froggie.json";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      frogs: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("./froggie.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((demfrogs) => this.setState({ frogs: demfrogs }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { frogs, searchfield } = this.state;
    const filteredFrog = frogs.filter((frog) => {
      return frog.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className='App'>
        <Header />
        <SearchInput searchChange={this.onSearchChange} />
        <FrogList frogs={filteredFrog} />
      </div>
    );
  }
}

export default App;
