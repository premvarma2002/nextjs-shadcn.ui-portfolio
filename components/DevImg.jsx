import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} relative`}>
      <Image
        src={imgSrc}
        alt="Developer illustration"
        fill
        priority
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               530px"
        className="object-contain"
      />
    </div>
  );
};

export default DevImg;
