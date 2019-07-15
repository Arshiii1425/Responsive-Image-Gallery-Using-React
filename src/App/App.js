import React ,{Component} from 'react'
import './App.css';
import galleryData from '../media.json';
import GalleryItem from '../GalleryItem/GalleryItem';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {products: galleryData};
    this.productList = this.productList.bind(this);
  }

productList = () => {
    const list = this.state.products.map((product) =>
          <GalleryItem key ={product.id} imageUrl =  {require('../media/' + product.image )}
          thumbnail = {require('../media/' + product.thumbnail )}
          desc = {product.description}
          />
    );
    return (list);
  }

  render(){
    
    return(
      <div className="container-all">
        {this.productList()};
        </div>
    );
  }

}
 
export default App;