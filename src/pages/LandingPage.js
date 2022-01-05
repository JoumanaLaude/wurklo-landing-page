import '../App.css';
import Landing from '../components/Landing';
import About from '../components/About';
import Roadmap from '../components/Roadmap';
import Preview from '../components/Preview';
import Contact from '../components/Contact';

function LandingPage() {

    return (
        <>
            <Landing />
            <About />
            <Preview />
            <Roadmap />
            <Contact />
        </>
    );
};

export default LandingPage;