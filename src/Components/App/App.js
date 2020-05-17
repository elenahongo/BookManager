import React from 'react';
import './App.css';
import CreateBook from '../CreateBook/CreateBook';
import FilterBar from '../FilterBar/FilterBar';
import SearchResults from '../SearchResults/SearchResults';
import CreateList from '../CreateList/CreateList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      listName: 'New Playlist Name',
      listBooks: []
    };
  }

  render () {
    return (
    <div>
      <h1>Book Manager</h1>
      <div>
        <CreateBook/>
          {/* <div>
            <FilterBar/>
            <div class="App-playlist">
              <SearchResults/>
              <CreateList/>
            </div>
          </div> */}
      </div>
    </div>
    );
  }
}

export default App;
