import image from "../assets/02.jpg";

const About = () => {
  return (
    <section className="section about-section">
      <div>
        <h1 className="about-title">History of coffee</h1>
        <p className="par-about">
          The history of coffee dates back to centuries of old oral tradition in
          Africa. Coffee plants grew wild in Ethiopia and were widely used by
          nomadic tribes for thousands of years. Sufi monasteries in Yemen
          employed coffee as an aid to concentration during prayers. Roasting
          the seeds wasn't a way to serve coffee until the 1400's. During the
          cultivation, brewed coffee was reserved exclusively for the priesthood
          and the medical profession; doctors would use the brew for patients
          experiencing a need for better digestion, and priests used it to stay
          alert during their long nights of studying for the church. Coffee
          later spread to Europe in the early 16th century; it caused some
          controversy on whether it was halal in Ottoman and Mamluk society.
          Coffee arrived in Italy the second half of the 16th century through
          commercial Mediterranean trade routes, only being served to the
          wealthy. Central and Eastern Europeans learned of coffee from the
          Ottomans. By the mid 17th century, it had reached India and the East
          Indies. Coffee houses would establish themselves in Western Europe by
          the late 17th century, especially in England and Germany. In many
          cultures, if you could afford to serve coffee to your guests, it was a
          sign of wealth and power. One of the earliest cultivations of coffee
          in the New World was when Gabriel de Clieu brought coffee seedlings to
          Martinique in 1720. These beans later sprouted 18,680 coffee trees
          which enabled its spread to other Caribbean islands like
          Saint-Domingue and also to Mexico. By 1788, Saint-Domingue supplied
          half the world's coffee. By 1852, globally, Brazil became the largest
          producer of coffee and has held that status ever since. The period
          since 1950 saw the widening of the playing field due to the emergence
          of several other major producers, notably Colombia, Ivory Coast,
          Ethiopia, and Vietnam; the latter overtook Colombia and became the
          second-largest producer in 1999. Modern production techniques along
          with the mass productization of coffee has made it a household item
          today.
        </p>
      </div>
      <div>
        <img className="img-about" src={image} alt="Coffee" />
      </div>
    </section>
  );
};

export default About;
