import { useState } from "react";
import { coffeeTypes } from "../data/coffeeTypes";
import Buttons from "../components/Buttons";

function Types() {
  const [types, setTypes] = useState(coffeeTypes);

  const chooseType = (searchTerm) => {
    const newType = coffeeTypes.filter(
      (element) => element.searchTerm === searchTerm
    );
    setTypes(newType);
  };

  return (
    <section>
      <div>
        <h1 className="types-title">Guide to Different Types of Coffee</h1>
        <Buttons chooseType={chooseType} />
      </div>
      <div className="types">
        {types.map((element) => {
          const { id, name, searchTerm, image, info } = element;
          return (
            <div className="coffee-card" key={id}>
              <img src={image} alt={name} className='type-img' />
              <div className="coffe-info">
                <h2 className="type-subtitle">{name}</h2>
                <p className="type-text">{info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Types;
