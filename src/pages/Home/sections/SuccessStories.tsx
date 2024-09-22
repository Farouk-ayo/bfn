import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";

// Dummy Data for Success Stories
const successStories = [
  {
    name: "Isdora N.",
    business: "TechForGood",
    before: "Struggling to scale operations and gain investor interest.",
    after: "Tripled revenue and secured $1M in Series A funding.",
    achievements: [
      {
        text: "Revenue tripled",
        icon: <FaRocket className="text-green-500" />,
      },
      {
        text: "Secured $1M funding",
        icon: <FaCheckCircle className="text-blue-500" />,
      },
      {
        text: "Added 5 new team members",
        icon: <FaUsers className="text-yellow-500" />,
      },
    ],
    video: "https://via.placeholder.com/200x200", // Placeholder for video snippet
    quote:
      "The accelerator gave me the mentorship and resources I needed to push my business to the next level.",
  },
  {
    name: "Amina B.",
    business: "GreenLife Solutions",
    before: "Limited market traction and unclear product-market fit.",
    after:
      "Launched a new product line that doubled customer base in 6 months.",
    achievements: [
      {
        text: "Doubled customer base",
        icon: <FaUsers className="text-blue-500" />,
      },
      {
        text: "Launched new product line",
        icon: <FaRocket className="text-green-500" />,
      },
    ],
    video: "https://via.placeholder.com/200x200", // Placeholder for video snippet
    quote:
      "Thanks to the accelerator, I was able to pivot quickly and find a product-market fit that worked.",
  },
  {
    name: "John D.",
    business: "SustainPro",
    before: "Facing issues in scaling production and reaching new markets.",
    after: "Expanded to 3 new countries and increased production by 50%.",
    achievements: [
      {
        text: "Expanded to 3 countries",
        icon: <FaRocket className="text-green-500" />,
      },
      {
        text: "Increased production by 50%",
        icon: <FaCheckCircle className="text-blue-500" />,
      },
    ],
    video: "https://via.placeholder.com/200x200", // Placeholder for video snippet
    quote:
      "This program gave me access to top-notch mentors who guided me through crucial growth stages.",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
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
                {/* Video or Image */}
                <div className="lg:w-1/3 w-full flex justify-center">
                  <div className="w-64 h-64 bg-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={story.video} // Placeholder for the video thumbnail or image
                      alt={`${story.name} testimonial`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Founder Story Content */}
                <div className="lg:w-2/3 w-full">
                  <h3 className="text-2xl font-bold mb-4">
                    {story.name} – {story.business}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Before:</strong> {story.before}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>After:</strong> {story.after}
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-2 gap-4 my-4">
                    {story.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        {achievement.icon}
                        <span className="text-gray-700">
                          {achievement.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="italic text-gray-500">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Meet All Founders
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
