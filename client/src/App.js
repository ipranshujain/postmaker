import React from 'react';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux'
import Headbar from './components/headbar'
import Navbar from "./components/navbar"
import Post from './components/post'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Postadd from './components/postadd';
class  App extends React.Component {
  componentDidMount(){
    axios.get("/post/allpost").then((data)=>{
      console.log("Data is:\n"+data.data[0].title);
      this.props.dispatch({
        type:"ADD_POSTS",
        posts:data.data
      });
      
    })
  }
  render()
  {
    // console.log("Data is:"+this.props.posts);
    return (
    <div>
    <Router>
      <Headbar/>
      <Navbar/>
        <Switch>
          <Route path="/allpost">
            <Post/>
          </Route>
          <Route path="/" exact>
            <Postadd/>
          </Route>
        </Switch>
    </Router>
    </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    posts:state.posts
  };
}
export default connect(mapStateToProps)(App);
