import React from 'react';
export default function Dance() {
  return (
    <>
      <div className='dancing-banner'>
        <div className='container'></div>
      </div>
      <div className='about-lakes'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Dances & Music</span> of Odisha</h2>
                <div className="main-heading-domain-border2">
                  <div></div>
                  <div></div>
                </div>
            </div>
          <div className='col-md-6'>
            <div className='desc-lake'>
              <p>The eastern Indian state of Odisha has a rich heritage of dance and music that is a delight for all arts and culture lover. Odissi music is a classical style of music that comprises all the essential elements, such as talas and ragas, common to Karnatic and Hindustani Music. Initially Odissi music has the tradition of chhandas that were low in musical outline. Jayadeva was the first Odia poet to compose musical lyrics that were meant to be sung and he also suggested the classical ragas existing during that time in which the lyrics were to be sung. From the 16th�Century, musical treatises, named Natya Manorama, Sangita Kalalata, Gita Prakasha and Sangitamava Chandrika, were written and compiled in the state. In the 19th�Century, two treatises � Sangita Narayana and Sangita Sarani � were written.��Odissi sangita is a combination of four classes of music chitrakala, chitrapada, dhruvapada and panchal. The main ragas in Odissi sangita are Bhairavee, Baradi, Dhanashri, Kalyana, Karnata, Nata, Panchama, Shree Gowda and Shokabaradi.
                Your�cultural tour�to the state is incomplete without experiencing Odisha�s�famous dance forms�� Odissi, Chhau, Gotipua, Danda Nata, Sambapuri, Dalkhai, Chaitighoda, and Medha Nacha.�Odissi is an Indian classical dance and archeological evidence indicates that it is the oldest surviving dance form in the country. As per literature from 200 BC, the�history of Odissi dance�dates back to 2,000 years. Chhau is a�semi classical Indian dance with�tribal,�martial and folk origins.�Gotipua dance is a folk dance that originated from Raghurajpur village in Puri District.</p>
            </div>
            </div>
          <div className='col-md-6'>
            <div className='desc-lake'>
              <p>The Danda Nata is the most ancient folk dance in which devotees do penance by piercing their skin or tongues with iron nails, standing on sharp-edged swords, and walking on red hot charcoal. The Sambalpuri folk dance originated from the vibrant Sambalpur district in which the performers sing Dalkhai to the beats of timkis, drums and nisans. Chaitighoda is a folk dance of fishermen in which a dancer inside a horse costume gallops like a horse and is accompanied by two other characters the Rautani and the Rauta. Medha Nacha is a folk dance in which a performer puts a paper machie mask and dances to the beats of music in a procession. There are some tribal dance such as Karma and Changu that are performed by Gonds, Binjahal, Kharia, Oraon, Kisan, Kol and Juang tribes.
                If planning to experience the rich dance of musical heritage of Odisha, you must plan your�holidays�from December to March, the time during which all music and dance festivals are organized. Konark Festival, organized by�Odisha Tourism�from�December 1-5, showcases Odissi as well as other Indian classical dance performances. Mukteshwar Dance Festival, usually organized from�January 14-16, focuses only on Odissi dance and stages various Odissi performances. Rajarani Music Festival, organized from�January 18-20, features Odissi and Hindustani music performances. Dhauli-Kalinga Mahotsav, organized from�February 6-8, features a combination of martial arts with classical and folk dances. Konark Music and Dance Festival, organized from�February 19-23, features classical dance and music performances.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="dance-section">
        <div className='container'>
          <div className='row'>
            <h2><span>Popular Dances </span>of Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            <p>Dance and music hold a significant place in the culture and tradition of Odisha, a state in eastern India. Odisha boasts a rich heritage of classical and folk forms of dance and music that have been passed down through generations. </p>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='left-side'>
                <img src={require('./images/odissi-dance.jpeg')} alt="odissi"/>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='right-side'>
                <h4>ODISSI DANCE</h4>
                <p>Renowned as the most revered classical dance form in Odisha, Odissi Dance is a typical dance form where religious and mythical stories and poems emoted by the dancers through expressions, body movements, and gestures.</p>
              </div>
            </div>
            {/* 2 */}
            <div className='col-md-8'>
              <div className='right-side'>
                <h4>CHHAU DANCE</h4>
                <p>A traditional dance form in Odisha, which is used to enacts the episodes from the Hindu epics of Ramayana and Mahabharata, is Chhau Dance. The indigenous dance forms are integrated with martial arts to form this dance form.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='left-side'>
                <img src={require('./images/folk-dance-of-odisha.jpg')} alt="odissi"/>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='left-side'>
                <img src={require('./images/gotipua2.jpg')} alt="odissi"/>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='right-side'>
                <h4>GOTIPUA DANCE</h4>
                <p>Gotipua is a traditional dance form in the state of Odisha, India, and the precursor of Odissi classical dance.It has been performed in Orissa for centuries by young boys, who dress as women to praise Jagannath and Krishna. The dance is executed by a group of boys who perform acrobatic figures inspired by the life of Radha and Krishna. The boys begin to learn the dance at an early age until adolescence, when their androgynous appearance changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
