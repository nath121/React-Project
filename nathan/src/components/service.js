import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCamera, FaLeaf, FaChartLine, FaPlane, FaBuilding, FaIndustry } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="icon">{icon}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button className="custom-btn btn-primary" href="#contact">Contactez-Nous</Button>
      </Card.Body>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Photogrammétrie aérienne',
      description:
        'Utilisation de photographies aériennes pour créer des cartes, des modèles 3D et d\'autres données spatiales. Cette technologie est employée dans divers domaines tels que la topographie, la cartographie, l\'ingénierie, l\'architecture, l\'archéologie et les sciences environnementales.',
      icon: <FaCamera />,
    },
    {
      title: 'Smart Farming',
      description:
        'L\'agriculture intelligente utilisant des drones fait référence à l\'utilisation d\'aéronefs sans pilote (UAV) pour collecter des données et des informations destinées à l\'agriculture. Les données recueillies par les drones peuvent être utilisées pour améliorer divers aspects de l\'agriculture tels que la surveillance des cultures, l\'analyse du sol, la gestion de l\'irrigation, etc.',
      icon: <FaLeaf />,
    },
    {
      title: 'Data Analysis',
      description:
        'La collecte et l\'analyse de données à l\'aide de drones impliquent l\'utilisation d\'aéronefs sans pilote (UAV) pour recueillir des données, qui sont ensuite analysées pour prendre des décisions informées. Cette méthode trouve des applications variées.',
      icon: <FaChartLine />,
    },
    {
      title: 'Aerial Surveys',
      description:
        'L\'inspection aérienne avec des drones consiste à utiliser des drones (UAV) munis de caméras et d\'autres technologies d\'imagerie pour collecter des données depuis les airs. Ces données sont ensuite utilisées pour élaborer des cartes, des modèles et d\'autres représentations de la zone d\'inspection.',
      icon: <FaPlane />,
    },
    {
      title: 'Smart Cities',
      description:
        "La gestion du trafic par des drones fait référence à l'utilisation d'aéronefs sans pilote (UAV) pour surveiller, gérer et contrôler la circulation. L'utilisation de drones pour la gestion du trafic a le potentiel d'améliorer l'efficacité, la sécurité et le flux global de la circulation de diverses manières.",
      icon: <FaBuilding />,
    },
    {
      title: 'Industry Surveys',
      description:
        "L'inspection industrielle utilisant des drones fait référence à l'utilisation d'aéronefs sans pilote (UAV) pour collecter des données dans diverses applications industrielles. Les enquêtes par drone deviennent de plus en plus populaires en raison de leur capacité à fournir une collecte de données économique, précise et sécurisée. Quelques exemples d'industries utilisant des enquêtes par drone incluent...",
      icon: <FaIndustry />,
    },
  ];

  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <hr /> {/* Ligne ajoutée ici */}
          <br/><br/>
          <h2 className='subtitle'>NOS SERVICES</h2>
          <h3 className='titre2'>- Nous vous proposons les services suivants : -</h3>
        </div>
        <br/><br/>
        <Row>
          {services.map((service, index) => (
            <Col sm={4} key={index}>
              <ServiceCard title={service.title} description={service.description} icon={service.icon} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
