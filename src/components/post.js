import React, { Component } from "react";
import Slider from "react-slick";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
        <div className="rooms">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                                >
                                <div>
                                <img src={require('./images/room1.jpg')} alt="rroom1" id ="yo-room"/>
                                </div>
                                <div>
                                <img src={require('./images/rooms2.jpg')} alt="rroom1"id ="yo-room"/>
                                </div>
                                <div>
                                <img src={require('./images/room1.jpg')} alt="rroom1" id ="yo-room"/>
                                </div>
                                <div>
                                <img src={require('./images/rooms2.jpg')} alt="rroom1"id ="yo-room"/>
                                </div>
                            </Slider>
                    <div className="col-md-6 gp">
                        <Slider id="vroom"
                            asNavFor={this.state.nav1}
                        //    ref={slider => (this.slider2 = slider)}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            >
                            <div className="p">
                                <img src={require('./images/room1.jpg')} alt="rroom1" id ="no-room"/>
                            </div>
                            <div className="p">
                                <img src={require('./images/rooms2.jpg')} alt="rroom1"id ="no-room"/>
                            </div>
                            <div className="p">
                                <img src={require('./images/room1.jpg')} alt="rroom1" id ="no-room"/>
                            </div>
                            <div className="p">
                                <img src={require('./images/rooms2.jpg')} alt="rroom1"id ="no-room"/>
                            </div>
                        </Slider>
                    </div>
                    </div>
                        <div className="col-md-8"><p>hghghgh</p></div>
                </div>
            </div>
      </div>
    );
  }
}