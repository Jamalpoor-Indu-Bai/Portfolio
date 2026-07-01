import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";

import { contact } from "../constants/contact";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "email":
        return <FaEnvelope className="text-2xl text-emerald-400" />;

      case "phone":
        return <FaPhoneAlt className="text-2xl text-emerald-400" />;

      case "location":
        return <FaMapMarkerAlt className="text-2xl text-emerald-400" />;

      default:
        return null;
    }
  };

  const getLink = (item) => {
    switch (item.title.toLowerCase()) {
      case "email":
        return `mailto:${item.value}`;

      case "phone":
        return `tel:${item.value}`;

      default:
        return item.value;
    }
  };

  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionTitle
          title="Contact Me"
          subtitle="Let's Work Together"
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div className="space-y-6">
            {contact.map((item) => (
              <Card
                key={item.id}
                className="flex items-center gap-5"
              >
                {getIcon(item.title)}

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  {item.title === "Location" ? (
                    <p className="mt-1 text-gray-400">
                      {item.value}
                    </p>
                  ) : (
                    <a
                      href={getLink(item)}
                      target={
                        item.title === "LinkedIn"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.title === "LinkedIn"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-1 block text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Right Side */}

          <Card>
            <h3 className="text-2xl font-semibold text-white">
              Send a Message
            </h3>

            <p className="mt-2 text-gray-400">
              Feel free to reach out for collaborations,
              internships, or just to say hello.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500 resize-none"
                ></textarea>
              </div>

              <Button
                text="Send Message"
                variant="primary"
              />
            </form>
          </Card>

        </div>
      </Container>
    </section>
  );
};

export default Contact;