import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mithushan",
  title: "Hi all, I'm Mithu",
  subTitle: emoji( "A passionate Full Stack Software Developer 🚀 with experience in building dynamic Web and Mobile applications using JavaScript, React.js, Node.js, and React Native, along with other modern libraries and frameworks. Also enthusiastic about exploring the power of Artificial Intelligence and Machine Learning, with hands-on experience integrating AI/ML features into real-world applications."
    ),
  resumeLink:
    "https://drive.google.com/file/d/1SDSN5QPirIokz1yXYzJGfA1_MPR6ZSbq/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mithushan03",
  linkedin: "https://www.linkedin.com/in/mithu03/",
  gmail: "smithushan03@gmail.com",
  gitlab: "",
  facebook: "https://web.facebook.com/mithushan2002",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo =  {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "South Eastern University of Sri Lanka",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bsc(Hons) in Electrical and Electronic Engineering",
      duration: "June 2022 - Present",
      desc: "Currently pursuing my degree in Electrical and Electronic Engineering. I am learning about various aspects of electronics, programming, and system design. Current GPA is 3.01/4.0.",
      descBullets: [
        "Python, C++ , C , JavaScript , HTML , CSS",
        "React.js , Node.js , Express.js , MongoDB ,MySQL ",
        "Machine Learning, Artificial Intelligence, Data Structures and Algorithms"
      ]
    },
     {
      schoolName: "Vavuniya Tamil Madya Maha Vidyalayam",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Secondary Education",
      duration: "January 2012 - December 2020",
      desc: " Advanced Level in Mathematics Stream. I completed my secondary education with a focus on mathematics, physics, and chemistry. I achieved good results in my A/L examinations.",
      descBullets: ["Combined Mathametics : A", "Physics : C", "Chemistry : B"]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Telecommunication Engineer Intern",
      company: "SLT Mobitel",
      companylogo: require("./assets/images/slt.png"),
      date: "June 2024 – August 2024",
      desc: "Gained hands-on experience in broadband connectivity, telecom infrastructure, and enterprise networking.",
      descBullets: [
        "Configured and troubleshot ADSL, ONT, and OneAccess devices for stable internet access.",
        "Supported copper line repairs and fiber optic (FTTH) installations.",
        "Assisted in network diagnostics alongside senior engineers."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {}
  

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Lab Linux-Tutorial",
      subtitle:
        "Learn how to solve real-world DevOps scenarios hands-on with this KodeKloud lab tutorial.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NLWKY-8kM9_WgicxvJA8g1uPHrVoP9l7/view?usp=drive_link"
        }]
    },
    {
      title: "SQL Mastery with MySQL",
      subtitle:
        "Master SQL fundamentals and advanced queries with hands-on MySQL practice for real-world data management.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1hse6-fkpbkb7BPSXZKp_mKbKSvamlUfr/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Fundamentals of Digital System Design",
      subtitle: "Completed Certifcation from University Of Moratuwa for Fundamentals of Digital System Design",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1JeNeDwyyGihc6e9HTkmWmU3R9ZWOcqud/view?usp=drive_link"},
      ]
    },
    {
      title: "Participant of IEEEXtreme 18.0 Programming Competition",
      subtitle: "Participated in IEEEXtreme 18.0, a 24-hour global competitive programming challenge organized by IEEE.",
      image: require("./assets/images/ieeextreme.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1X8M8vWyxI1vXOsSSNBkd4TXT5hYcAmYP/view?usp=drive_link"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {};

// Talks Sections

const talkSection = {};


// Podcast Section

const podcastSection = {};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+94 775742738",
  email_address: "smithushan03@gmail.com",
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
