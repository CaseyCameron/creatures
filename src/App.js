import { Component } from 'react';
import React from 'react';
import request from 'superagent';

import CreatureList from './CreatureList';
import CreatureSearch from './CreatureSearch';
import creatures from './creatures';
import Footer from './Footer';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    creatures: []
  }

  async componentDidMount(){
    const response = await request.get('https://lab-06-server-setup.herokuapp.com/api/creatures');
    this.setState({ creatures: response.body });
  }

  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creatures
      .filter(thing => {
        return !nameFilter || thing.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
  }

  render() {
    const { creatures } = this.state;
    return (
      <div className="App">
  
        <Header/>

        <CreatureSearch onSearch={this.handleSearch}/>

        <main>
          <CreatureList creatures={creatures}/>
        </main>
        <Footer/>

      </div>
    );
  }

}

export default App;
