import React from 'react';
import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import img from '../assets/images/img.jpg'; // Assurez-vous que le chemin de l'image est correct

const AboutPage = () => {
    return (
        <section id="about" style={{ marginTop: '80px' }}>
            <Container>
                <div className="title-holder text-center">
                    <br/><br/><br/>
                </div>
                <div className="title-holder text-center">
                    <h2 className='subtitle'>À PROPOS DE NOUS</h2>
                    <h3 className='titre2'>- Services and solutions easy to deploy, flexible, eco-friendly and cheaper -</h3>
                </div>
                <h2 className='titre1 text-center'></h2>
                <Row className="justify-content-center text-center align-items-center">
                    <br/><br/>
                    <h3 className='titre2'></h3>
                    <br/><br/><br/>
                    <Col xs={12} md={4} lg={4} className="mb-4">
                        <Image src={img} fluid style={{ maxWidth: '100%' }} />
                    </Col>
                    <Col xs={12} md={8} lg={8}>
                        <p className="style1">
                            Chez Dronecate, nous proposons des services et solutions professionnels utilisant des drones ; Photogrammétrie aérienne, Agriculture intelligente & Agriculture de précision, ainsi que Villes intelligentes & Gestion du trafic.
                        </p>
                        <p className="style1">
                            Nous fournissons des services faciles à déployer, flexibles, respectueux de l'environnement et moins chers.
                        </p>
                        <p className="style2">PHOTOGRAMMETRIE AÉRIENNE</p>
                        <ProgressBar className='Progress-Bar custom-progress-bar' now={60} label="60 %" />
                        <br/>
                        <p className="style2">SMART FARMING & PRECISION</p>
                        <ProgressBar className='Progress-Bar custom-progress-bar' now={30} label="30 %" />
                        <br/>
                        <p className="style2">SMART CITIES & TRAFFIC MANAGEMENT</p>
                        <ProgressBar className='Progress-Bar custom-progress-bar' now={10} label="10 %" />
                        <br/><br/><br/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutPage;
