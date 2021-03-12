import React, {Component} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./components/home.component";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Nav from "./components/nav.component";
import axios from "axios";

export default class App extends Component {
    componentDidMount = () => {
        axios.get('user')
            .then(res => {
                // console.log(res)
                this.setState({
                    user: res.data
                });
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Nav/>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path="/" component={() => <Home user={this.state.user}/>}/>
                                <Route exact path="/login" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
