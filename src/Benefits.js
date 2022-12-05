import {useState} from "react";

import { data } from "./data/data"

function Benefits() {
  const [benefits, setBenefits] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeBenefit = (id) => {
    let newBenefit = benefits.filter((element) => element.id !==id);
    setBenefits(newBenefit)
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowMore(!showMore)
  }

if(benefits.length === 0) {
    return (
        <main>
            <div>
                <h2>no benefits left</h2>
                <button className="btn" onClick={() => window.location.reload(false)}>Click to reload benefits</button>
            </div>
        </main>
    )
}

  return (
    <main>
      <div className="title">
        <h1>10 Health Benefits of Coffee</h1>
      </div>

      <section className="benefit-main">
       {benefits.map((element) => {
        const { id, name, text, image, showMore } = element;
        return (
            <article className="one-benefit" key={id}>
                <img src={image} alt={name} />
                <footer>
                    <div className="description">
                        <h2 className="subtitle">{name}</h2>
                        <p className="benefit-info">{showMore ? text : text.substring(0,180) + "....."}
                        <button className="btn" onClick={() => showTextClick(element)}>{showMore ? "show less" : "show more"}</button></p>
                        <button className="delete-btn" onClick={() => removeBenefit(id)}>not interested</button>
                    </div>
                </footer>
            </article>
        )
       })}
      </section>
    </main>
  );
}

export default Benefits;
