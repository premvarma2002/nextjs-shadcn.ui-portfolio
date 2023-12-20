"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: '/' ,
    name: <RiInstagramFill/>,
  },
  {
    path: '/' ,
    name: <RiGithubFill/>,
  },
  {
    path: '/' ,
    name: <RiTwitterXFill/>,
  
  },
  {
    path: '/' ,
    name: <RiYoutubeFill/>,
  },
  {
    path: '/' ,
    name: <RiLinkedinFill/>,
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return <div className={`${containerStyles}`}>
    {icons.map((icon ,index)=>{
      return <Link href={icon.path} key={index}>
      <div className={`${iconsStyles}`}>{icon.name}</div></Link>
    })}
  </div>;
};

export default Socials;
