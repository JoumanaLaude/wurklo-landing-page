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
               <p>Join the Wurklo community:</p>
                  <a href="https://t.me/+-tLGe4BSh1pkODYx" aria-label="Telegram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram} className="fa-2x fa-fw" /></a>
                  <a href="https://www.facebook.com/Wurklo" aria-label="Facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="fa-2x fa-fw" /></a>
                  <a href="https://twitter.com/Wurklo" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="fa-2x fa-fw" /></a>
                  <a href="https://www.reddit.com/user/Wurklo/comments/ri14n4/what_is_wurklo/" aria-label="Reddit" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faRedditSquare} className="fa-2x fa-fw" /></a>
                  <a href="https://www.instagram.com/wurklo/" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="fa-2x fa-fw" /></a>
                  <a href="https://www.youtube.com/channel/UCxGURLHBrraodONmnB7jxcw" aria-label="Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutubeSquare} className="fa-2x fa-fw" /></a>
                  <a href="https://discord.gg/cpshUmJpRc" aria-label="Discord" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} className="fa-2x fa-fw" /></a>
               </Col>
            </Row>
         </Container>
      </footer>
   );
}


export default Footer;
