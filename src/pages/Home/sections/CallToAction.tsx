import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
        <p className="text-lg mb-8">
          Join us in supporting innovative founders and their businesses.
          Whether you’re looking to invest, mentor, or collaborate, we’d love to
          have you on board.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Invest/Collaborate/Mentor Button */}
          <a
            href="mailto:contact@founders.com"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Invest, Collaborate, or Mentor
          </a>
          {/* Attend Demo Day Button */}
          <a
            href="#signup"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Attend Demo Day
          </a>
        </div>

        {/* Testimonial or Quote */}
        <div className="mt-12 max-w-xl mx-auto italic text-lg">
          <blockquote>
            "This accelerator gave me the tools and connections to take my
            business to new heights. I highly recommend getting involved!"
          </blockquote>
          <p className="text-right mt-4">- John D., Founder of SustainPro</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
