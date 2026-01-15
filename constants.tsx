
import React from 'react';
import { Briefcase, GraduationCap, MapPin, Mail, Phone, Globe, Award, Sparkles } from 'lucide-react';
import { ExperienceItem, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "Sunanda Dey",
  title: "Sustainable Tourism Designer & Sales Strategist",
  location: "Florence, Italy",
  email: "sunanda001dey@gmail.com",
  phone: "+39 331 441 9017",
  bio: "Currently pursuing a Master's in Sustainable Tourism at UniFi. I'm a traveler at heart and a strategist by trade, combining Italian flair with global tourism expertise.",
  about: "Master's student in Design of Sustainable Tourism Systems at the University of Florence, with a strong passion for innovative and eco-sustainable travel solutions. With strong experience in the tourism sector, I have developed skills in customer service, sales, and operations.",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "1",
    role: "Leisure Executive - Sales",
    company: "Zenith Holidays",
    location: "Kolkata, West Bengal",
    period: "Sept 2023 - May 2024",
    description: [
      "Sale of travel packages and services to clients.",
      "Customized consulting and achievement of sales targets."
    ]
  },
  {
    id: "2",
    role: "Travel Advisor",
    company: "Balmer Lawrie Co & Ltd",
    location: "Kolkata, West Bengal",
    period: "Sept 2022 - Sept 2023",
    description: [
      "Sales support and conversion of inquiries into bookings.",
      "Interface with suppliers and management of key accounts."
    ]
  },
  {
    id: "3",
    role: "Customer Service and Sales",
    company: "SOTC",
    location: "Kolkata, West Bengal",
    period: "June 2021 - Aug 2021",
    description: [
      "Response to customer requests.",
      "Providing information and resolving issues."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "e1",
    degree: "Master's in Tourism (Design of Sustainable Tourism Systems)",
    institution: "Università degli Studi di Firenze",
    location: "Florence, Tuscany",
    period: "Sept 2024 - Present",
    details: "Skills: design of sustainable tourism solutions, environmental impact analysis, cultural heritage management."
  },
  {
    id: "e2",
    degree: "Bachelor's in Tourism",
    institution: "Amity University",
    location: "Kolkata, West Bengal",
    period: "June 2019 - June 2022",
    details: "Skills: tourism business management, tourism marketing, tourism law, tourism economics."
  }
];

export const SKILLS = [
  "Customer Service", "Sales", "B2B", "Marketing", "Sustainable Tourism", "Hospitality Management", "Microsoft Office"
];

export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Italian", level: "Beginner" }
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
