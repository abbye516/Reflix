import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Components/Landing';
import Catalog from './Components/Catalog';
import MOVIECONSTS from './const'
import MovieDetail from './Components/Move-detail';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faMinus)

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: MOVIECONSTS.movies,
      budget: MOVIECONSTS.maxBudget,
      searchText: "",
      filteredMovies: []
    }
  }
  componentDidMount(){
    this.setState({
      filteredMovies : [...this.state.movies]
    })
  }
  
  _checkBudget = () =>{
    if(this.state.budget > MOVIECONSTS.minMoneyNeeded){
      return true
    }
  }
  // _updateBudget = (movieID) =>{
  //   let updatedMovies = [...this.state.movies]
  //   let currentBudget = this.state.budget

  //   if(updatedMovies[movieID].isRented){
  //     currentBudget -= MOVIECONSTS.movieCost
  //   }
  //   else{
  //     currentBudget += MOVIECONSTS.movieCost
  //   }
  //   this.setState({
  //     budget : currentBudget
  //   }
  //   )
  // }
  // _rentOrReturnMovie = (movieID) =>{
  //   let updatedMovies = [...this.state.movies]
  //   let newBudget = this.state.budget

    
  // }



  rented = (movieID) => {
    let updatedMovies = [...this.state.movies]
    let newBudget = this.state.budget
    let movieNotRented = !updatedMovies[movieID].isRented
    let movieRented = updatedMovies[movieID].isRented

    if (movieNotRented && newBudget > MOVIECONSTS.minMoneyNeeded) {
      updatedMovies[movieID].isRented = true
      newBudget -= MOVIECONSTS.movieCost
    }
    else if (movieNotRented && newBudget < MOVIECONSTS.minMoneyNeeded) {
      alert("sorry you don't have enough money to rent this movie")
    }
    else if (movieRented) {
      updatedMovies[movieID].isRented = false
      newBudget += MOVIECONSTS.movieCost
    }
    this.setState({
      movies: updatedMovies,
      budget: newBudget
    })
  }
  searchMovie = (event) => {
    const movieTitle = event.target.value.toLowerCase()
    let updatedMovies = [...this.state.movies]
    let searchedMovies = updatedMovies.filter(m => m.title.toLowerCase().includes(movieTitle))
    this.setState({
      searchText: movieTitle,
      filteredMovies: searchedMovies
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
          </div>
          <Route path="/" exact component={Landing} />
          <Route path="/catalog" exact render={({ match }) => <Catalog match={match} movies={this.state.filteredMovies} budget={this.state.budget} rented={this.rented} returnMovie={this.returnMovie} search={this.searchMovie} resetSearch={this.resetSearch} searchText={this.state.searchText} />} />
          <Route path="/movies/:id" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />} />
        </div>
      </Router>
    );
  }
}

export default App;
