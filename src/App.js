import React from 'react';
import Navigation from './component/Navigation/Navigation';
import Logo from './component/Logo/Logo';
import Signin from './component/Signin/Signin';
import Signup from './component/Signup/Signup';
import CardList from './component/CardList/CardList';
import AddBooks from './component/AddBooks/AddBooks';
import Form from './component/Form/Form';
import Lead from './component/Lead/Lead';
import SearchBox from './component/SearchBox/SearchBox';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      searchField: '',
      user: {
        id: '',
        name: '',
        email: '',
        books: []
      }
    };
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }
  onSearchange = (event) => {
    this.setState({searchField: event.target.value})
  }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      books: data.books
    }})
  }

  render() {
    const filteredBooks = this.state.user.books.filter(book =>{
      return book.titles.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div>
        {
          (this.state.route === 'home' || this.state.route === 'addbooks')?
          <div className="tc">
            <div className="header">
              <Logo />
              <Navigation onRouteChange={this.onRouteChange} />
            </div>
              <Lead name={this.state.user.name} />
            {
              this.state.route === 'addbooks' ?
              <Form email={this.state.user.email} loadUser={this.loadUser} books={this.state.user.books} onRouteChange={this.onRouteChange} /> :
              <div>
                <SearchBox searchChange={this.onSearchange} />
                <AddBooks onRouteChange={this.onRouteChange} />
                <CardList books={filteredBooks} />
              </div> 
            }
          </div>
          : 
          (
            this.state.route === 'signin' ?
            <Signin loadBooks={this.loadBooks} loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> :
            <Signup onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    )
  }
}

export default App;
