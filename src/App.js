import React from 'react';
import './App.css';
import Product from './Product';
import Laptop from './Laptop';
import Mobile from './Mobile';







var lcd_date = [
    {
        'img': 'https://m.media-amazon.com/images/I/817PTKRtJ8L._SX679_.jpg',
        
        'name': 'LCD ',
    'info': 'OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV ',
        'btn':'Buy Now'
        
  },
    {
        'img': 'https://m.media-amazon.com/images/I/71XAVZfelyL._SX679_.jpg',
        
        'name': 'LCD ',
    'info': 'VW 80 cm (32 inches) Playwall Frameless Series HD Ready Android Smart LED TV V.',
        'btn':'Buy Now'
        
  },

     {
        'img': 'https://m.media-amazon.com/images/I/815FE0UOAWL._SX679_.jpg',
        
        'name': 'LCD ',
    'info': 'TOSHIBA 108 cm (43 inches) 4K Ultra HD Smart LED Google TV 43C350MP (Silver)',
        'btn':'Buy Now'
        
  },
     
     
     
    
]




var mobile_date = [
    {
        'img': 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg',
        
        'name': 'Apple Mobile',
    'info': 'Apple iPhone 15 (256 GB) - BlueVisit the Apple Store',
        'btn':'Buy Now'
        
  },
  {
        'img': 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg',
        
        'name': 'Apple Mobile',
    'info': 'Apple iPhone 13 (128GB) - Blue Visit the Apple Store',
        'btn':'Buy Now'
        
  },
   {
        'img': 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SX679_.jpg',
        
        'name': 'Apple Mobile',
    'info': 'Apple iPhone 15 (256 GB) - BlueVisit the Apple Store',
        'btn':'Buy Now'
        
  },
     
     
     
    
]




var laptop_date = [
    {
        'img': 'https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg',
        
        'name': 'Laptop image',
    'info': 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina',
        'btn':'Buy Now'
        
  },
   {
        'img': 'https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg',
        
        'name': 'Laptop image',
    'info': 'Apple iPhone 15 Pro Max (1 TB) - Natural Titanium',
        'btn':'Buy Now'
        
  },

      {
        'img': 'https://m.media-amazon.com/images/I/71nw5eEfWlL._SX569_.jpg',
        
        'name': 'Laptop image',
    'info': 'HP Pavilion 15, 13th Gen Intel Core i7-1360P, 15.6-inch',
        'btn':'Buy Now'
        
  },
     
     
    
]


class App extends React.Component{
  render()
  
  {
    return (







        <div className="container">
                <div className="row">
                        {lcd_date.map((val) => {
                          return (
                            <div className="col-md-4 mt-5">
                              <Product
                                name={val.name}
                                img={val.img}
                                info={val.info}
                                btn={val.btn}
                              />
                    </div>
                              

                                
                                
                            )
                        })}
          





           {mobile_date.map((val) => {
                          return (
                            <div className="col-md-4 mt-5">
                              <Laptop
                                name={val.name}
                                img={val.img}
                                info={val.info}
                                btn={val.btn}
                              />
                    </div>
                              

                                
                                
                            )
           })}
          




           {laptop_date.map((val) => {
                          return (
                            <div className="col-md-4 mt-5">
                              <Mobile
                                name={val.name}
                                img={val.img}
                                info={val.info}
                                btn={val.btn}
                              />
                    </div>
                              

                                
                                
                            )
                        })}
                    
                </div>
            </div>
          
    
    
  
      
      
    )
  }
}

export default App;
