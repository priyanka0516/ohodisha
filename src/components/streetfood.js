import React from 'react';
export default function Streetfood() {
  return (
    <div>
        <div className='sweets'>
            <div className='container-fluid'></div>
        </div>
        <div className='streetfood'>
            <div className='container'>
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
                                <img src={require('./images/arishapitha.png')} alt="odissi" style={{ padding: '30px' }}/>
                                <div className="text-container">
                                    <h5>Arishapitha</h5>
                                    <p>Arisa Pitha is another sweet dish of Odisha, made from rice flour, sugar, and cinnamon. Arisa pithas are velvety on the inside.</p>
                                </div>
                            </div>
                            </div>
                          <div className='under_food'>
                            <div className="image-container">
                                <img src={require('./images/chakuli.png')} alt="odissi" style={{ padding: '30px' }}/>
                                <div className="text-container">
                                    <h5>Chakuli</h5>
                                    <p>Chakuli Pitha is an Odia crepe made from rice flour and urad dal. It goes well with traditional curries like aloo dam, ghugni, chicken curry.</p>
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
