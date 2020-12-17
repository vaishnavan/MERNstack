import React, { Component } from 'react'
import MovieImageForm from '../Admin/MovieImageForm'
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieImageDisplay from '../User/MovieImageDisplay'

class RouterPath extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             movieImageData:[]
        }
    }
    

    create = (imagePayload) =>{
        Axios.post('http://localhost:5000/api/movie/image', imagePayload)
        .then((res) => {
            console.log(res);
        });
    }

    componentDidMount(){
        this.getImage();
    }

    getImage(){
        Axios.get('http://localhost:5000/api/movie/allimage')
        .then((res)=>{
            this.setState({
                movieImageData:res.data,
            });
        });
    }
    
    

    render() {
        const {movieImageData} = this.state;
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path="/">
                            <MovieImageDisplay getData={movieImageData} />
                        </Route>
                        <Route path="/imageForm">
                            <MovieImageForm myData={this.create} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterPath
