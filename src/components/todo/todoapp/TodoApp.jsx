import React from 'react'
import {Component} from 'react'
import Login from '../login/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from '../welcome/Welcome';
import TodoList from '../todolist/TodoList'


export default class TodoApp extends Component 
{  
    


    render(){
        return(
           <>
               <Router>
                   <div>
                     <Switch>
                       <Route path="/" exact          component = {Login}/>
                       <Route path="/login"           component = {Login}/>
                       <Route path="/welcome"         component = {Welcome}/>
                       <Route path="/todos"            component = {TodoList}/>
                       <Route                         component = {ErrorMessage}/>
                     </Switch>
                   </div>
               </Router>
            </>
         )
    }


    }

    function ErrorMessage(){
        return <div> Unknown Path</div>
     }