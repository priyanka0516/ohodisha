import React from 'react';
export default function Handloom() {
  return (
    <div>
        <div className='handloom-banner'>
            <div className='container-fluid'>k</div>
        </div>
        <div className='all-museums'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Odisha Handlooms</span></h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        <div className='row mt-4'>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                    <img src={require('./images/sambalpuri.jpg')} alt="statemuseum" />
                    <h4 className='slide-title'>Sambalpuri Saree</h4>
                    <p>Sambalpuri sarees are traditional handwoven sarees that originate from the Sambalpur region in Odisha, India. These sarees are known for their unique designs, vibrant colors, and traditional motifs.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                    <img src={require('./images/santal-cotton-sarees.jpeg')} alt="TRIBAL" />
                    <h4 className='slide-title'>Santal Cotton Sarees</h4>
                    <p>Santal cotton sarees, also known as Sambalpuri Santal sarees, are a unique and traditional handwoven textile craft originating from the tribal communities, particularly the Santal tribe.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                    <img src={require('./images/Cottonsaree.jpg')} alt="papier" />
                    <h4 className='slide-title'>Cotton Handloom Saree</h4>
                    <p>In Odisha, handloom sarees hold a significant cultural and artistic value, and cotton handloom sarees are no exception.The state is known for producing a variety of handwoven sarees.</p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                    <img src={require('./images/Bomkaisilk.jpg')} alt="Mukteshwar" />
                    <h4 className='slide-title'>Bomkaisilk Saree</h4>
                    <p>Bomkai sarees, also known as Sonepuri sarees, are handwoven in the Bomkai village of Ganjam district in Odisha. These sarees typically feature traditional motifs like flowers, animals, and temple designs.</p>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                    <img src={require('./images/kotpad.jpg')} alt="statemuseum" />
                    <h4 className='slide-title'>Kotpad Saree</h4>
                    <p>Kotpad handloom sarees originate from the tribal areas of Koraput district in Odisha. These sarees are characterized by their natural color palette, often using earthy tones derived from organic dyes. </p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                    <img src={require('./images/pasapalli.jpg')} alt="TRIBAL" />
                    <h4 className='slide-title'>Pasapalli Cotton Sarees</h4>
                    <p>Pasapalli is a traditional checkered pattern resembling a chessboard. Pasapalli cotton sarees are characterized by this distinctive design and are often woven in Odisha. </p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3  mt-2'>
                <div className='art-images'>
                    <img src={require('./images/berhampurisaree.jpg')} alt="papier" />
                    <h4 className='slide-title'>Berhampuri Cotton Sarees</h4>
                    <p>Berhampur in southern Odisha is known for its handwoven cotton sarees. These sarees often feature simple designs and are comfortable for everyday wear. </p>
                </div>
            </div>
            <div className='col-sm-3 col-md-6 col-lg-3 mt-2'>
                <div className='art-images'>
                    <img src={require('./images/khadisaree.jpg')} alt="Mukteshwar" />
                    <h4 className='slide-title'>Khadi Cotton Saree</h4>
                    <p>Khadi cotton sarees from Odisha are part of the larger khadi movement in India, which promotes handspun and handwoven fabrics. Khadi is not only a fabric but also a symbol of self-reliance and a tribute to traditional craftsmanship.</p>
                </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}
