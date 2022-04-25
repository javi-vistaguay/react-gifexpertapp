import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );
    /*
    
    useEffect( ()=>{
        getGifs(category)
            .then(imgs => setImages(imgs))
    }, [ category ])*/


  return (
   <>
    <h3>{ category }</h3>

    {loading && <p> Cargando... </p>}
    

    <div className='card-grid'>

        
       
            {
                images.map( img => (
                    <GifGridItem 
                    key= {img.id}
                    { ...img } 
                    />
                ))
            }
    </div>

   </>
  )
}
