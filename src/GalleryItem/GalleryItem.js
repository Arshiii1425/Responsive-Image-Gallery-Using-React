import React , {Component} from 'react';
import './GalleryItem.css';

class GalleryItem extends Component{
    render(){
        return(
            <div className="gallery">
                 <a href={this.props.imageUrl}>
                     <img className = "image-item" src = {this.props.thumbnail} alt="ItemComponent"></img>
                 </a>
                 <span class="desc-img">{this.props.desc}</span>
            </div>
        );
    }
}

export default GalleryItem;
