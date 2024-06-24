import AboutUs from "../components/AboutUs/AboutUs";

const teamMembers = [
  {
    name: "Mauricio Gunsett",
    role: "Chef Ejecutivo",
    description:
      "Con más de 15 años de experiencia en la cocina gourmet. Amante de los ingredientes frescos y de alta calidad.",
    imageUrl:
      "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
  },
  {
    name: "Enzo Iñigo",
    role: "Sommelier",
    description:
      "Experto para los mejores maridajes. Con un profundo de vinos y licores, y mi pasión es ayudar a los clientes a descubrir nuevas y combinaciones de sabores.",
    imageUrl:
      "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-female-5.png",
  },
  {
    name: "Canepa Fabricio",
    role: "Pastelero",
    description:
      "Creativo especializado en postres artesanales. Con un toque artístico, dulces únicos y deliciosos que combinan técnicas tradicionales con un estilo moderno.",
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
