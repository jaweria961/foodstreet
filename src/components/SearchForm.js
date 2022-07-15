import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('');
  useEffect(() =>{
     searchValue.current.focus()
  }, [])
const handleChange = ((e) =>{
  e.preventByDefault();
})

function searchFood(){
  setSearchTerm(searchValue.current.value)
}
  return (
    <>
    <section className='section search' onSubmit={handleChange}>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite Drinks</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchFood}
           
          />
        </div>
      </form>
    </section>
    
    </>
  )
}

export default SearchForm
