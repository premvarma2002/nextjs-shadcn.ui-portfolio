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
    path: "https://www.instagram.com/premvarma.dev",
    name: <RiInstagramFill />,
  },
  {
    path: "https://github.com/premvarma2002",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/realpremvarma",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://www.youtube.com/channel/UCRRKb78GweCVgbb-7aqM7Zg",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/premvarma2002",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
