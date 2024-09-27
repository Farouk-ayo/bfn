import React from "react";
import {
  FaHandsHelping,
  FaEnvelopeOpenText,
  FaArrowRight,
} from "react-icons/fa"; // Importing relevant icons

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-light text-primary text-center flex flex-col gap-10 items-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Get Involved with BFN</h2>
        <p className="text-xl mb-6 text-black">
          Get involved with the impact at BFN. Join a thriving community of
          entrepreneurs, investors, and advocates in striving for the excellence
          of Black-owned businesses.
        </p>
        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contribute to BFN */}
          <div className="bg-white flex justify-center items-center flex-col p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaHandsHelping className="text-primary text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Contribute to BFN</h3>
            <p className="text-gray-700 mb-4">
              Volunteer as a mentor, advisor, or speaker
            </p>
            <a
              href="https://airtable.com/appRJdI32lTg60p4X/pagbTPCNOyXKA93Dp/form"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-primary text-white py-2 px-6 rounded-full hover:bg-secondary transition duration-300 flex items-center justify-center space-x-2 "
            >
              <span>Get in Touch</span>
              <FaArrowRight />
            </a>
          </div>

          {/* Stay Updated with BFN */}
          <div className="bg-white flex justify-center items-center flex-col p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <FaEnvelopeOpenText className="text-primary text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Stay Updated with BFN
            </h3>
            <p className="text-gray-700 mb-4">
              Don’t miss out on upcoming events, new cohorts, and key
              opportunities. Subscribe to our newsletter
            </p>
            <a
              href="https://utoronto.us11.list-manage.com/subscribe?u=ad3c2525429b8e70a82e3458b&id=7a8c24e279"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-primary text-white py-2 px-6 rounded-full hover:bg-secondary transition  duration-300 flex items-center justify-center space-x-2"
            >
              <span>Subscribe Now</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default CallToAction;
