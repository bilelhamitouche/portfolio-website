import AvatarImage from "../assets/avatar.svg";

function Hero() {
  return (
    <section
      className="container flex flex-col gap-16 py-16 px-4 mx-auto max-w-screen-lg md:flex-row"
      id="home">
      <div className="flex flex-col gap-4 justify-center items-center md:items-start md:w-1/2">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Hi, I'm Bilel Hamitouche
        </h1>
        <p className="text-center text-gray-400 md:text-left">
          I'm a fullstack developer based in Algeria. I love building websites
          and applications that everyone can use
        </p>
        <a
          href="/resume.pdf"
          download="/resume.pdf"
          className="py-1.5 px-6 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Download CV
        </a>
      </div>
      <div className="md:w-1/2">
        <img
          src={AvatarImage}
          alt="Avatar image"
          className="mx-auto w-1/2 md:w-80 md:h-96 lg:w-80 object-fit"
        />
      </div>
    </section>
  );
}

export default Hero;
