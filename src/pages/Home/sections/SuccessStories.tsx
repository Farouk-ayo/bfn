import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const successStories = [
  {
    name: "Josh Lokko",
    business: "Statera",
    description:
      "Josh leveraged BFN’s Experts in Residence resource which helped fast-track the development of his product solution for the legal community.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-31-264x264.jpg",
    quote:
      "We’re now about a month away from launching our first version and have 7 law firms interested in trying our product.",
  },
  {
    name: "Amina Dan-Sule",
    business: "Zakar PhotoBooth",
    description:
      "Amina consulted with specialists in the BFN community and went on to develop an onboarding process and a working business model for Zakar Photobooth.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-7-264x264.jpg",
    quote:
      "We were able to formalize our onboarding approach and have validated our franchise model to fund the capital asset of $12,350 for each franchisee, which will be recovered within 1.5 to 2 years of operations.",
  },
  {
    name: "Olayemi Biaou",
    business: "Braid-EZ",
    description:
      "Olayemi joined the BFN Smart Start cohort with a business idea to reduce the average 7-hour process of hair braiding. By the end of the program, she developed a working prototype based on customer insights.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-3-264x264.jpg",
    quote:
      "BFN has boosted the progress of this project. I got in with a business idea, and I am leaving with a team and a physical prototype.",
  },
  {
    name: "Isdora Msigwa",
    business: "Nuru Health",
    description:
      "Sparked with a passion for healthcare innovation, Isdora was on a mission to build culturally-competent mental health support for Black communities. BFN equipped her with the necessary support for the next stage of her business.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-19-1-scaled-e1716309899525-264x264.jpg",
    quote:
      "We’ve built a talented and diverse team from just one person to five people, which has enriched our approach and strengthened our foundation as an early stage startup. We've also begun developing our prototype, allowing us to see our vision come to life.",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-lighter text-primary" id="success-stories">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Success Stories</h2>

        {/* Swiper Carousel for Success Stories */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay
          scrollbar={{ draggable: true }}
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Image */}
                <div className="lg:w-1/3 w-full flex justify-center">
                  <img
                    src={story.img} // Placeholder for the image
                    alt={`${story.name} testimonial`}
                    className="w-64 h-64 object-cover rounded-full"
                  />
                </div>

                {/* Founder Story Content */}
                <div className="lg:w-2/3 w-full pb-5">
                  <h3 className="text-2xl font-medium mb-4">
                    {story.name}{" "}
                    <span className="text-primary font-bold">
                      –@{story.business}
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-2">{story.description}</p>

                  {/* Quote with Background */}
                  <blockquote className="quote-bg italic text-primary2 relative z-10 px-10 py-4 ">
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
