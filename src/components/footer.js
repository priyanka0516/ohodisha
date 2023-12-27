import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">COMPANY NAME</h5>
                <p>About the company, little discription will goes here.. </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Attraction</h5>
                  <ul className="thumbnail-widget">
                  <li><div className="thumb-content"><Link to="/streetfood">Desserts</Link></div> </li>
                  <li><div className="thumb-content"><Link to="/hiddengems">Crafts</Link></div></li>
                  <li><div className="thumb-content"><Link to="/musuems">Musuems</Link></div> </li>
                  <li><div className="thumb-content"><Link to="/events">Events</Link></div></li>
                  <li><div className="thumb-content"><Link to="/festival">Fair & Festivals</Link></div>  </li>
                  <li><div className="thumb-content"><Link to="/lakes">Lakes</Link></div></li>
                  <li><div className="thumb-content"><Link to="/dance">Dances & Music</Link></div> </li>
                  <li><div className="thumb-content"><Link to="/handloom">Handloom</Link></div> </li>
                  </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Get Started</h5>
                <p style={{textAlign:'left',fontSize:'14px'}}>Get access to your full Training and Marketing Suite.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us</h5>
                <p><a href="mailto:info@domain.com" title="glorythemes" className='xz'>info@domain.com</a></p>
                <div className="footer-social">
                  <Link to="https://www.youtube.com/channel/UCgI66pDg72aaL8R-WMS4__A"> <img src={require('./images/youtube.png')} alt="youtube"/></Link>
                  <Link to="https://www.instagram.com/ohodisha/"><img style={{paddingBottom:'8px'}} src={require('./images/instagram.png')} alt="instagram"/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Company Name © 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
