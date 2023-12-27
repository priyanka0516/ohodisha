import React from 'react'
export default function Lakes() {
  return (
    <div>
        <div className='lakesPage'>
            <div className='container'></div>
        </div>
        <div className='about-lakes'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2><span>Lakes In</span> Odisha</h2>
                        <div className="main-heading-domain-border2">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='desc-lake'>
                            <p>Odisha is a treasure trove of a destination offering a visual feast for all nature lovers. This East Indian state is adorned with myriad marvels that keep multitudes of visitors coming back to relive enduring holiday memories. There is, however, a distinguishing feature that endows this cultural state - its shimmering must-visit lakes. With pristine waters and serene landscapes, the pristine yet popular lakes in Odisha are known to be major crowd-pleasers. Be it a haven for some peace and quiet time or a getaway to bask in the midst of nature's benevolence, the beautiful lakes in this heritage state are sure to whisk you off your feet and transport you to a world of sheer bliss. While each beautiful lake is renowned for its own aesthetics, the incredible Chilka Lake tops the charts. This stunning water body is the largest inland saltwater lake in the world. Home to some of the rarest species of migratory birds, its placid waters are ideal to catch a glimpse of this avian in action. But during your nature getaway, the showstopper worth observing is undoubtedly the Irrawaddy dolphin. Quietly set across the banks of river Mahanadi, Ansupa Lake is the largest freshwater lake in Odisha. The tranquillity and sheer serenity of the surroundings beckon nature lovers from far and wide.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='desc-lake'>
                            <p>For an adventurous experience, visitors are offered the opportunity to go boating and bird watching, a significant tourist attraction of this lake. It's a tourist destination that lets you immerse yourself into a tropical paradise. Built on the river Mahanadi, Hirakud Reservoir is an architectural marvel that stretches across a distance of 15 kilometres. Blessed with wildlife, this beautiful lake is a perfect window to spot some rare species of birds and wildlife. While boating here is typically not allowed, the embankment provides a spectacular panoramic view of the surrounding environment. Also known as the Ocean Drop tank, this lake is said to hold holy waters from every holy river in the country. Strategically located around the Lingraj and Anantha Vasudev Temples, this beautiful lake attracts pilgrims from across the country. But if it isn't spiritual reflection that you seek then its scenic charm is sure to summon your visit to this nature getaway. Small yet stimulating, this lake is apt for all those in search of solitude and tranquillity. Situated in the heart of Khurda District, it is encircled by the Nandankaan Biological Park and Botanical Garden. Serving as a popular picnic spot and a perfect nature getaway, this tiny lake is apt for unwinding.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='all-lakes'>
            <div className='container'>
                <div className='row'>
                    <h2><span>Explore Popular </span>Lakes in Odisha</h2>
                    <div className="main-heading-domain-border2">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="art-images">
                            <img src={require('./images/golden-beach.jpg')} alt=""/>
                                <h4>Golden Beach</h4>
                                <p>Puri Beach or the Golden beach is a beach in the city of Puri in the state of Odisha, India. It is on the shore of the Bay of Bengal. It is known for being a tourist attraction and a Hindu sacred place.The beach is the site of the annual Puri Beach Festival</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="art-images">
                            <img src={require('./images/Chilika-Lake-e1671544032743.jpg')} alt=""/>
                                <h4>Chillika Lake</h4>
                                <p>Spread over in a sprawling area of 1100 sq km, Chilika Lake is known as India's largest coastal inlet and second largest in the entire world. This interesting fact itself is enough to lure a large chunk of tourists to this destination. </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="art-images">
                            <img src={require('./images/gopalpur-baech-odisha-priya-travels.jpg')} alt=""/>
                                <h4>Gopalpur Beach</h4>
                                <p>Gopalpur is a coastal town and a Notified Area Council on the Bay of Bengal coast in Ganjam district in the southern part of Odisha, India. Today it is a commercial port, a famous sea beach and a tourist destination.</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-4'>
                        <div className="art-images">
                               <img src={require('./images/Tampara-Lake-1.jpg')} alt=""/>
                                <h4>Tampara Lake</h4>
                                <p>Tampara Lake is one of the largest fresh water lakes in the State. The beautiful lake & the nearby Chilika Lagoon highlight the ecological diversity Odisha is blessed with. While Tampara is a fresh water lake, Chilika is a brackish water lagoon.</p>
                        </div>
                      </div>
                    <div className='col-md-4'>
                        <div className="art-images">
                               <img src={require('./images/ansupa_lake.jpg')} alt=""/>
                               <h4>Ansupa Lake</h4>
                                <p>Another tourist attraction in Cuttack is Ansupa Lake. This picturesque lake holds an unparalleled charm for all those nature lovers seeking an indelible holiday experience in Odisha. There are boating and fishing facilities.</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="art-images">
                           <img src={require('./images/CHANDIPUR.jpg')} alt=""/>
                                <h4>Chandipur Beach</h4>
                                <p>Chandipur,is a resort town in Balasore District, Odisha, India. The town is located on the shore of Bay of Bengal and is approximately 16 kilometers from the Balasore Railway Station. Due to its unique circumstances, the beach supports biodiversity.</p>
                        </div>
                    </div>  
                  </div>
              </div>
        </div>
    </div>
  )
}
