import React from 'react'
export default function Events() {
  return (
    <div>
        <div className='events'>
            <div className='container-fluid'></div>
        </div>
        <div className='events-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'> 
                        <h2><span>Events Of</span> Odisha</h2>
                        <div className="main-heading-domain-border2">
                            <div></div>
                            <div></div>
                        </div>
                        <p>The state of Odisha is buzzing with many cultural, literary, sporting events and exhibitions. Odisha's people are deep rooted in arts and culture and the same reflects in their continuous on-going events in various cities. Below is a list of current events.</p>
                    </div>
                </div>
            <div className='row mt-4'>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                    <img src={require('./images/rajarani.jfif')} alt="rajarani"/>
                    <h4 className='slide-title'>Rajarani Music Festival</h4>
                    <p>The three-day annual musical festival, set amidst the premises of the magnificent Rajarani temple, exudes an unmatched charm that lends to the aura of the event.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                    <img src={require('./images/the_ten-headed_ravana.jpg')} alt="konark"/>
                    <h4 className='slide-title'>Konark Festival</h4>
                    <p>A festival that celebrates dance, music and art in a venue where every stone has a story to tell.It is one of the reasons why the cultural heritage of Odisha is alive.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                    <img src={require('./images/mahotsav.jpg')} alt="papier"/>
                    <h4 className='slide-title'>Khandagiri Mahotsav</h4>
                    <p>Most of the arts in Odisha have worldwide acclamation and Papier Mache is one of them. The art is practised in almost every region of the state.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                    <img src={require('./images/Mukteshwar.jpg')} alt="Mukteshwar"/>
                    <h4 className='slide-title'>Mukteswar Festival</h4>
                    <p>The magical performances, star lit skies at the backdrop of the temple reminds you of the glorious cultural heritage, immortalized so skillfully in Odisha's Temple Architecture.</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
