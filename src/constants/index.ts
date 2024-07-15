import { title } from "process";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
  RxPerson,
} from "react-icons/rx";
import skillIcon from "../assets/skills/skillsIcon";
import blogIcon from "../assets/blogs/blogIcon";
import projectIcon from "../assets/projects/projectIcon";

export const SKILL_DATA = [
  {
    skill_name: "ReactNative",
    image: skillIcon.reactnative,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: skillIcon.redux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Android Studio",
    image: skillIcon.androidStudio,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Xcode",
    image: skillIcon.xcode,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: skillIcon.java,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kotlin",
    image: skillIcon.kotlin,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Typescript",
    image: skillIcon.ts,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: skillIcon.js,
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/rahul-s-chauhan-005223199/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/RahulSChauhan50",
  },
  {
    name: "Mail",
    icon: RxEnvelopeClosed,
    link: "mailto:rahulschauhan50@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: skillIcon.html,
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: skillIcon.css,
    width: 80,
    height: 80,
  },

  {
    skill_name: "Figma",
    image: skillIcon.figma,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Git",
    image: skillIcon.git,
    width: 80,
    height: 80,
  },

  {
    skill_name: "Firebase",
    image: skillIcon.firebase,
    width: 60,
    height: 60,
  },
  {
    skill_name: "React",
    image: skillIcon.react,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Vite",
    image: skillIcon.vite,
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: skillIcon.node,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: skillIcon.express,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Graphql",
    image: skillIcon.graphql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: skillIcon.mongodb,
    width: 40,
    height: 40,
  },

  {
    skill_name: "PostgreSQL",
    image: skillIcon.postgresql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: skillIcon.mysql,
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Python",
    image: skillIcon.python,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cpp",
    image: skillIcon.cpp,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: skillIcon.docker,
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: skillIcon.aws,
    width: 80,
    height: 80,
  },
  {
    skill_name: "DevOps",
    image: skillIcon.devops,
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Accidental Alert System(AAS)",
    description: `Accidental Alert System (AAS) is a SIH 2020 project aimed at providing better and faster emergency care during accidents and vehicle impact situations.
 Backend is used to analyse readings from device using Machine Learning Model and also sends 
 Alert signal(Notification) to Android APP and website.
 The Android APP includes various features such as Real-Time Vehicle Location tracking, Fuel Level Indicator, Driver and Vehicle owner information and Emergency Alert whenever an accident occurs.
 Website is also available for accessing various Vehicle Information and accident related data when user Logs in.`,
    image: projectIcon.aasProject,
    link: "https://github.com/BlackHat-org/RA25_BlackHat_WIMDR",
  },
  {
    title: "Shop",
    description: `
A Shopping Website project created with ,ReactNative(Android) ,React.js ,Node.js ,Rest API ,MongoDB 
which includes Website as well as Android app for Clients and Users.`,
    image: projectIcon.shopProject,
    link: "https://github.com/Team-AlphaBits/Shop.git",
  },
  {
    title: "RoverChat",
    description:
      "Chatting Web Application built using React.js as frontend and using express as backend with WebSocket integration for real-time updates of new data.",
    image: projectIcon.roverchatProject,
    link: "https://github.com/RahulSChauhan50/RoverChat",
  },
  {
    title: "AirInfo",
    description: `Android application built using React Native,node.js and redux.
Gives info about air quality in a city based on user location or search query.`,
    image: projectIcon.airinfoProject,
    link: "https://github.com/RahulSChauhan50/AirInfo",
  },
  {
    title: "AceData",
    description: `Product delivery confirmation native android app.
Application has several features such as - 
❭ Capturing image of delivery location with it's exact coordinate and address written as watermark in image.
❭ Form that includes field for various information related to delivery and address.
❭ Automatic filling of address using reverse geocoding.
❭ Displays list of all past deliveries.
❭ Backend integrated.`,
    image: projectIcon.acedataProject,
    link: "https://github.com/RahulSChauhan50/AceData",
  },
] as const;

export const BLOGS = [
  {
    title:
      "Automating Blue/Green Deployments on AWS EC2 Using CodeDeploy and GitHub Actions",
    description: `Blue/Green Deployment is a strategy to minimize downtime and reduce risks when deploying new versions of applications.
In a Blue/Green Deployment, you have two identical environments: Blue and Green. At any given time, only one of these environments is live (receiving traffic). The idea is to switch traffic from the old version (Blue) to the new version (Green) with minimal downtime and risk.`,
    image: blogIcon.awsCodeDeploy,
    link: "https://medium.com/@rahulschauhan50/automating-blue-green-deployments-on-aws-ec2-using-codedeploy-and-github-actions-86a80783c49a",
  },
  {
    title:
      "Auto-Deploy Web Apps on Firebase with GitHub Actions: Multi-Site Configuration Guide",
    description: `Building Features is a Blast, But Staring at Build and Deployment Screens is a Snooze Fest.Automate the Process with GitHub Actions and Firebase, and Get Back to the Fun Stuff!`,
    image: blogIcon.fireBaseGithub,
    link: "https://medium.com/@rahulschauhan50/auto-deploy-web-apps-on-firebase-with-github-actions-multi-site-configuration-guide-b296d4ae3d85",
  },
  {
    title: "How to use Redux with ReactNative?",
    description: `A simple guide to use Redux with ReactNative.`,
    image: blogIcon.reduxReactnative,
    link: "https://www.geeksforgeeks.org/how-to-use-redux-with-reactnative/",
  },
  {
    title: "How to optimize React component to render it ?",
    description: `A simple guide to optimize React component to render it.`,
    image: blogIcon.reactOptimize,
    link: "https://www.geeksforgeeks.org/how-to-optimize-react-component-to-render-it/",
  },
  {
    title: "Multi-Language support in React Native",
    description: `A simple guide to add multi-language support in React Native.`,
    image: blogIcon.multi_language,
    link: "https://www.geeksforgeeks.org/multi-language-support-in-react-native/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/RahulSChauhan50",
      },
      {
        name: "Medium",
        icon: RxPerson,
        link: "https://medium.com/@rahulschauhan50",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/rahul-s-chauhan-005223199/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: RxEnvelopeClosed,
        link: "mailto:rahulschauhan50@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Articles",
    link: "#article",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;
