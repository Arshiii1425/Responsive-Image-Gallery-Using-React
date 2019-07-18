import React , {Component} from 'react';
import './GalleryItem.css';

class GalleryItem extends Component{
    render(){
        return(
            <div className="container-item">
                <a className = "container-img" href={this.props.imageUrl}>
                    <img className="img" src = {this.props.thumbnail} alt=""></img>
                </a>
                <span className="img-desc">{this.props.desc}</span>
            </div>
        );
    }
}

export default GalleryItem;
