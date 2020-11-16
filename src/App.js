import React,{ Component} from 'react';

import './App.css';

import PostList from './Components/PostList';



class App extends Component{
  render(){
    return(
      <div classname="App">
        <div className="container">
        <h1 className="title">Latest pics Of the day</h1>
        <PostList />
      </div>



      </div>
    )
  }
}
export default App;
