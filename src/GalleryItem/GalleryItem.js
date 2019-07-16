import React , {Component} from 'react';
import './GalleryItem.css';

class GalleryItem extends Component{
    render(){
        return(
            <div className="container">
                <a href={this.props.imageUrl}>
                    <img src = {this.props.thumbnail} alt=""></img>
                </a>
                <span className="title">{this.props.desc}</span>
            </div>
        );
    }
}

export default GalleryItem;
