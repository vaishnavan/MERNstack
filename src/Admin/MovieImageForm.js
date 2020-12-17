import React, { Component } from 'react'

export class MovieImageForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            streamType:'',
            title:'',
            imageUrl:'',
            rating:'',
            releaseDate:''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]:value,
        });
    }

    handleClick = (e) =>{
        const { streamType, title, imageUrl, rating, releaseDate} = this.state;
        const { myData } = this.props;
        e.preventDefault();
        const imagePayload = {
            streamType:streamType,
            title:title,
            imageUrl:imageUrl,
            rating:rating,
            releaseDate:releaseDate
        }
        myData(imagePayload);
    }


    

    render() {
        const { streamType, title, imageUrl, rating, releaseDate} = this.state;
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Genre Type</label>
                            <input type="text" className="form-control" name="streamType" value={streamType} onChange={(e) => this.handleChange(e)}  />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Movie Title</label>
                            <input type="text" className="form-control" name="title" value={title} onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Movie URL</label>
                            <input type="text" className="form-control" name="imageUrl" value={imageUrl} onChange={(e) => this.handleChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Movie Rating</label>
                            <input type="number" className="form-control" name="rating" value={rating} onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Release Date</label>
                            <input type="date" className="form-control" name="releaseDate" value={releaseDate} onChange={(e) => this.handleChange(e)}  />
                        </div>
                        <button type="submit" onClick={this.handleClick} className="btn btn-primary">Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MovieImageForm
