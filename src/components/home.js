import React, { useState, useEffect } from 'react';
import './style.css';
import './responsive.css'
import Blogcard from "./blogcard";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import NewsTicker from './newsticker';
const Home = ({  }) => {
  const navigate = useNavigate();
  const festivalPage = () => {
    navigate('/festival'); 
  };
  const dancePage = () => {
    navigate('/dance'); 
  };
  const templePage = () => {
    navigate('/temple'); 
  }
  const waterfallPage = () => {
    navigate('waterfall');
  }
  const lakesPage = () => {
    navigate('lakes');
  }
  const hiddengemsPage = () => {
    navigate('hiddengems');
  }
  const eventsPage = () => {
    navigate('events');
  }
  const [selectedBox, setSelectedBox] = useState(null);
  const boxesData = [
  ];

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };
    const testimonials = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay:true,
      slidesToScroll: 1
    };
    const foods = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay:true,
      slidesToScroll: 1
    };
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className='banner'>
        <div className='container-fluid'style={{padding:'0'}}>
          <div id="slider">
            <Slider {...settings}>
          <div>
            <img src={require('./../components/images/jagannath-temple.png')} alt="1" />
            <div className="text-bottom-right" id="text">Your Text Here</div>
          </div>
          <div>
            <img src={require('./../components/images/jagannath-temple.png')} alt="1" />
            <div className="text-bottom-right" id="text">Your Text Here</div>
          </div>
          <div>
            <img src={require('./../components/images/Odishidance.png')} alt="2" />
            <div className="text-bottom-right" id="text">Your Text Here</div> 
          </div>
          <div>
            <img src={require('./../components/images/Odishidance.png')} alt="2" />
            <div className="text-bottom-right" id="text">Your Text Here</div>
          </div>
          <div>
            <img src={require('./../components/images/SambalpuriDance.png')} alt="2" />
            <div className="text-bottom-right" id="text">Your Text Here</div>
          </div>
          <div>
            <img src={require('./../components/images/temple2.png')} alt="2" />
            <div className="text-bottom-right" id="text">Your Text Here</div>
          </div>
            </Slider> 
          </div>
        </div>
      </div>
      <div className="all-areas">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'></div>
            <div className='col-md-6'></div>
          </div>
        </div>
      </div>
      <div className='explore-city'>          
        <div class="container">
          <div className='row'>
            <div className='col-md-12'>
               <h2><span>Explore The </span>Land Of Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4 col-md-6 col-lg-4'> 
            <div className="cards">
              <div className="card-item">
                <div className="card-image"><img src={require('./../components/images/beach.jpg')} alt="" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">BEACH & LAKE</h2>
                  <p className="card-intro">Odisha, a state on the eastern coast of India, has several beautiful beaches and lakes that you can visit.</p>
                  <button className="card-btn" onClick={lakesPage}>READ MORE</button></div>
              </div>
            </div>
            </div>
            <div className='col-sm-4 col-md-6 col-lg-4'>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image"><img src={require('./../components/images/waterfall.jpg')} alt="" />
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">WATER FALLS</h2>
                    <p className="card-intro">Odisha, a state in eastern India, is blessed with natural beauty, and it boasts several scenic waterfalls. These waterfalls provide great opportunities for nature lovers, trekkers, and adventure enthusiasts to explore the region.</p>
               	    <button className="card-btn"onClick={waterfallPage}>READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          <div className='col-sm-4 col-md-6 col-lg-4'>
            <div className="cards">
              <div className="card-item">
                <div className="card-image"><img src={require('./../components/images/diwali.jpg')} alt="" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">FAIR & FESTIVALS</h2>
                  <p className="card-intro">Odisha, a state in eastern India, is known for its rich cultural heritage and diverse festivals. There are numerous fairs and festivals celebrated throughout the year in Odisha.</p>
                  <button className="card-btn" onClick={festivalPage}>READ MORE</button></div>
              </div>
            </div>
            </div>
            <div className='col-sm-4 col-md-6 col-lg-4'>
            <div className="cards">
              <div className="card-item">
                <div className="card-image"><img src={require('./../components/images/Konarka_Temple.jpg')} alt="" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">TEMPLES</h2>
                  <p className="card-intro">Odisha is renowned for its rich cultural and religious heritage, and it is home to numerous temples, both ancient and modern</p>
                  <button className="card-btn"onClick={templePage}>READ MORE</button></div>
              </div>
            </div>
            </div>
            <div className='col-sm-4 col-md-6 col-lg-4'>
            <div className="cards">
              <div className="card-item">
                <div className="card-image">
                  <img src={require('./../components/images/Odisha-Handicrafts-Applique-Work-Pipili-Chandua.jpg')} alt="" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">ART CRAFT</h2>
                  <p className="card-intro">Odisha is a paradise for birdwatchers, with a diverse range of avian species that can be observed in its varied landscapes, including forests, wetlands, rivers, and coastlines. </p>
                  <button className="card-btn" onClick={hiddengemsPage}>READ MORE</button></div>
              </div>
            </div>
            </div>
            <div className='col-sm-4 col-md-6 col-lg-4'>
              <div className="cards">
              <div className="card-item">
                <div className="card-image"><img src={require('./../components/images/Paika.jpg')} alt="" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">DANCE & MUSIC</h2>
                  <p className="card-intro">Odisha has a rich and diverse cultural heritage, and its dance and music traditions are integral to the state's cultural identity.</p>
                  <button className="card-btn" onClick={dancePage}>READ MORE</button></div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      <div className="x">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2><span>The Food </span>Of Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div></div>
            <div className="row">
              <div className="col-md-12">
                <div className="cat">
                  <Slider {...foods}>
                    <div className="yg">     
                    <div className="col-md-6">
                      <div className="content">
                        <h2>Dahibara Aludum</h2>
                        <h3>(ଦହିବରା ଆଳୁଦମ)</h3>
                        <p>Dahibara Aludum  is a variant of Dahi vada and originated from Cuttack of the state Odisha.</p>
                      </div></div>
                     <div className="col-md-6"> 
                      <img src={require('./../components/images/Dahi-Bara.png')} alt="dahibara_aloodum" /></div></div>
                      <div className="yg">
                    <div className="col-md-6">
                      <div className="content">
                        <h2>Rasagola</h2>
                        <h3>(ରସଗୋଲା)</h3>
                        <p>Rasagola belongs to Odisha.There's no doubt about it.There're lots of information & evidence to support this claim.It is one of the traditional food offerings made to Lord Jagannath.</p>
                      </div></div>
                     <div className="col-md-6"> 
                      <img src={require('./../components/images/rasogola.png')} alt="dahibara_aloodum" /></div></div>
                      <div className="yg">
                      <div className="col-md-6"><div className="content">
                        <h2>Chennapoda</h2>
                        <h3>(ଛେନାପୋଡ଼)</h3>
                        <p>Chhena poda is a cheese dessert from the Indian state of Odisha. </p>
                      </div></div>
                     <div className="col-md-6"> 
                      <img src={require('./../components/images/chennapoda.png')} alt="dahibara_aloodum" /></div></div>
                      <div className="yg">
                      <div className="col-md-6"><div className="content">
                        <h2>Pakhala </h2>
                        <h3>(ପଖାଳ)</h3>
                        <p>Pakhaḷa is an Odia cuisine, consisting of cooked rice washed or lightly fermented in water.</p>
                      </div></div>
                     <div className="col-md-6"> 
                        <img src={require('./../components/images/Pakhala.png')} alt="dahibara_aloodum" /></div></div>
                      <div className="yg">
                      <div className="col-md-6"><div className="content">
                        <h2>Matti Handi Mutton</h2>
                        <h3>(ମାଟି ହାଣ୍ଡି ମାଂସ)</h3>
                        <p>To prepare Matti Handi Mansa we use  pressure cooker and the mutton is allowed to be cooked in an earthen pot for a pretty long time, so that the goodness and finer aroma of the earthen pot also gets absorbed into the mutton.</p>
                      </div></div>
                     <div className="col-md-6"> 
                        <img src={require('./../components/images/Mutton.png')} alt="dahibara_aloodum" /></div></div>
                        <div className="yg">
                        <div className="col-md-6"> <div className="content">
                          <h2>Fish Curry</h2>
                          <h3>(ମାଛ ଝୋଳ)</h3>
                          <p>Machha tarkari or fish curry is a simple odia fish curry that is prepared almost all odia household. </p>
                        </div></div>
                     <div className="col-md-6"> 
                      <img src={require('./../components/images/fish-curry.png')} alt="dahibara_aloodum" /></div></div>
                    <div className="yg">
                      <div className="col-md-6"> <div className="content">
                        <h2>Crab Curry</h2>
                        <h3>(କଙ୍କଡା ଝୋଳ)</h3>
                        <p>A typical Odia traditional crab curry is cooked in mustard oil and with cumin coriander garam masala paste and addition of potato makes the curry even tastier.</p>
                      </div></div>
                     <div className="col-md-6"> 
                      <img src={require('./../components/images/crab.png')} alt="dahibara_aloodum" /></div></div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
    {/* <div className='destination'>
        <div className='container'>
           <div className='row'>
             <div className="col-md-12">
              <h2><span>Places To </span>Visit In Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div></div>
        <div className='row'>
          <div className='col-md-2'>
              <div className='sqaure-box'>
                <img src={require('./images/Flok-Dance-Banner.jpg')} alt=""/>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='sqaure-box'>
                <img src={require('./images/puri.jpg')} alt=""/>
              </div>
            </div>
             <div className='col-md-2'>
              <div className='sqaure-box'>
                <img src={require('./images/Konark_Sun_Temple_13e71cbb6e.jpg')} alt=""/>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='sqaure-box'>
                <img src={require('./images/paradeep.jpg')} alt=""/>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='sqaure-box'>
                
              </div>
            </div>
            <div className='col-md-2'>
              <div className='sqaure-box'>
                
              </div>
          </div>
        </div>
      </div>  
    </div> */}
    <div className="map">
        <div className='container'>
          <div className='row'>
             <div className="col-md-12">
              <h2><span>Discover the Best</span> Kept Secrets</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div></div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='mapimage'>
                <img src={require('./images/map1.png')} alt="orissa_map"/>
              </div>
            </div>
        <div className='col-md-6'>
        <div className="blog_tables">
				<div className="blogttl_lists">
					<h4>Popular Videos:</h4>
				</div>
				<table>
        	<tbody><tr className='ticker-item'>
						<td>Konark Sun Temple || Odisha Famous Surya Mandir</td>
						<td><a href="https://www.youtube.com/watch?v=UZh43NwasX8">View More</a></td>
					</tr>	
					<tr className='ticker-item'>
						<td>Organic Farming || Natural Farming</td>
						<td><a href="https://www.youtube.com/watch?v=V2dKRTkSxmI">View More</a></td>
					</tr>				
					<tr className='ticker-item'>
						<td>Authentic Odia Food in Bhubaneswar</td>
						<td><a href="https://www.youtube.com/watch?v=vW1cijvq-fA">View More</a></td>
					</tr>								
					<tr className='ticker-item'>
						<td>National Tribal Crafts Mela 2022 Bhubaneswar</td>
						<td><a href="https://www.youtube.com/watch?v=4sSPD0CUw1Y">View More</a></td>
					</tr>							
					<tr className='ticker-item'>
						<td>Hotel Krafts in Bhubaneswar</td>
						<td><a href="https://www.youtube.com/watch?v=lusfo3x99L8">View More</a></td>
					</tr>				
					<tr className='ticker-item'>
						<td>Ansupa Lake Cuttack</td>
						<td><a href="https://www.youtube.com/watch?v=z3NCNS0yGlE">View More</a></td>
          </tr>
          <tr className='ticker-item'>
						<td>Used Cars In Bhubaneswar || Only 1.25 lakhs</td>
						<td><a href="https://www.youtube.com/watch?v=uIzB7NGPJgU">View More</a></td>
          </tr>
          <tr className='ticker-item'>
						<td>Mutton in Bhubaneswar || 24 Carat MUTTON|| Nana Namaskar Hotel</td><td><a href="https://www.youtube.com/watch?v=XsbhjJvgYCI">View More</a></td>
          </tr>
          <tr className='ticker-item'>
						<td>Harley Davidson Bike Show room BBSR</td><td><a href="https://www.youtube.com/watch?v=ia34J0mgg40">View More</a></td>
          </tr>
          <tr className='ticker-item'>
						<td>6th bhubaneswar international trade fair 2022 BITF</td><td><a href="https://www.youtube.com/watch?v=A3R_yV8h3y0">View More</a></td>
					</tr>
					</tbody></table>
          </div>
            </div>
          </div>
      </div>
    </div>   
    </>
    )
}
export default Home;
