import React from 'react'

export default function Hiddengems() {
  return (
      <div>
        <div className='hiddengemsPage'>
          <div className='container'></div>
        </div>
        <div className='about-lakes'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2><span>Arts and Handicrafts </span>in Odisha</h2>
                <div className="main-heading-domain-border2">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='desc-lake'>
                  <p>Odisha boasts of opulent art and craft that can certainly win hearts. An important part of the state�s tourism, the art and craft of Odisha displays sound skills of the artisans and the influence of rich culture. From fine stone carving to traditional art of Pattachitra,</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='desc-lake'>
                  <p>From carving of images in the sand to silver filigree to the internationally acclaimed applique, Odisha is one stop in India that is fit for any shopaholic or culture aficionado. The art and craft of Odisha is indeed a cultural heritage that brings one a step closer to this remarkable east Indian state.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
       <div className="art-section">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Popular Arts & Handicrafts </span>of Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/pattachitra.jpg')} alt="pattachitra" />
              <h4>Pattachitra</h4>
              <p>Believed to be originated in the early 12th-century, Pattachitra is an icon painting which makes it one of the most popular living art forms in India. People in Odisha can be seen practising it daily.</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/lacquer.png')} alt="pattachitra" />
              <h4>Lacquer Work</h4>
              <p>Lacquer Work is one of the famous tribal craft in India which is practised mainly by women. The impressive folk items like bangles, toys, and necklace are made by using this technique of art.</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/sand-art-in-odisha.jpg')} alt="SandArt" />
              <h4>Sand Art</h4>
              <p>Odisha excels in creating sculptures from sand. Evidently, Sand Art is one of the worldly-famous arts that resides here in Puri, Odisha. For the fact, the state also hosts an International Sand Art Festival.</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/horn.jpg')} alt="pattachitra" />
              <h4>Horn Work</h4>
              <p>The most popular art amongst all is Horn Work. A mystical artwork of Odisha, Horn Work showcases an impressive fashion design.</p>
            </div>
          </div>
          </div>
          <div className='row mt-4'>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/applique-pipli.jpg')} alt="applique" />
              <h4>Applique Work</h4>
              <p>In the village of Pipli, there prevails a traditional art form - Applique Work. It is a complex form of art where one material is sewed to the other in order to make an enthralling decorative pattern.</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/silverwork.jpg')} alt="lacquer" />
              <h4>Silver Filigree Work</h4>
              <p>Filigree, is also called as filigrann or filigrene. This is a very unique craft form representing a delicate jewellery metalwork. It is usually made of gold and silver.</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/papier.jpg')} alt="papier" />
              <h4>Papier Mache</h4>
              <p>Most of the arts in Odisha have worldwide acclamation and Papier Mache is one of them. The art is practised in almost every region of the state and involves the use of waste cloth, natural fibres, and papers.</p>
            </div>
          </div>
          <div className='col-sm-3'>
            <div className='art-images'>
              <img src={require('./images/brass.jpg')} alt="horn" />
              <h4>Bell Metal & Brass Handicrafts</h4>
              <p>An important native art coming from the Kansari and Dhokra caste in Odisha, Ball Metal and Brass Handicraft is a popular folk art which produces various pieces of household items and decorations items.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
  )
}
