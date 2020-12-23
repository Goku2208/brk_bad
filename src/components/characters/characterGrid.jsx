import React from 'react';
import CharacterItem from './characterItem'

const characterGrid = ({items , isLoading}) => {
    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <section className='cards'>
            {items.map((item) => (
                <CharacterItem item={item}></CharacterItem>
            ))}
        </section>
    )
        
    

}

export default characterGrid