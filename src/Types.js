import { useState } from 'react'
import { coffeeTypes } from "./data/coffeeTypes"
import Buttons from "./Buttons"

function Types() {

    const [types, setTypes] = useState(coffeeTypes);

    const chooseType = (searchTerm) => {
        const newType = coffeeTypes.filter(
            (element) => element.searchTerm === searchTerm
        );
        setTypes(newType);
    }

  return (
    <div>
        <div>
        <h1>Guide to Different Types of Coffee</h1>
        <Buttons chooseType={chooseType} />
    </div>
    <div className='types'>
        {types.map((element) => {
            const { id, name, searchTerm, image, info } = element;
            return (
                <div className='cofee-card' key={id}>
                    <img src={image} width="200px" alt={name} />
                    <div className='coffe-info'>
                        <h3>{name}</h3>
                        <p>{info}</p>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Types