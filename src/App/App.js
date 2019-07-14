import React ,{Component} from 'react'
import FluidGrid from 'react-fluid-grid'
import './App.css';
import galleryData from '../media.json';
import GalleryItem from '../GalleryItem/GalleryItem';


const styleStrategies = [
  { mediaQuery: '(max-width: 619.9px)', style: { numberOfColumns: 1, gutterHeight: 0, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 620px) and (max-width: 719.9px)', style: { numberOfColumns: 2, gutterHeight: 0, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 720px) and (max-width: 919.9px)', style: { numberOfColumns: 3, gutterHeight: 0, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 920px) and (max-width: 1023.9px)', style: { numberOfColumns: 4, gutterHeight: 0, gutterWidth: 0 } },
  { mediaQuery: '(min-width: 1024px)', style: { numberOfColumns: 5, gutterHeight: 0, gutterWidth: 0 } }
]
const transition = 'top 100ms ease-in-out, left 100ms ease-in-out';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {products: galleryData};
    this.productList = this.productList.bind(this);
  }

productList = () => {
    const list = this.state.products.map((product) =>
        <div className = "container" key ={product.id} >
          <GalleryItem  imageUrl =  {require('../media/' + product.image )}
          thumbnail = {require('../media/' + product.thumbnail )}
          desc = {product.description}
          />
        </div>
    );
    return (list);
  }

  render(){
    
    return(
      <FluidGrid
      className='my-grid'
      itemClassName='my-grid-item'
      styleStrategies={styleStrategies}
      transition={transition}
      >
      {this.productList()}
      </FluidGrid>
    );
  }

}
 
export default App;