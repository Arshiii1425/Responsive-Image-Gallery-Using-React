import React, {
  Component
} from 'react';
import './App.css';
import galleryData from '../media.json';
import GalleryItem from '../GalleryItem/GalleryItem';


let minHeightWindow = Number.MAX_SAFE_INTEGER;
const minHeightWindowRatio = 0.25;
let minHeightRow = Number.MAX_SAFE_INTEGER;
const targetClassName = "flex-wrap-anim";
const defaultDuration = "0.5s";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: galleryData,
      dummyList: []
    };

    this.productList = this.productList.bind(this);
    this.addToDummyList = this.addToDummyList.bind(this);
    this.init = this.init.bind(this);
    this.init();

  }

  // This function pre-calculating the minimum height of each row...

  init() {
    minHeightWindow = window.innerHeight;
    minHeightRow = minHeightWindow * minHeightWindowRatio;
  }

  // This function is doing multitask... 
  //  1. Make the original div to be positioned forcibly to a specific position 
  //  (so, it is not get re-positioned by the Flex re-positoin mechanism).
  //  2. Making a dummy div (whose visibility is hidden) per each original div with class 'flex-wrap-anim'
  //  3. Make the dummy div's size equal to the original div
  //  4. Add the dummy div to the Flex container div (parent div of the original div)
  //  5. Add the dummy div to the list

  addToDummyList(item, duration) {
    var top = item.offsetTop;
    var left = item.offsetLeft;
    setTimeout(function () {
        item.style.position = "absolute";
        item.style.left = left + "px";
        item.style.top = top + "px";
        var dummyDiv = document.createElement('div');
        dummyDiv.classList.add(targetClassName + '-dummy');
        var rect = item.getBoundingClientRect();
        dummyDiv.style.width = rect.width + 'px';
        dummyDiv.style.height = rect.height + 'px';
        dummyDiv.style.visibility = 'hidden';
        dummyDiv.style.margin = '0.4vmin';
        dummyDiv.style.flexGrow = 1;
        dummyDiv['__' + targetClassName + '_pair'] = item;
        dummyDiv['__' + targetClassName + '_duration'] = duration;
        item.parentNode.appendChild(dummyDiv);
        this.state.dummyList.push(dummyDiv);
      }
      .bind(this),
      0
    );
  }

  // This is main controller, it controll the image width means pre-define it and 
  // also it add all the dive to the dummyList function

  mainController() {
    let conts = document.getElementsByClassName(targetClassName);
    for (let i = 0, max = conts.length; i < max; i++) {
      let cont = conts[i];
      cont.style.position = 'relative';
      let items = cont.getElementsByTagName('div');
      for (let i = 0, max = items.length; i < max; i++) {
        let item = items[i];
        let img = item.getElementsByTagName('img')[0];
        let imageWidth = minHeightRow * img.naturalWidth / img.naturalHeight;
        imageWidth = imageWidth.toFixed(3)
        item.style.width = imageWidth + "px";
        // item.style.flexGrow = (img.naturalWidth / img.naturalHeight).toFixed(2);
        this.addToDummyList(item, defaultDuration);
      }
    }
  }

  // This function traverse the dummylist and check each element either it change it position or not
  // When window resize occurs, dummy div gets re-positioned without animation,
  // and forcibly change the original div's position to the dummy div's position
  //  with transition animation.
  

  reshapeContainer() {
    this.state.dummyList.forEach(function (dummyDiv) {
      let item = dummyDiv['__' + targetClassName + '_pair'];
      let duration = dummyDiv['__' + targetClassName + '_duration'];
      item.style.transition = 'all ' + duration;
      item.style.top = dummyDiv.offsetTop + 'px';
      item.style.left = dummyDiv.offsetLeft + 'px';
      let rect = dummyDiv.getBoundingClientRect();
      item.style.width = rect.width * 1.01 + 'px';
      item.style.height = rect.height + 'px';
    });
  }

  componentDidMount() {
    window.addEventListener("load", this.mainController.bind(this));
    window.addEventListener("resize", this.reshapeContainer.bind(this));
    setInterval(this.reshapeContainer.bind(this), 0);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.mainController.bind(this));
    window.removeEventListener("resize", this.reshapeContainer.bind(this));
  }

  // This function is creating a div container for each product i.e for each image and adding it to 
  // productList

  productList = () => {
    const list = this.state.products.map((product) =>
      <
      GalleryItem key = {
        product.id
      }
      imageUrl = {
        require('../media/' + product.image)
      }
      thumbnail = {
        require('../media/' + product.thumbnail)
      }
      desc = {
        product.description
      }
      />
    );
    return (list);
  }

  render(){
     return(
      <div className="container flex-wrap-anim" id="container-all">
        {this.productList()};
        </div>
    );
  }

}

export default App;