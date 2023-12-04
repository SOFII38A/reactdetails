import React from 'react';
import './App.css';
import Colors from './component/Colors.js'
import DetailsThumb from './component/DetailsThumb.js';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Air Max 90",
        "src": [
            "https://nikearprod.vtexassets.com/arquivos/ids/643368/DX9502_100_A_PREM.jpg?v=638211345267330000",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c548a178-cd58-4b62-9b8b-020260e80515/air-max-90-futura-shoes-nfmGzj.png",
            "https://nikearprod.vtexassets.com/arquivos/ids/702251/FB8570_100_A_PREM.jpg?v=638233918697730000",
            "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9e970183-c03c-4250-ae91-b238aefd47df/air-max-90-zapatillas-bVD4kw.png"
          ],
        "description": "",
        "content": "¿Listo para llevar tu estilo a un nivel superior? Hemos reinventado un ícono de Air para brindarte la combinación perfecta de detalles retro y diseño futurista. ",
        "price": 100.000,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Agregar al carrito</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;