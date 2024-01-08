import React from 'react';
export default function Sweet() {
  return (
    <div>
        <div className='sweets'>
            <div className='container-fluid'></div>
        </div>
        <div className='streetfood'>
            <div className='container'>
                <div className='row'>
                    <h2><span>Desserts Of</span> Odisha</h2>
                    <div className="main-heading-domain-border2">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6 col-lg-6'>
                        <div className='under_food'>   
                            <div className="image-container">
                                <img src={require('./images/Rasabali.jpg')} alt="odissi"/>
                                <div className="text-container">
                                    <h5>Rasabali</h5>
                                    <p>It is made using cottage cheese or chenna and appears somewhat like a flat gulab jamun. It is fried and then dipped in a thick, sweetened milk. </p>
                                </div>
                            </div>
                            </div>
                            <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/khaja.png')} alt="odissi" style={{ padding: '30px' }} />
                                <div className="text-container">
                                    <h5>Khaja</h5>
                                    <p>The sweet and crispy fritter khaja is offered as a prasad in Odisha’s Jagannath Temple and is a popular street snack too.</p>
                                </div>
                            </div>
                            </div>
                            <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/rasagola.png')} alt="odissi" style={{ padding: '30px' }} />
                                <div className="text-container">
                                    <h5>Rasagola</h5>
                                    <p>Rasagola belongs to Odisha.There's no doubt about it.There're lots of information & evidence to support this claim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-lg-6'>
                        <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/khiri.png')} alt="odissi" style={{ height: '150px' }}/>
                                <div className="text-container">
                                    <h5>Khiri</h5>
                                    <p>Kheer, also known as rice pudding, is a popular and traditional dessert in many parts of India, including Odisha.</p>
                                </div>
                            </div>
                            </div>
                         <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/besan-ladoo.png')} alt="odissi" style={{height: '150px' }}/>
                                <div className="text-container">
                                    <h5>Besan Ladoo(ବେସନ ଲଡୁ)</h5>
                                    <p>Besan Ladoo is a popular Indian sweet made from gram flour (besan), ghee, sugar, and flavored with cardamom. While it's not traditionally associated with Odisha, it's a versatile sweet that can be found and enjoyed in various regions of India.</p>
                                </div>
                            </div>
                            </div>
                          <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/ladoo.png')} alt="odissi" style={{height: '150px'}}/>
                                <div className="text-container">
                                    <h5>Ladoo(ଲଡୁ)</h5>
                                    <p>Chakuli Pitha is an Odia crepe made from rice flour and urad dal. It goes well with traditional curries like aloo dam, ghugni, chicken curry.</p>
                                </div>
                            </div>
                            </div>
                      </div>
                        <div className='col-xs-12 col-sm-6 col-lg-6'>
                        <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/jalebi.png')} alt="jalebi" style={{ height: '150px' }}/>
                                <div className="text-container">
                                    <h5>Chhena Jalebi (ଛେନା ଝିଲାପି) </h5>
                                    <p>The basic ingredient is fresh curd cheese called chenna. Fresh chhena is thoroughly kneaded and rolled up into shapes similar to pretzels, before being deep fried.</p>
                                </div>
                            </div>
                            </div>       
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}
