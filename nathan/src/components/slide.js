import Carousel from 'react-bootstrap/Carousel';

var slideData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'Photogrammétrie aérienne',
    description: "Explorez le monde à travers les yeux de Dronecate avec une technologie de pointe. Plongez dans l'univers captivant de la photogrammétrie aérienne, de l'inspection innovante et du mapping précis, redéfinissant ainsi la façon dont nous percevons et comprenons notre environnement",
    link: 'https://www.dronecate.com'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Agriculture Intelligente et Précision',
    description: "Transformez votre exploitation avec des solutions écologiques innovantes. Maximisez les rendements tout en minimisant l'impact environnemental. Découvrez le futur durable de l'agriculture aujourd'hui.",
    link: 'https://www.dronecate.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Villes Intelligentes et Gestion du Trafic',
    description: "Naviguez dans l'avenir urbain avec des solutions innovantes. Découvrez comment la technologie transforme nos villes pour une mobilité plus efficace et une gestion du trafic plus intelligente.",
    link: 'https://www.dronecate.com'
  }
];

function AppSlide() {
  return (
    <section id="home" className="slide-block">
       <Carousel>
          {
            slideData.map(slide => {
              return (
                <Carousel.Item key={slide.id}>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={"slide " + slide.id}
                  />
                  <Carousel.Caption>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <a className="btn btn-primary" href="#about">Lire la suite <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppSlide;
