import { sendForm } from "@emailjs/browser";
import { useRef } from "react";

interface Props {}

function Contact({}: Props) {
  const form = useRef<HTMLFormElement>(null);
  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    if (form.current) {
      sendForm("service_x21v0et", "template_597xh8c", form.current, {
        publicKey: "HLfwN7M4PB_PochEg",
      })
        .then(() => console.log("Success"))
        .catch(() => console.log("Failure"));
    }
  }
  return (
    <section
      className="container flex flex-col gap-16 items-center mx-auto max-w-md"
      id="contact">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <form
        ref={form}
        className="flex flex-col gap-4 w-full"
        onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          className="rounded-lg input-md input-bordered input"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          className="rounded-lg input-md input-bordered input"
        />
        <textarea
          name="message"
          className="textarea textarea-bordered"
          placeholder="Enter message"></textarea>
        <button
          type="submit"
          className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
