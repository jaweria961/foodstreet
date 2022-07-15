import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const MAX_LENGTH = 500;

const Meal = ({id,name, info, glass, image}) => {
  const [readMore,setReadMore]=useState(false);

  const extraContent=<div>
  <p className="extra-content">
  {info.length > MAX_LENGTH ?
        (
          <div>
            {`${info.substring(0, MAX_LENGTH)}...`}
           
          </div>
        ) :
        <p id="section">{info}</p>
      }
  </p>
</div>
const linkName=readMore?'Read Less << ':'Read More >> '
  return (
   <>
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
      {readMore && extraContent}
      </div>
    
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
    </article>
   </>
  )
}

export default Meal
