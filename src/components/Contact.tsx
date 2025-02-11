function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-12 items-center py-12 md:py-24 lg:py-32"
    >
      <h2 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
        Get In Touch
      </h2>
      <fieldset className="p-4 space-y-4 border fieldset w-sm border-base-300 rounded-box md:w-md lg:w-lg">
        <div>
          <label
            htmlFor="name"
            className="mb-1 text-sm label text-base-content"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full input focus:input-primary"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 text-sm label text-base-content"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full input focus:input-primary"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1 text-sm label text-base-content"
          >
            Message
          </label>
          <textarea
            className="w-full textarea focus:textarea-primary"
            name="message"
          ></textarea>
        </div>
        <button className="btn btn-primary">Send message</button>
      </fieldset>
    </section>
  );
}

export default Contact;
