import AboutUs from "../components/AboutUs/AboutUs";

const teamMembers = [
  {
    name: "Mauricio Gunsett",
    role: "Executive Chef",
    description:
      "With more than 15 years of experience in gourmet cooking. Lover of fresh and high quality ingredients.",
    imageUrl:
      "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
  },
  {
    name: "Enzo Iñigo",
    role: "Sommelier",
    description:
      "Expert for the best pairings. With a deep background in wines and spirits, my passion is helping customers discover new flavors and combinations.",
    imageUrl:
      "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-female-5.png",
  },
  {
    name: "Canepa Fabricio",
    role: "Pastelero",
    description:
      "Creative specialized in artisanal desserts. With an artistic touch, unique and delicious sweets that combine traditional techniques with a modern style.",
    imageUrl:
      "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-4.png",
  },
];

const AboutUsView = () => {
  return (
    <section className="secAboutUs">
      {teamMembers.map((member, index) => (
        <AboutUs
          key={index}
          name={member.name}
          role={member.role}
          description={member.description}
          imageUrl={member.imageUrl}
        />
      ))}
    </section>
  );
};

export default AboutUsView;
