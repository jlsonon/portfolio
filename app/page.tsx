import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import MyProcess from './_components/MyProcess';
import ContactCTA from './_components/ContactCTA';

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <MyProcess />
            <ProjectList />
            <ContactCTA />
        </div>
    );
}
