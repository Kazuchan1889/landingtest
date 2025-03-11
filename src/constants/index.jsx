import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#Feature" },
  { label: "Workflow", href: "#Work" },
  { label: "Pricing", href: "#Price" },
  { label: "Testimonials", href: "#Test" },
];

export const testimonials = [
  // {
  //   user: "John Doe",
  //   company: "Stellar Solutions",
  //   image: user1,
  //   text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  // },
  // {
  //   user: "Jane Smith",
  //   company: "Blue Horizon Technologies",
  //   image: user2,
  //   text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  // },
  // {
  //   user: "David Johnson",
  //   company: "Quantum Innovations",
  //   image: user3,
  //   text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  // },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec nec sem et elit malesuada vehicula. Sed vitae sapien non mi pharetra interdum.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel justo euismod, gravida erat vel, tincidunt ligula.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Curabitur tristique metus vel ipsum sodales, a dictum metus pellentesque. Nam sit amet nibh vel nisl faucibus feugiat in eget metus.",
  }

];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Blockchain Solutions",
    description:
      "Empower businesses with enterprise blockchain infrastructure, decentralized identity (DID), tokenization platforms, CBDC & stablecoin solutions, and smart contracts development.",
  },
  {
    icon: <Fingerprint />,
    text: "AI / ML / DL",
    description:
      "Leverage AI-powered fraud detection, predictive analytics, NLP, virtual assistants, robotic process automation (RPA), and AI-driven cybersecurity solutions for intelligent automation.",
  },
  {
    icon: <ShieldHalf />,
    text: "Security",
    description:
      "Enhance security with DDoS protection, zero-trust architecture, ethical hacking, endpoint detection, firmware security, and database encryption.",
  },
  {
    icon: <BatteryCharging />,
    text: "Core Banking & ATM Management",
    description:
      "Optimize banking operations with digital core banking, ATM monitoring, multivendor support, security management, and electronic journal tracking.",
  },
  {
    icon: <PlugZap />,
    text: "Risk & Fraud Management",
    description:
      "Implement fraud management systems, anti-money laundering (AML) solutions, operational risk management, and IT risk assessment.",
  },
  {
    icon: <GlobeLock />,
    text: "Payments & Digital Banking",
    description:
      "Enable seamless transactions with acquiring, issuing, international payments, digital banking solutions, and mobile banking services.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
