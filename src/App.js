import React, { Component } from 'react';
import './App.css';
import Year from './components/year'

class App extends Component {

  state = {
    
    years: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    isOpens: [false, false, false, false, false, false, false, false, false, false] 
  }

  expandYearNode = (expandedYear) => {
    this.setState({
      isOpens: this.state.years.map((year, index, array) => 
      {
        if(this.state.isOpens[index] === false && this.state.years[index] === expandedYear) {
          return true;
        }
        else {
          return false;
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>The Navtree Project</h1>
  {this.state.years.map((year, index, array)=>{return <Year year = {year} isOpen = {this.state.isOpens[index]} handleYearClick = {this.expandYearNode.bind(this, year)} />})}
      </div>
    );
  }
}

export default App;
