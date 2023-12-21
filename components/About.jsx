import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs , TabsContent , TabsList , TabsTrigger } from "./ui/tabs"

import {
    User2,
    MailIcon,
    HomeIcon,
    Phonecall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Rayn Davis',
    },
    {
        icon: <Phonecall size={20}/>,
        text: '+91 951 187 2298',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'vakilverma1982@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 18th Sep , 2002',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Master on Computer Applications',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Warur road, Rajura ,Maharashtra , India ',
    },
];

const qualificationData = [
    {
        title:'education',
        data: [
            {
                university: 'The New Era English High School ,Rajura',
                qualification: 'S.S.C',
                years:'2008 - 2018',
            },
            {
                university: 'Guru nanak college of science , Ballarpur',
                qualification: 'H.S.C',
                years:'2018 - 2020',
            },
            {
                university: 'Guru nanak College of Science',
                qualification: 'Bachelor of Science',
                years:'2020 - 2023',
            },
            {
                university: 'LPU University',
                qualification: 'Master of Computer Applications',
                years:'2024 - Present',
            },
            // {
            //     university: 'IIT Patna',
            //     qualification: 'M.Tech in Cloud Computing',
            //     years:'2026- 2028',
            // },
        ]
    },

    {
        title:'experience',
        data: [
        {
            company: 'InternPe',
            qualification: 'Web Development intern',
            years:'2022-2023',
        },
        {
            company: 'Upwork',
            qualification: 'Web developer',
            years:'2023 - Present',
        },  
],
    },
];

const skillData = [
    {
        title: 'skills',
        data:[
            {
              name: 'HTML , CSS, JavaScript , React with Redux,Redux Toolkit , Next , Typescript ,Tailwind , Sass Css , Material UI , Bootstrap, and others' 
            },
            {
              name: 'Frontend Development' 
            },
            {
              name: 'JavaScript, Typescript ,Tailwind , Sass CSS ' 
            },
            {
              name: 'React with Redux,Redux Toolkit , Next ,Material UI , Bootstrap, and others ' 
            }
        ]
    },
    {
        title: 'tools',
        data:[
            {
              imgPath: '/about/vscode.svg'
            },
            {
              imgPath: '/about/Figma.svg'
            },
            {
              imgPath: '/about/github.svg'
            },
            {
              imgPath: '/about/terminal.svg'
            },
            {
              imgPath: '/about/redux.svg'
            },
        ]
    }
  ];


const About = () => {
 const getData = (arr, title) => {
    return arr.find((item)=> item.title === title);
 };
 console.log(getData(qualificationData , 'experience'))
  return (
    <section>
        <div className="container mx-auto">
            <h2 className="section-title mv-8 xl:mb-16 text-center mx-auto">About me</h2>
        </div>
    </section>
  )
}

export default About