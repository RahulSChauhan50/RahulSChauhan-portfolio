import videoFile from "../../assets/videos/videosExport";
import { useState, useEffect, RefObject } from "react";

interface BlackHoleProps {
  scrollRef: RefObject<HTMLDivElement>;
}

export const BlackHole: React.FC<BlackHoleProps> = ({ scrollRef }) => {
  const [top, setTop] = useState(340);

  const handleScroll = (e: Object) => {
    setTop(top + e.target.scrollTop);
  };

  useEffect(() => {
    const parentElement = scrollRef.current;
    if (parentElement) {
      parentElement.addEventListener("scroll", handleScroll);
      return () => {
        parentElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <video
      autoPlay
      muted
      loop
      style={{ top: `-${top}px` }}
      className={`rotate-180 left-0 w-full h-full object-cover absolute`}
    >
      <source src={videoFile.blackhole} type="video/webm" />
    </video>
  );
};
