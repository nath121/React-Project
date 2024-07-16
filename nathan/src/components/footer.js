import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importez FontAwesomeIcon
import { faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes nécessaires

const Footer = () => {
  return (
    <footer id="footer" style={{ backgroundColor: '#9acd32', padding: '20px 0' }}> {/* Modifiez la couleur du fond en vert foncé et ajoutez un padding */}
      <Container fluid>
        <div className="copyright" style={{ color: 'white', marginBottom: '20px' }}>© 2024 Dronecate. All Right Reserved.</div> {/* Modifiez la couleur du texte en blanc */}
        <div className="socials">
          <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center' }}> {/* Ajoutez le style pour centrer horizontalement */}
            <li style={{ margin: '0 10px' }}><a href="https://www.facebook.com/Dronecate"><div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon icon={faFacebookF} style={{ color: '#9acd32' }} /></div></a></li> {/* Modifiez la couleur de l'icône en vert foncé */}
            <li style={{ margin: '0 10px' }}><a href="https://www.youtube.com/@dronecate"><div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon icon={faYoutube} style={{ color: '#9acd32' }} /></div></a></li> {/* Modifiez la couleur de l'icône en vert foncé */}
            <li style={{ margin: '0 10px' }}><a href="https://www.linkedin.com/in/wannesgrami/"><div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#9acd32' }} /></div></a></li> {/* Modifiez la couleur de l'icône en vert foncé */}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
