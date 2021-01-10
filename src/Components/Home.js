import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="home__image"
          />
          <div className="home__row">
            <Product
              id="12345"
              title="AmazonBasics Adjustable Tablet Holder Stand - Compatible with Apple iPad, Samsung Galaxy and Kindle Fire Tablets"
              price={8000}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/51gzTzO5M1L._AC_SL1500_.jpg"
            />
            <Product
              id="1234567890"
              title="AmazonBasics Non-Stick Cookware Set, Pots, Pans and Utensils - 15-Piece Set"
              price={15000}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61x-NhdKBmL._AC_SL1500_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="1"
              title="True Wireless Earbuds, VANKYO X200 Bluetooth 5.0 "
              price={1500}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61fPdBkEc9L._AC_SL1001_.jpg"
            />
            <Product
              id="12"
              title="OMOTON Ultra-Slim Bluetooth Keyboard Compatible with iPad"
              price={2000}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71%2Br1R3OK2L._AC_SL1500_.jpg"
            />
            <Product
              id="12786"
              title="OMOTON Ultra-Slim Bluetooth Keyboard Compatible with iPad"
              price={2500}
              rating={5}
              image="https://www.android.com/static/2016/img/one/carousel/nokia-9_1x.png"
            />
          </div>
          <div className="home__row">
            <Product
              id="1234567"
              title="SANSUI S32 32 Inch 720p Smart LED TV - High Resolution Television Built-in HDMI, USB - Support Screen Cast "
              price={30000}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home
