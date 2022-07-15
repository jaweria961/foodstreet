import React from 'react'
import Meal from './Meal'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const MealList = () => {
  debugger;
  const {loading, drink} = useGlobalContext();
  if (loading) {
    return <Loading/>
  }

  if(drink.length<1){
    return <h2>No Food Available</h2>
  }
  return (
    <div>
     <section className='section'>
      <h2 className='section-title'>Food variety</h2>
      <div className='cocktails-center'>
        {
          drink.map((item) => {
            debugger;

            return(
              <Meal key={item.id} {...item} />
            )
          })
        }
        
      </div>
    </section>
    </div>
  )
}

export default MealList
