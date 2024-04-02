import Section from "./Section";
import Heading from "./Heading";
import SkillCard from "./SkillCard";
import { FaPenAlt, FaStar, FaUserGraduate, FaUsers } from "react-icons/fa";

const SkillSection = () => {
  return (
    <Section className="bg-white">
      <Heading
        title="Our skills"
        description="Our main purpose is to provide our client with quality work, fast turn around and reasonable rate as always."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <SkillCard icon={<FaUsers />} figure={50} title="Total designers" />
        <SkillCard
          icon={<FaUserGraduate />}
          figure={200}
          suffix="+"
          title="Total clients"
        />
        <SkillCard
          icon={<FaPenAlt />}
          figure={2000}
          suffix="+"
          title="Projects done"
        />
        <SkillCard
          icon={<FaStar />}
          figure={100}
          suffix="%"
          title="Clients satisfaction"
        />
      </div>
    </Section>
  );
};
export default SkillSection;
