import React from 'react'
import { FaHome } from 'react-icons/fa'


const OurSpecialites = () => {
    const specialites=[
        {
            id: 1,
            title: FaHome,
            icon: <FaHome/>,
            subText: "home dek"
        },
        {
            id: 2,
            title: FaHome,
            icon: <FaHome/>,
            subText: "home perform"
        },
        {
            id: 3,
            title: FaHome,
            icon: <FaHome/>,
            subText: "my home"
        },
    ]
    return (
    <>
       <section id="ourSpecialities">
          <h1>Our Properties</h1>
          <div className="special_container">{
               specialites.map((element)=>(
                
                <div classname="card" key ={element.id}>
                    <div className='icon'>{element.icon}</div>
                    <div className='title_text'>{element.text}</div>
                    <div className='subtitle_text'>{element.subtext}</div>
                </div>
                
               ))}
          </div>
       </section>
    </>
  )
}

export default OurSpecialites
