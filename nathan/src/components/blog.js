import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import img1 from '../assets/images/drone1.jpg';
import img2 from '../assets/images/drone2.png';
import img3 from '../assets/images/drone3.jpg';
import '../App.css'; // Importation du fichier CSS personnalisé

const BlogSection = () => {
  return (
      <section id="blog" className="block blog-block" style={{ backgroundColor: '#f0f0f0' }}>
        <Container fluid>
          <div className="title-holder">
            <br/><br/><br/>
            <h2 className='subtitle'>ACTUALITÉS</h2>
            <h3 className='titre2'>- Obtenez les dernières actualités depuis notre blog. -</h3>
            <br/><br/>
          </div>
          <Row>
            <Col sm={4}>
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Text><time>15 Nov 2023</time></Card.Text>
                    <Card.Title className="h5" style={{ color: '#9acd32' }}>L'Importance des Drones dans l'Agriculture : Une Révolution grâce au Smart Farming et aux Solutions Écologiques</Card.Title>
                    <Card.Text>
                      L'agriculture moderne fait face à des défis complexes, et l'utilisation de drones émerge comme une solution innovante, intégrant le concept de Smart Farming et promouvant des pratiques agricoles durables.
                    </Card.Text>
                    <Button href="#contact" className="custom-btn btn-primary">Lire la suite <i className="fas fa-chevron-right" aria-hidden="true"></i></Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Text><time>10 Oct 2022</time></Card.Text>
                    <Card.Title className="h5" style={{ color: '#9acd32' }}>L'Importance de l'IA dans le Drone Mapping</Card.Title>
                    <Card.Text>
                      Le mariage entre l'intelligence artificielle (IA) et les drones a révolutionné la façon dont nous percevons et utilisons le drone mapping. Cette convergence technologique offre des avantages significatifs dans divers domaines.
                    </Card.Text>
                    <Button href="#contact" className="custom-btn btn-primary">Lire la suite <i className="fas fa-chevron-right" aria-hidden="true"></i></Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className="holder">
                <Card>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Text><time>08 Nov 2021</time></Card.Text>
                    <Card.Title className="h5" style={{ color: '#9acd32' }}>Survol des Champs: La Révolution de la Surveillance Agricole avec les Drones</Card.Title>
                    <Card.Text>
                      L'agriculture moderne est en constante évolution, adoptant de nouvelles technologies pour accroître l'efficacité et maximiser les rendements. Une innovation majeure qui a révolutionné la surveillance des champs est l'utilisation de drones.
                    </Card.Text>
                    <Button href="#contact" className="custom-btn btn-primary">Lire la suite <i className="fas fa-chevron-right" aria-hidden="true"></i></Button>
                  </Card.Body>
                </Card>
              </div>
              <br/>
              <br/>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default BlogSection;
