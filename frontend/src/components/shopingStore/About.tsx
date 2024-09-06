import React from 'react'

interface ContentProps {
  image: string;
  title : string;
  detail : string;

}
const About: React.FC<ContentProps> = ({ image , title , detail }) => {
  return (
    <div className='about-template1'>
        <div className="img">
            <img src={image} alt="" />
        </div>
        <div className="text">
            <h1>{title}</h1>
            <p>{detail}</p>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default About