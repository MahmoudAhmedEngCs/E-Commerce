import React, { useContext } from 'react'
import { ContextCategories } from '../Context/CategoriesContext';
import { Hourglass } from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Card() {
    const { allCategories ,isLoading } = useContext(ContextCategories);
    if (isLoading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <Hourglass
              visible={true}
              height="100"
              width="80"
              ariaLabel="hourglass-loading"
              colors={['#306cce', '#72a1ed']}
            />
          </div>
        );
      }
  return (
<div className='grid md:grid-cols-3 lg:grid-cols-4 w-11/12 m-auto gap-3 mt-5  '>
        {allCategories.map((cat) => (
        
        <div key={cat._id} className='pt-5 product shadow px-4 transition duration-300 border rounded-md hover:shadow-blue-700'>
        <img src={cat.image || 'default-image-url'} alt={cat.title} className=' object-cover h-72 w-full' />
        <div className='flex justify-between mb-4'>

          
        </div>
        <p className='text-lg font-medium mb-1 text-center'>{cat.name}</p>
        <div className='flex justify-between'>
      
          
        </div>
        
      </div>
        ))}
</div>
  )
}
