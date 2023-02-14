import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo3.JPG';
import projectsImg from './projects.JPG';
import contactImg from './contact.JPG';



// images
import GameLibraryImage from './gameLibrary.png'
import SocialMediaSiteImage from './ourFriends.PNG';
import BadgeMakerImage from './badgeMaker.PNG';
import SudaImage from './suda.png';
import Imjordredditclone from './imjordredditclone.png';
import sneaker from './vade.png';
import readme from './readme.png';



function App() {
  const [messageSent, setMessageSent] = useState(false);
  const [pages] = useState([
    {
      title: "Portfolio",
      image: logo,
      content: "Hello! My name is Jordan and I'm based out of Utah! I've been working In web development and all things coding for about a year now. I love creating things from nothing and sharing it with others. I'm currently working for Infosys as a Jr Tech Associate."
    },
    {
      title: "Projects",
      image: projectsImg,
      content: "My projects"
    },
    {
      title: "Contact",
      image: contactImg,
      content: ""
    }
  ]);

  const [projects] = useState([
    {
      liveSite: "https://imjordgamesdb.herokuapp.com/",
      skills: "Javascript, React.js, Node.js",
      title: "Imjord Game Library",
      image: GameLibraryImage
    },
    {
      liveSite: "https://our-friends.herokuapp.com/",
      skills: "Javascript, node.js, EJS",
      title: "OurFriends Social Media Site",
      image: SocialMediaSiteImage
    },
    {
      liveSite: "https://github.com/imjord/BadgeMaker_",
      skills: "C#",
      title: "Console App Badge Maker",
      image: BadgeMakerImage
    },
    {
      liveSite: "https://vade-sneakers.herokuapp.com/",
      skills: "React, Javascript, Node.js, Context API, MongoDB, Express, CSS",
      title: "Vade Ecommerce Site",
      image: sneaker
    },
    {
      liveSite: "https://github.com/imjord/imjord-Github-Readme-Generator",
      skills: "Javascript, Node.js, inquirer",
      title: "imjord Readme Generator",
      image: readme
    },
    {
      liveSite: "https://imjord-reddit-clone.herokuapp.com/",
      skills: "Javascript, React.js, Node.js, Passport.js, MongoDB",
      title: "Imjord Reddit Clone",
      image: Imjordredditclone
    },
    {
      liveSite: "https://suda.herokuapp.com/",
      skills: "EJS, Javascript, Node.js, C#, Windows Forms",
      title: "Suda Windows App",
      image: SudaImage
    }
    ])

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
   <div>
    <Navbar
    pages={pages}
    currentPage={currentPage} setCurrentPage={setCurrentPage} contactSelected={contactSelected} setContactSelected={setContactSelected}
    />
   <Intro pages={pages} projects={projects} currentProject={currentProject} setCurrentProject={setCurrentProject}
    currentPage={currentPage} setCurrentPage={setCurrentPage} contactSelected={contactSelected} setContactSelected={setContactSelected}
    messageSent={messageSent} setMessageSent={setMessageSent} />
   </div>
  );
}

export default App;
