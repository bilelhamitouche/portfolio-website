type Props = {};

function Hero({}: Props) {
  return (
    <section className="min-h-full hero">
      <div className="flex-col w-full max-w-screen-lg lg:flex-row-reverse lg:justify-between hero-content">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Bilel Hamitouche</h1>
          <p className="py-6 max-w-md">
            I'm a full-stack software developer passionate about crafting
            seamless digital experiences. I use a variety of frameworks and
            technologies to build responsive, user friendly web applications.
            Whether it's intuitive frontends or backend systems, I thrive on
            bringing ideas to life.
          </p>
          <button className="btn btn-primary">Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
