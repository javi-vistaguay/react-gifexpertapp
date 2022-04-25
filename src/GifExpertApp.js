import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch Man', 'Full Metal Alchemist', 'Steins Gate', 'Shingeki No Kyojin'];

    const [categories, setCategories] = useState(['Steins Gate']);


    return(
        <>
        
        <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
        <hr/>


        <ol>
            {
                
                categories.map( category => (
                    <GifGrid 
                        key= { category } 
                        category={ category } 
                    />
                ))

            }

        </ol>
        
        </>
    )

}

export default GifExpertApp;