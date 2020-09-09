import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img 
      className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406302419_.jpg"
      alt=""
      />

      <div className="home__row">
        <Product 
          id="872W0CF9NQEKWNATM8F7"
          title="Tower Fan, Taotronics 36” Oscillating Tower Fan with Remote, 9 Modes, Large LED Display, 12-Hour Timer, Space-Saving, Portable Floor Bladeless Fan for Bedroom Living Rooms Office"
          rating={5}
          price="59.59"
          image="https://images-na.ssl-images-amazon.com/images/I/71b4V2T43QL._AC_SY879_.jpg"
        />
        <Product 
          id="8Z3GB167C1K52ME06T0A"
          title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for phone-call and Alexa voice control, Black"
          rating={5}
          price="348.00"
          image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product 
          id="ZCJJX5BYJVT2TXQNJPFR"
          title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
          rating={5}
          price="44.98"
          image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
        />
        <Product 
          id="M5ZA55W9WDD7TY0VDNNT"
          title="Apple AirPods with Charging Case (Wired)"
          rating={5}
          price="118.68"
          image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
        />
        <Product 
          id="P568R6BPYFE7507YAKC1"
          title="Lenovo Flex 5 14in 2-in-1 Laptop, 14.0in FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
          rating={5}
          price="599.99"
          image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
      <Product 
          id="5YF7P78W5YDMY5DQE1NY"
          title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
          rating={5}
          price="699.00"
          image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  )
}

export default Home
