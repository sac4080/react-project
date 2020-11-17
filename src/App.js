import React,{ Component} from 'react';

import './App.css';
import PostList from './Components/PostList';
import Modal from './Modal'



class App extends Component{
  render(){
    return(
      <div classname="App">
        <div className="container">
        <h1 className="title">
          Latest pics Of the day
          </h1>
          
        <PostList />
        <Modal />
      </div>



      </div>
    )
  }
}
export default App;
