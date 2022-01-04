import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditSquare, faTwitterSquare, faFacebookSquare, faInstagramSquare, faDiscord, faYoutubeSquare, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
   return (
      <footer>
         <Container>
            <Row>
               <Col>
                  <a href="http://instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} className="fa-2x fa-fw" /></a>
                  <a href="http://youtube.com/" aria-label="Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="fa-2x fa-fw" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="fa-2x fa-fw" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faRedditSquare} className="fa-2x fa-fw" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="fa-2x fa-fw" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} className="fa-2x fa-fw" /></a>
                  <a href="http://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} className="fa-2x fa-fw" /></a>
               </Col>
            </Row>
         </Container>
      </footer>
   );
}


export default Footer;
