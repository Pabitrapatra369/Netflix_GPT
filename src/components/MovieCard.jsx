import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-38 cursor-pointer'>
        <img src={IMG_CDN+posterPath} alt='Movie card'/>
    </div>
    
  )
}

export default MovieCard