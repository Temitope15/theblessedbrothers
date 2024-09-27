import { MdHome, MdPhone, MdEmail, MdInfo, MdBuild } from 'react-icons/md';

export const links = [
  { name: 'Home', href: '#', icon: MdHome },
  { name: 'About', href: '#about', icon: MdInfo },
  { name: 'Services', href: '#services', icon: MdBuild },
  { name: 'Contact', href: '#contact', icon: MdPhone },
];

export const socialMediaLinks = [
  { name: 'Phone', href: 'tel:+123456789', icon: MdPhone },
  { name: 'Email', href: 'mailto:contact@brandname.com', icon: MdEmail },
];

export const footerContacts = [
  {
    title: "Address",
    value: "1847, Medford Avenue Indianapolis, IN, USA",
    link: "https://maps.app.goo.gl/uGGmR8W3khjCUosN7",
    isExternal: true,
  },
  {
    title: "Phone Number",
    value: "+18045025865",
    link: "tel:+18045025865",
    isExternal: false,
  },
  {
    title: "Email Address",
    value: "blessedbrothers21@yahoo.com",
    link: "mailto:blessedbrothers21@yahoo.com",
    isExternal: true,
  },
];
