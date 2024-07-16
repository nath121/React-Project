import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_iz1rc27";
const TEMPLATE_ID = "template_kl75ces";
const PUBLIC_KEY = "nXyOjPXgmcSjKmSsb";

const ContactForm = () => {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert('Message envoyé avec succès !');
      }, (error) => {
        console.log(error.text);
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
      });
    e.target.reset();
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <br/><br/><br/>
          <h2 className='subtitle'>CONTACTEZ-NOUS</h2>
          <h3 className='titre2'>- Bienvenue sur notre site ! Vos retours sont essentiels pour nous. N'hésitez pas à remplir le formulaire ci-dessous pour partager vos suggestions, commentaires ou demandes d'information. Notre équipe est là pour vous aider. Merci de prendre le temps de nous écrire, votre feedback est précieux pour améliorer nos services. -</h3>
          <br/><br/>
        </div>
        <Row>
          <Col>
            <Form id="contact-form" ref={form} onSubmit={handleOnSubmit}>
              <Form.Group controlId="name">
                <Form.Label className="float-start">Nom</Form.Label>
                <Form.Control type="text" placeholder="Votre nom" required />
              </Form.Group>
              <br/>
              <Form.Group controlId="email">
                <Form.Label className="float-start">Email</Form.Label>
                <Form.Control type="email" placeholder="Votre email : exemple@domaine.com" required />
              </Form.Group>
              <br/>
              <Form.Group controlId="phone">
                <Form.Label className="float-start">Téléphone</Form.Label>
                <Form.Control type="tel" placeholder="Numéro de téléphone : +32444444444" />
              </Form.Group>
              <br/>
              <Form.Group controlId="subject">
                <Form.Label className="float-start">Sujet</Form.Label>
                <Form.Control type="text" placeholder="Le sujet de votre message" required />
              </Form.Group>
              <br/>
              <Form.Group controlId="message">
                <Form.Label className="float-start">Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Votre message" required />
              </Form.Group>
              <br/>
              <Button className="custom-btn btn-primary" type="submit" style={{ display: 'block', textAlign: 'left', width: 'auto' }}>
  Envoyer <i className="fas fa-chevron-right" aria-hidden="true"></i>
</Button>




              <br/><br/><br/>
            </Form>
          </Col>
        </Row>
      </Container>
      <b/><b/><b/><b/>
    </section>
  );
};

export default ContactForm;
