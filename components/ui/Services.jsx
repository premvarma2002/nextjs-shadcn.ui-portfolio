import { Wand2, MonitorSmartphone, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Reveal, Stagger, StaggerItem, Tilt, Float } from "../animations/Motion";

const servicesData = [
  {
    icon: <Wand2 size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "I create beautiful and functional web designs for your brand and vision ",
  },
  {
    icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I build fast and secure web applications, using the latest tools and technologies. ",
  },
  {
    icon: <Smartphone className="  " size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "I develop high-quality native and cross-platform apps for iOS and Android, using the best practices and frameworks.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <Reveal>
          <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
            My Services
          </h2>
        </Reveal>
        {/* grid items  */}
        <Stagger className="grid xl:grid-cols-3 justify-items-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <StaggerItem className="w-full max-w-[424px]" key={index}>
                <Tilt max={8}>
                  <Card className="group w-full h-[300px] flex flex-col pt-16 pb-18 justify-center items-center relative hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300">
                    <CardHeader className="text-primary absolute -top-[60px]">
                      <Float amplitude={8} duration={4} delay={index * 0.5}>
                        <div className="w-[140px] h-[90px] bg-white dark:bg-background flex justify-center items-center group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </Float>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="mb-4 group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Tilt>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Services;
