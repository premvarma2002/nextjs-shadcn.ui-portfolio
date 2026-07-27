"use client";

import DevImg from "./DevImg";
import Image from "next/image";
import { skills } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {Button, Tooltip } from '@nextui-org/react';
import { motion } from "framer-motion";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Prem Varma",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9511 872 298",
  },
  {
    icon: <MailIcon size={20} />,
    text: "vakilverma1982@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 18th Sep , 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Computer Applications",
  },
  {
    icon: <HomeIcon size={20} />,
    text: " Rajura ,Maharashtra , India ",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "The New Era English High School ,Rajura",
        qualification: "S.S.C",
        years: "2008 - 2018",
      },
      {
        university: "Guru nanak college of science , Ballarpur",
        qualification: "H.S.C",
        years: "2018 - 2020",
      },
      {
        university: "Guru nanak College of Science",
        qualification: "B.SC Computer Science",
        years: "2020 - 2023",
      },
      // {
      //   university: "LPU University",
      //   qualification: "Master of Computer Applications",
      //   years: "2024 - Present",
      // },
      // {
      //     university: 'IIT Patna',
      //     qualification: 'M.Tech in Cloud Computing',
      //     years:'2026- 2028',
      // },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Upwork",
        role: "Freelance Web developer",
        years: "2022 - 2023",
      },

      {
        company: "Codewoofer.in",
        role: "Blogger",
        years: "Jul 2023 - Sep 2023 ",
      },
      {
        company: "Makku Enterprises Pvt Ltd",
        role: "ReactJS Developer",
        years: "June 2024 - May 2025",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML , CSS, JavaScript ",
      },
      {
        name: "React , Next , Bootstrap",
      },
      {
        name: "Typescript ,Tailwind , Sass CSS ",
      },
      {
        name: "Redux, MUI , shadcn-UI, Prisma ",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/firebase.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  //  console.log(getData(qualificationData , 'experience'))
  return (
    <section className="xl:min-h-[860px] pb-12 pt-1 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image  */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/dev.png"
            />
          </div>
          {/* tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 2 years
                    </h3>
                    <p className="subtitle max-w-[490] max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages  */}
                    <div className="flex  flex-col gap-y-2">
                      <div className="text-primary">Languages Skill</div>
                      <div className="border-b border-border">
                        English , German , Hindi , Marathi
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-7">What I Use Everyday</h3>
                    {/* skills  */}
                    <div className="mb-16">
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List  */}
                      <div className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">

                      {skills.map((skill, index) => (
                        <motion.div 
                            className="w-20 h-20 relative" 
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8, y: 15 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            whileHover={{ scale: 1.15, rotate: 3, y: -5 }}
                        >
                            <Tooltip 
                                content={skill.name}
                                delay={0}
                                closeDelay={0}
                                className='border border-primary/20 bg-background text-foreground shadow-lg px-3 py-1.5 rounded-xl text-xs font-semibold'
                            >
                                <Button className="border bg-white/40 dark:bg-zinc-800/10 backdrop-blur-md border-neutral-200/50 dark:border-neutral-800/60 rounded-2xl flex justify-center items-center h-20 w-20 shadow-sm hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300" >
                                    <Image 
                                        src={skill.imageUrl}
                                        alt={skill.name} 
                                        className="w-12 h-12 object-contain filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                                        width={48}
                                        height={48}
                                        />
                                </Button>
                            </Tooltip>
                        </motion.div>
                      ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
