import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const successStories = [
  {
    name: "Josh Lokko",
    business: "Statera",
    description:
      "Josh leveraged BFN’s Experts in Residence resource which helped fast-track the development of his product solution for the legal community.",
    img: "https://via.placeholder.com/200x200", // Placeholder for image
    quote:
      "We’re now about a month away from launching our first version and have 7 law firms interested in trying our product.",
  },
  {
    name: "Amina Dan-Sule",
    business: "Zakar PhotoBooth",
    description:
      "Amina consulted with specialists in the BFN community and went on to develop an onboarding process and a working business model for Zakar Photobooth.",
    img: "https://via.placeholder.com/200x200", // Placeholder for image
    quote:
      "We were able to formalize our onboarding approach and have validated our franchise model to fund the capital asset of $12,350 for each franchisee, which will be recovered within 1.5 to 2 years of operations.",
  },
  {
    name: "Olayemi Biaou",
    business: "Braid-EZ",
    description:
      "Olayemi joined the BFN Smart Start cohort with a business idea to reduce the average 7-hour process of hair braiding. By the end of the program, she developed a working prototype based on customer insights.",
    img: "https://via.placeholder.com/200x200", // Placeholder for image
    quote:
      "BFN has boosted the progress of this project. I got in with a business idea, and I am leaving with a team and a physical prototype.",
  },
  {
    name: "Isdora Msigwa",
    business: "Nuru Health",
    description:
      "Sparked with a passion for healthcare innovation, Isdora was on a mission to build culturally-competent mental health support for Black communities. BFN equipped her with the necessary support for the next stage of her business.",
    img: "https://via.placeholder.com/200x200", // Placeholder for image
    quote:
      "We’ve built a talented and diverse team from just one person to five people, which has enriched our approach and strengthened our foundation as an early stage startup. We've also begun developing our prototype, allowing us to see our vision come to life.",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-lighter text-primary" id="success-stories">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Success Stories
        </h2>

        {/* Swiper Carousel for Success Stories */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Image */}
                <div className="lg:w-1/3 w-full flex justify-center">
                  <img
                    src={story.img} // Placeholder for the image
                    alt={`${story.name} testimonial`}
                    className="w-64 h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Founder Story Content */}
                <div className="lg:w-2/3 w-full">
                  <h3 className="text-2xl font-bold mb-4">
                    {story.name} – {story.business}
                  </h3>
                  <p className="text-gray-600 mb-2">{story.description}</p>

                  {/* Quote */}
                  <blockquote className="italic text-gray-500">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
