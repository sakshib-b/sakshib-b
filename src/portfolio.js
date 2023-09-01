
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
  username: "SAKSHI",
  title: "Hi all, I'm sakshi",
  subTitle: emoji(
    "A passionate WEB3 developer🚀 ! "),
 // resumeLink:
 //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sakshib-b",
  linkedin: "https://www.linkedin.com/in/sakshibhandari4",
  gmail: "sakshib236@gmail.com",
  leetcode: "https://leetcode.com/stacklearner/",
  //codingninja: "https://www.codingninjas.com/studio/profile/sakshi_b",
  //gitlab: "https://gitlab.com/saadpasta",
 // facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: " DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ WEB3 developer"
    ),
   // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
   // emoji(
   //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
   // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C",
      //fontAwesomeClassname: "fab C"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    /*{
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
    },*/
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    /*{
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },*/
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    /*{
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Swami Rama Himalayan University",
      //logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "August 2017 -August 2020",
      desc: "Data structure, Algorithm, Operating system, Cyber Security, Programming, Networking, Mathematics.",
      descBullets: [
        " Received a Certificate of merit and award for securing the first position in BCA in the university examination.",
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience    :   https://github.com/saadpasta/developerFolio

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C/C++", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "WEB3",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Subject Matter Expert ",
      company: "BJYUS",
      companylogo: require("/workspaces/sakshib-b/developerFolio/src/assets/images/byjus-logo.png"),
      date: "January 2022 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
   

  ]
};

//Your Open Source Section to View Your Github Pinned Projects
//To know how to get github key look at readme.md 
const openSource = {
//  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
 // display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
 // subtitle: "Project",
  projects: [
    {
     // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Self Regulating Smart Street Light System.",
      projectDesc: " An IoT-based Smart Street Light System. That will turn on by sensing human movement and vehicles during the nighttime.The technology used: Arduino Uno, LDR sensor, and PIR sensor.Programming Languages used: C|C++, Arduino programming.Add-on feature: We developed a mobile interface application for manual turning on and off lights. ",
      footerLink: [
        {
          name: "Visit Website",
        //  url: " "
        }
        //  you can add extra buttons here.
      ]
    },
    {
    //image: require("./assets/images/nextuLogo.webp"),
      projectName: "ERC20 Token",
      projectDesc: "Developed a project that provides two smart contracts, one that implements an ERC20 token and another that allows users to sell/transfer their tokens. This project includes automated testing and a slim front for interacting with these contracts.Skills: solidity · JavaScript · VScode · GitHub · MetaMask · Web3 · Etherum · Blockchain",
      footerLink: [
        {
          name: "ERC20 PROJECT TOKEN LINK",
         url: "https://github.com/sakshib-b/EC20-token-"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Posts and Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/posts/activity-7082261813265858560-80U2?utm_source=share&utm_medium=member_desktop",
      title: "Blockchain",
      description:
        "🌐 Demystifying Blockchain: Unlocking the Future of Trust 🚀"
    },
    {
      url: "https://www.linkedin.com/posts/activity-7088211950035177472-S5Q9?utm_source=share&utm_medium=member_desktop",
      title: "WEB EVOLUTION",
      description:
        "🚀 Unleashing the Evolution of the Web: From Web 1.0 to Web 3.0 🌐"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Sakshi Educator Journey ",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE "
  ),

  talks: [
    {
      title: " will update soon",
     // subtitle: "Codelab at GDG DevFest Karachi 2019",
     // slides_url: "https://bit.ly/saadpasta-slides",
    //  event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  //title: emoji("Podcast 🎙️"),
  //subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  //podcast: [
   // "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  //],
  //display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "sakshib236@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable
};
