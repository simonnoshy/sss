import Hero from "./page/page";
import Footer from "./footer/footer";
import Portfolio from "./projects/Project";
import Skills from "./Skills/Skills";
import About from './aboutme/aboutme';
import "./glopal.css";

function App() {
  const projects = [
    {
      title: "Project 1",
      description: <button className="btn btn-secondary">View Project</button>
    },
    {
      title: "Project 2",
      description: <button className="btn btn-secondary">View Project</button>
    },
    {
      title: "Project 3",
      description: <button className="btn btn-secondary">View Project</button>
    },
    {
      title: "Project 4",
      description: <button className="btn btn-secondary">View Project</button>
    },
    {
      title: "Project 5",
      description: <button className="btn btn-secondary">View Project</button>
    },
    {
      title: "Project 6",
      description: <button className="btn btn-secondary">View Project</button>
    },
  ];
  const skills = [
    { name: "HTML", progress: 100 },
    { name: "CSS", progress: 90 },
    { name: "Java", progress: 80 },
    { name: "JavaScript", progress: 75 },
    { name: "BootStrap", progress: 40 },
    { name: "Angular", progress: 30 },

  ];

  return (
    <>
    <div className="global">
      <Hero />
      <About />
      <Skills skills={skills} />
      <Portfolio projects={projects} />
      <Footer />
      </div>
    </>
  );
}

export default App;