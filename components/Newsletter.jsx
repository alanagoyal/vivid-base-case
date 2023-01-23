import { useState } from "react";
import axios from "axios";

import { NewsletterSpheres } from "../svg/NewsletterSpheres";

// Built with Vivid (https://vivid.lol) ⚡️

const Background = () => (
  <div
    className="absolute bottom-0 right-0 hidden pointer-events-none md:block"
    aria-hidden="true"
  >
    <NewsletterSpheres />
  </div>
);

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
    </section>
  );
};
