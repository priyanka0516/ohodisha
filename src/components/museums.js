import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Museums() {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='museums'>
        <div className='container-fluid'></div>
      </div>
      <div className='about-lakes'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Museums in</span> Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='desc-lake'>
                <p>
                When you are in a place which boasts of a rich heritage and diversity as Odisha does, there are bound to be repositories which captures the essence of the State for the consummate tourist.Odisha offers a tourist a host of activities to indulge in one of them is an eclectic mix of museums each portraying an aspect of our rich heritage and the Planetarium which unlocks the inner fascination of the galaxy and Milky Way.
                Make space in your itinerary for a couple of hours to discover the treasures of Odisha, be it its rich manuscripts, be it its natural treasures, be it its vibrant tribal population, be it its legacy of art and craft, be it its celebrated maritime history or be its celebrated Astronomer - the subjects are as diverse as it can get and captivating at the same time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='all-museums'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Top Museums</span> To Visit</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                <img src={require('./images/statemuseum.jpg')} alt="statemuseum" />
                <h4 className='slide-title'>Odisha State Museum</h4>
                <p>Odisha State Museum is a museum in Bhubaneswar, Odisha. In its original form it was established in 1932 and later moved to the current building in 1960.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                <img src={require('./images/TRIBAL.JPG')} alt="TRIBAL" />
                <h4 className='slide-title'>Museum of Tribal Arts & Artifacts</h4>
                <p>Established in 1953, the Museum of Tribal Art and Artefacts celebrates the life and culture of Odisha’s 62 tribal communities and is regarded as one of the best Tribal Museum in India.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                <img src={require('./images/netaji-birth-place-museum1-1.jpg')} alt="papier" />
                <h4 className='slide-title'>Netaji Birth Place Museum</h4>
                <p>Netaji Birth Place Museum is located at Cuttack district of Odisha. The great freedom fighter Subhas Chandra Bose(Netaji) was born in Cuttack. He spent his childhood at his ancestral home. </p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                <img src={require('./images/MARTIME.jpg')} alt="Mukteshwar" />
                <h4 className='slide-title'>Odisha Maritime Museum</h4>
                <p>The Odisha State Maritime Museum is a must visit location on your Cuttack itinerary. It was inaugurated by Chief Minister of Odisha Mr.Naveen Patnaik on 1st of April 2013 at Cuttack.</p>
                </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                <img src={require('./images/kala.jpg')} alt="statemuseum" />
                <h4 className='slide-title'>Odisha Crafts Museum - Kala Bhoomi</h4>
                <p>The museum celebrates the craftsmanship of our artisans by putting on display their breath-taking masterpieces. </p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                <img src={require('./images/regional-museum-of-natural-history.jpg')} alt="TRIBAL" />
                <h4 className='slide-title'>Regional Museum of Natural History </h4>
                <p>Regional Museum of Natural History is one of the most popular tourist attractions in Bhubaneswar, Odisha. A one-of-a-kind museum in the eastern part of the country.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                <img src={require('./images/ASI.jpeg')} alt="papier"/>
                <h4 className='slide-title'>ASI Museum</h4>
                <p>Head to The ASI Museum in Konark if you wish to spend a day amidst the history & culture of Odisha.Established in the year 1968, ASI Museum is located near the Konark temple.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                <img src={require('./images/pathani.jpg')} alt="pathani" onClick={handleShow}/>
                <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                <div className='row'>
                      <div className='col-md-7'>
                        <img  className="modalbody-img" src={require('./images/pathani.jpg')} alt="pathani"/>
                      </div>
                      <div className='col-md-5'>
                        <div className='time'>
                        <Modal.Header closeButton></Modal.Header>
                        <h6>Days:</h6>
                        <p className='text'>Monday (Closed)</p>
                        <p className='text'>Tuesday - Sunday (open)</p>
                        <h6>Timings:</h6>
                        <p className='text'>2:00 pm - 6:00 pm</p>
                        </div>
                      </div>
                      </div>
                   </Modal.Body>
                </Modal>
                <h4 className='slide-title'>Pathani Samanta Planetarium</h4>
                <p>Named after a famous astronomer, Pathani Samanta, the planetarium was established by the Science and Technology department of the Government of Odisha.</p>
                </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  )
}
