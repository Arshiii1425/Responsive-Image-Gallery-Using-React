import React ,{Component} from 'react'
import './App.css';
import galleryData from '../media.json';
import GalleryItem from '../GalleryItem/GalleryItem';

// const targetClassName = "container";
// const defaultDuration = "1s";
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {products: galleryData, dummyList : []};
    this.productList = this.productList.bind(this);
    // this.addDummyList = this.addDummyList.bind(this);  
  }

//   addDummyList(item, duration) {
//     let top = item.offsetTop;
//     let left = item.offsetLeft;
//     let width = item.offsetWidth;
//     let height = item.offsetHeight;
//     setTimeout(
//       function() {
//         item.style.position = 'absolute';
//         item.style.top = top + 'px';
//         item.style.left = left + 'px';
//         item.style.width = width + 'px';
//         item.style.height = height + 'px';
//         let rect = item.getBoundingClientRect();
//         let dummyDiv = document.createElement('div');
//         dummyDiv.classList.add(targetClassName + '-dummy');
//         dummyDiv.style.width = rect.width + 'px';
//         dummyDiv.style.height = rect.height + 'px';
//         dummyDiv.style.visibility = 'hidden';
//         dummyDiv['__' + targetClassName + '_pair'] = item;
//         dummyDiv['__' + targetClassName + '_duration'] = duration;
//         item.parentNode.appendChild(dummyDiv);
//         this.state.dummyList.push(dummyDiv);
//       }
//       .bind(this),
//       0
//   );
    
//   }

//   fetchingData(){
//   let conts = document.getElementsByClassName(targetClassName);
//   for (let i = 0, max = conts.length; i < max; i++) {
//     let cont = conts[i];
//     cont.style.positoin = 'relative';
//     let duration = cont.getAttribute('data-duration')
//       || defaultDuration;
//     let items = cont.getElementsByClassName('container-item');
//     for (let i = 0, max = items.length; i < max; i++) {
//       this.addDummyList(items[i], duration);
//     }
//   }

// }

// animateContainer() {
//   // document.getElementsByClassName('container-item').classList +='container-item2';
//   this.state.dummyList.forEach(function(dummyDiv) {
//     let item = dummyDiv['__' + targetClassName + '_pair'];
//     // let contImages = item.getElementsByClassName('container-img')[0];
//     // let image = contImages.getElementsByClassName('img')[0];
//     // console.log(item);
//     let duration = dummyDiv['__' + targetClassName + '_duration'];
//     if (item.offsetTop !== dummyDiv.offsetTop) {
//       console.log('yes');
//       item.style.transition = 'all ' + duration;
//       item.style.top = dummyDiv.offsetTop + 'px';
//       item.style.left = dummyDiv.offsetLeft + 'px';
//     } else {
//       item.style.transition = '';
//       item.style.left = dummyDiv.offsetLeft + 'px';
//     }
//   });
// }




// componentDidMount() {
// 
//  window.addEventListener("load",this.fetchingData.bind(this));
//  window.addEventListener("resize", this.animateContainer.bind(this));
// }

// componentWillUnmount() {
//  window.removeEventListener("load",this.fetchingData.bind(this));
//  window.removeEventListener("resize", this.animateContainer.bind(this));

// }

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
      <div className="container">
        {this.productList()};
        </div>
    );
  }

}
 
export default App;