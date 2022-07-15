import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function Singlemeal() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [meal, setmeal] = React.useState(null)

  React.useEffect(() => {
    
    setLoading(true)
    async function getmeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data?.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strArea: info,
            strCategory: category,
            strTags: glass,
            strInstructions: instructions,
            
          } = data.meals[0]
         
          const newmeal = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            
          }
          setmeal(newmeal)
        } else {
          setmeal(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getmeal()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!meal) {
    return <h2 className='section-title'>no Food to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
     
    } = meal
    return (
      <section className='section meal-section'>
        <Link to='/' className='btn btn-primary ml-2'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            
          </div>
        </div>
      </section>
    )
  }
}
