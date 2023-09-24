
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
  title: "Hi all, I'm sakshi.",
  subTitle: emoji(
    "An aspiring  WEB3 developer🚀!Goal-oriented, responsible, and high-quality committed spirit. I am a developer and an educator with a keen interest in exploring new technologies and teaching mythologies.")
    // resumeLink:
 //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
 , displayGreeting: true // Set false to hide this section, defaults to true
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
  subTitle: "DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji( "⚡An aspiring WEB3 developer"),
   emoji("⚡ Programming Languages known : C ,C++ , JAVA ,SOLIDITY ,PYTHON ,PHP"),
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
    /*{
      skillName: "C",
      //fontAwesomeClassname: "fab C"
    },*/
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
  /*  {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }, */
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
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    /*{
      skillName: "Solidity ",
      //fontAwesomeClassname: "fas fa-fire"
    },
    
    {
      skillName: "C ,C++ ,JAVA ,",
    //  fontAwesomeClassname: "fab fa-docker"
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
      //logo: require("/workspaces/sakshib-b/developerFolio/src/assets/images/srhu logo.webp"),
      subHeader: " Bachelor of Computer Application & Minors in Mathematics.",
      duration: "August 2017 -August 2020",
      desc: " Course Work  : Data structure, Algorithm, Operating system, Network Security,Data Base Management System,Cyber Security,Information Management System.Computer Organization and Architecture,Data Communication and Computer Network, Programming, Networking, Mathematics.",
      descBullets: [
        " Received a Certificate of merit and award for securing the first position in BCA in the university examination.",
         "Programming Languages:C, C++, Java, Vb.net, Object-oriented programming.",
          "Web Technologies: HTML, CSS, PHP, WordPress."

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
      companylogo: require("static/media/byjus-logo.3615d8017cd72b7dda5b.png"),
      date: "January 2022 – Present",
      desc: "Teaching ",
      descBullets: [
        "Taking one to one session with 85% above satisfaction rate  ",
        "One to many session with 4.5/5 above  rating ",
        "Directly intercating with customer and student and resolving their issue"
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
   // image: require("developerFolio/src/assets/images/ nextuLogo.webp"),
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
      title: "BLock chain Expert ",
      subtitle:
        "by Algo Expert",
     image: require("/workspaces/sakshib-b/developerFolio/src/assets/images/logo.webp"),
      imageAlt: "Blockchain Expert",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificate.algoexpert.io/BlockchainExpert%20Certificate%20BCE-2564a0d0c8"
        },
        {
          name: "My Course Experience",
          url: "https://www.linkedin.com/posts/activity-7080843606109863936-eMHp?utm_source=share&utm_medium=member_desktop"
        },
        {
          name: "Projects ",
          url: "https://github.com/sakshib-b/EC20-token-"
        }
      ]
    },

    {
      title: "Certificate of merit in undergraduation degree",
      subtitle:
        " ",
     image: require("static/media/srhu logo.876db7e1db92d5652344.webp"),
      imageAlt: "University",
      footerLink: [
        {
          name: "Merit Certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Extra Curriculum activites ",
      subtitle: "Activities",
      image: require("/workspaces/sakshib-b/developerFolio/src/assets/images/EC.webp"),
      imageAlt: "Logo",
      footerLink: [
        {name: "Certification", url: ""},
       /* {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }*/
      ]
    }

  
  ],
  display: true// Set false to hide this section, defaults to true
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
