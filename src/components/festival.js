import React from 'react'
export default function Festival() {
  return (
    <>
      <div className='festival-banner'>
        <div className='container'></div>   
      </div>
      <div className='about-lakes'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2><span>Festivals in</span> Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='desc-lake'>
                <p>Odisha, the land of diverse cultural heritage, celebrates numerous religious festivals round the year, which are typical to the particular region. The festivities are usually vibrant, marked by colourful processions, huge gatherings, and the entire region revels in a festive atmosphere. Being a land of various religions and tribe, you will find numerous festivals being celebrated by the people throughout the year.In Odisha We are celebrating 13 festivals in 12 months.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='occasions'>
        <div className='container'>
          <div className='row'>
            <h2><span>Festivals Celebrate</span> in Odisha</h2>
              <div className="main-heading-domain-border2">
                <div></div>
                <div></div>
              </div>
          </div>
          <div className='row'>
            <p>Odisha celebrates 13 festivals in 12 months as the saying goes Bāra Māsare Tera Parba.</p>
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./../components/images/diwali.jpg')} alt="diwali"/> 
                  <h4>Diwali</h4>
                  <p>In Odisha, on the occasion of Diwali, people perform Kauriya Kathi. It is a ritual in which people worship their ancestors in heaven. They burn jute sticks to call upon their ancestors and seek their blessings.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./../components/images/holi.jpg')} alt="diwali" /> 
                  <h4>Holi</h4>
                  <p>Holi also know as 'Dola Purnima', but instead of placing the idols of Krishna and Radha on the swing they place the idol of Lord Jagannath. This is so because of the temple of Jagannath at Puri. Besides, Jagannath is only a synonym of Krishna.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./../components/images/raja.jpg')} alt="diwali"/> 
                  <h4>Raja</h4>
                  <p>Raja or Raja Parba or Mithuna Sankranti is a three-day-long festival of womanhood celebrated in Odisha, India. On this occasion, people enjoy by cooking traditional delicacies, relishing paan, playing cards & other games with family & friends.</p>
              </div>
            </div>
          </div>
          <div className='row mt-4'>    
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./../components/images/durgapuja.jpg')} alt="durgapuja" /> 
                  <h4>Durga Puja</h4>
                  <p>Vijayadashami, commonly known as Dussehra, is one of India's widely celebrated festivals Which Is observed at the end of Navratri that Lasting for 10 days. According Hindu calendar this Festival falls in the month of Ashwin.</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./images/shivratri.jpeg')} alt=""/>
                  <h4>Maha Shivratri</h4>
                  <p>Maha Shivaratri is celebrated on the 13th night or 14th day on the waning lunar fortnight in the Phalguna month. It usually falls in February or March. It is considered the night on which Shiva perform the Tandava dance. </p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="art-images">
                <img src={require('./images/rathyatra.jpg')} alt=""/>
                  <h4>Ratha Yatra</h4>
                  <p>Ratha Yatra is an annual Hindu festival which originated in Puri in Odisha.The festival involves transporting of the idols of the deities Jagannatha, Balabhadra & Subhadra on giant chariot from the Jagannath Temple to the Gundicha Temple. </p>
              </div>
            </div>
            </div>
            <div className='row mt-4'>    
              <div className='col-md-4'>
                <div className="art-images">
                  <img src={require('./../components/images/pitha.jpg')} alt="durgapuja" /> 
                    <h4>Prathamastami</h4>
                    <p>On Prathamastami, households pray for the long life of the firstborns. Enduri Pitha is a special delicacy which is prepared for this occasion.[9] It has the cultural significance that first born were usually expected to take over as the family head.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className="art-images">
                  <img src={require('./images/Nuakhai.jpeg')} alt=""/>
                    <h4>NuaKhai</h4>
                    <p>Nuakhai is an agricultural festival mainly observed by people of Western Odisha in India.Nuakhai is observed to welcome the new rice of the season.Nuakhai is also called Nuakhai Parab or Nuakhai Bhetghat. </p>
                </div>
              </div>
                  <div className='col-md-4'>
                    <div className="art-images">
                      <img src={require('./images/ganesh puja.jpg')} alt="ganesh puja"/>
                        <h4>Ganesh Chaturthi</h4>
                        <p>Ganesh Chaturthi is celebrated as the birthday of the god Shivanka, usually in August. It is primarily observed by educational institutes and students. The god is offered prasad like modak and laddu in pandals.</p>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
      </>
  )
}
