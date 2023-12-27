import React from 'react'
export default function Waterfall() {
  return (
    <>
      <div className='Waterfall-banner'>
        <div className='container'></div>   
      </div>
      <div className='about-lakes'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Waterfalls In</span> Odisha</h2>
               <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='desc-lake'>
                <p>The state of Odisha has gained its popularity as a tourist destination, especially among the pilgrims due to the presence of numerous holy temples. Besides, beaches in Odisha, especially in Puri are also quite popular among tourists. But the state has some hidden gems as well. We are talking about the gorgeous waterfalls!
                Whether you are a nature admirer, an adventure junkie or just a peace seeker, you will have a pleasing experience visiting the waterfalls in Odisha. Crystal clear water, melodious sounds of waterfall, nature-bound surroundings and much more awaits you in these waterfalls.
                Whenever you come to Odisha, make it a point to visit some of these stunning waterfalls. If you don’t know where to find them, don't worry! We have made a list of 5 waterfalls that you can explore along with details on how to visit them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='all-lakes'>
        <div className='container'>
          <div className='row'>
            <h2><span>Explore </span>WaterfallS In Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
          </div>
          <div className='row'>
            <p>Odisha, a state in eastern India, is known for its natural beauty and is home to several picturesque waterfalls. Here are some of the notable waterfalls in Odisha:</p>
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./images/khandadhar-falls.jpg')} alt=""/>
                  <h4>Khandadhar Falls</h4>
                  <p>Khandadhar waterfall is one of the most beautiful waterfalls not only of Keonjhar district but also of the state. Speeding water of this holly river Khandadhar Spring is falling straight down to the earth at a distance of around 500 feet height. </p>
            </div>
          </div>
          <div className='col-md-4'>
              <div className="art-images">    
              <img src={require('./images/bhimkund.jpg')} alt=""/>
                  <h4>Bhimkund Falls</h4>
                  <p>Bhimkund Falls, also known as Bhimkund Waterfall, is a popular tourist attraction in the state of Odisha, India. It is located in the Mayurbhanj district of Odisha and is known for its natural beauty and religious significance. </p>
            </div>
            </div>
           
          <div className='col-md-4'>
             <div className="art-images">
              <img src={require('./images/duduma.jpg')} alt=""/>
              <h4>Duduma Waterfall</h4>
              <p>Duduma Waterfalls, also known as Duduma or Dooduma Falls, is a stunning natural attraction located in the Indian state of Odisha. These falls are among the most beautiful and popular waterfalls in the region.</p>
          </div>
          </div>
          </div>
        <div className='row mt-3'>
          <div className='col-md-4'>
              <div className="art-images">
              <img src={require('./images/hirakud-dam.jpg')} alt=""/>
              <h4>Hirakud Dam</h4>
              <p>Hirakud Dam is built across the Mahanadi River, about 15 kilometres (9 mi) from Sambalpur in the state of Odisha in India. It is the longest earthen dam in the world. Behind the dam extends a lake, Hirakud Reservoir, 55 km (34 mi) long.</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="art-images">
              <img src={require('./images/khandadhar.jpg')} alt=""/>
                  <h4>Khandadhar Waterfall</h4>
                  <p>Khandadhar Waterfall is a magnificent natural attraction located in the Sundargarh district of the Indian state of Odisha. It is known for its breathtaking beauty and is one of the tallest waterfalls in the state. </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="art-images">
              <img src={require('./images/sanaghagara-waterfall.jpg')} alt=""/>
                    <h4>Sanaghagra Waterfall</h4>
                    <p>Khandadhar Waterfall is a magnificent natural attraction located in the Sundargarh district of the Indian state of Odisha. It is known for its breathtaking beauty and is one of the tallest waterfalls in the state. </p>
             </div>
            </div>
            </div>
          </div>
          </div>
    </>
  )
}
