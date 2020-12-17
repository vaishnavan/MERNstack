import React, { Component } from 'react'

export class MovieImageDisplay extends Component {
    render() {
        const { getData } = this.props;
        return (
            <div>
                {getData.map((image) => {
                    return (
                        <div key={image._id}>
                            <img src={image.imageUrl} alt="no" />
                            <p> {image.rating} </p>
                            <h3> {image.title} </h3>
                            <p>  {image.releaseDate.slice(0, 10)} </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MovieImageDisplay
