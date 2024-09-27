import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const successStories = [
  {
    name: "Igbagbo Ajagunna",
    business: "CompCrafter",
    cohort: "Smart Start Cohort",
    description:
      "Igbagbo expanded her team, product offerings, and brand presence through the Smart Start Program. She interviewed senior HR professionals and over 60 employees in a process to refine CompCrafter. She hired new team members and developed the first iteration of CompCrafter. She also attended the Startupfest, where she pitched her startup and won $ 4,000.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-13-264x264.jpg",
    quote:
      "BFN has contributed so much for the development of CompCrafter. The startup workshops have been incredibly practical, giving us clear guidance on product development, customer discovery, marketing, fundraising, business models, and scaling, all of which helped shape our approach and strengthen our platform.",
  },
  {
    name: "Andre Smith",
    business: "Flip Academy",
    cohort: "Accelerate Cohort",
    description:
      "Andre received two personal awards, teamed up with a US-based co-founder, and hired professional talents to help with marketing his business. Also, his flagship mobile app, Flip & Floss, recorded a 100% increase in sales during the 2024 Accelerate program.",
    img: "https://i.ibb.co/K5Xcdv6/Andre-Smith.webp",
    quote:
      "The development of my venture has been greatly impacted by the support of the community, events, and mentorship programs. The feedback and insights gained from these experiences have been invaluable in shaping our approach to scaling Flip & Floss and expanding our reach.",
  },
  {
    name: "Derrick Raphael",
    business: "Avatist",
    cohort: "Accelerate Cohort",
    description:
      "Derrick transformed Avatist from a SaaS platform to an AI ecosystem that supports private and government businesses. To help transition to a fully-fledged AI platform, Avatist formed four new strategic partnerships and gained access to over 200,000 AI models.",
    img: "https://i.ibb.co/ysBrYMB/Derrick-Raphael.webp",
    quote:
      "BFN has contributed by allowing Avatist to be a startup perk for the UofT Entrepreneurship ecosystem. Getting to attend Startupfest in Montreal. I think the community events have been invaluable. I think having the support of Jon, Efosa, and Faizah has been great. I am very thankful.",
  },
  {
    name: "Chukwunonso Nwabufo",
    business: "One Drug",
    cohort: "Accelerate Cohort",
    description:
      "Through the Accelerate program, Chukwunonso refined One Drug’s market approach and gained global recognition for One Drug’s biotech device. Chukwunonso formed four strategic partnerships, received over $100,000 in funding, and was honored with two prestigious Canadian awards. In addition to these achievements, One Drug narrowed its target audience and expanded to US markets.",
    img: "https://i.ibb.co/s6pLZ2T/Chukwunonso-Nwaokorie-One-Drug.webp",
    quote:
      "The BFN community has been invaluable in our growth and development. We've built valuable connections with other entrepreneurs in our cohort who have become strong allies and mentors. Also, we had the opportunity to network with potential investors, expand our human resource capacity, and fine-tune our commercialisation strategy.",
  },
  {
    name: "Jonathon Bloomfield",
    business: "Edventive",
    cohort: "Accelerate Cohort",
    description:
      "Edventive started as an automation tool for teachers and had a two-man team. Through the Accelerate program, Jonathon refined Edventive into a comprehensive productivity platform for teachers, formed strategic partnerships with Ecampus Ontario and the University of Pennsylvania Graduate School of Education, and expanded his team to five. The next few months promise to be exciting for Jonathon as Edventive plans to launch in Canada’s Education sector.",
    img: "https://media.licdn.com/dms/image/v2/C5603AQFv0RgC-jxZzQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1583770426234?e=1732752000&v=beta&t=ob2NmCPl3nf7OSy-zunIP1xaDxoiQ29-havGZnOPl4c",
    quote:
      "The personalized guidance I've received in the past few months has been transformative. I find myself saying this every few months, but I feel like we're really at ground zero and that we're just getting started with the most exciting phase of being in business, specifically because of the help we received.",
  },
  {
    name: "Josh Lokko",
    business: "Statera",
    cohort: "Smart Start Cohort",
    description:
      "Josh leveraged BFN’s Experts in Residence resource which helped fast-track the development of his product solution for the legal community.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-31-264x264.jpg",
    quote:
      "We’re now about a month away from launching our first version and have 7 law firms interested in trying our product.",
  },
  {
    name: "Amina Dan-Sule",
    business: "Zakar PhotoBooth",
    cohort: "Smart Start Cohort",
    description:
      "Amina consulted with specialists in the BFN community and went on to develop an onboarding process and a working business model for Zakar Photobooth.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-7-264x264.jpg",
    quote:
      "We were able to formalize our onboarding approach and have validated our franchise model to fund the capital asset of $12,350 for each franchisee, which will be recovered within 1.5 to 2 years of operations.",
  },
  {
    name: "Olayemi Biaou",
    business: "Braid-EZ",
    cohort: "Smart Start Cohort",
    description:
      "Olayemi joined the BFN Smart Start cohort with a business idea to reduce the average 7-hour hair braiding process. By the end of the program, she had developed a working prototype built on customer insights.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-3-264x264.jpg",
    quote:
      "BFN has boosted the progress of this project. I got in with a business idea, and I am leaving with a team and a physical prototype.",
  },
  {
    name: "Isdora Msigwa",
    business: "Nuru Health",
    cohort: "Smart Start Cohort",
    description:
      "Sparked by a passion for healthcare innovation, Isdora was on a mission to build culturally competent mental health support for Black communities. BFN equipped her with the necessary support for the next stage of her business.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-19-1-scaled-e1716309899525-264x264.jpg",
    quote:
      "We’ve built a talented and diverse team from just one person to five people, which has enriched our approach and strengthened our foundation as an early-stage startup. We've also begun developing our prototype, allowing us to see our vision come to life.",
  },
  {
    name: "Honma Amadi",
    business: "Okeayo",
    cohort: "Smart Start Cohort",
    description:
      "Leveraging the BFN program, Honma expanded Okeayo's offerings from men's clothing to include women's fashion, significantly broadening its market reach. With BFN's network and support, Honma connected with a talented design team that was instrumental in revitalizing the brand's product development, quality, and marketing strategy. Okeayo is now poised to become a leading force in the global fashion industry.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-11-264x264.jpg",
    quote:
      "BFN has significantly contributed to the growth and development of my venture in several key ways. The workshops have been invaluable, providing expert insights into business foundations that have strengthened my understanding and approach.",
  },
  {
    name: "Toritse Tuedor",
    business: "Tivora Studios",
    cohort: "Smart Start Cohort",
    description:
      "Through the BFN program, Toritse has expanded Tivora Studios' offerings from sustainable packaging to a comprehensive suite of affordable, customizable product packaging solutions for small businesses.",
    img: "https://entrepreneurs.utoronto.ca/wp-content/uploads/2024/05/OMV-0502-BFN-37-264x264.jpg",
    quote:
      "Since joining BFN, Tivora Studios has changed a lot. One big change is that we're now focusing on understanding our customers better. We've been talking to a lot of retail business owners to learn more about their needs and challenges. This is taking some time, so we're planning to spend a few months gathering all the information we need to improve our solution.",
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-lighter text-primary" id="success-stories">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12">
          Success Stories
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay
          scrollbar={{ draggable: true }}
        >
          {successStories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-0">
                {/* Image */}
                <div className="lg:w-1/3 w-full flex justify-center">
                  <img
                    src={story.img} // Placeholder for the image
                    alt={`${story.name} testimonial`}
                    className="w-64 h-64 object-cover rounded-full"
                  />
                </div>

                {/* Founder Story Content */}
                <div className="lg:w-2/3 w-full pb-5 sm:px-10">
                  <h3 className=" text-xl sm:text-2xl font-medium mb-2">
                    {story.name}{" "}
                    <span className="text-xl sm:text-2xl text-primary font-bold">
                      –@{story.business}
                    </span>
                  </h3>
                  <p className=" text-gray-500 text-sm italic mb-2">
                    {story.cohort}
                  </p>
                  <p className="text-gray-600 mb-4 sm:mb-10 text-base sm:text-lg">
                    {story.description}
                  </p>

                  {/* Quote with Background */}
                  <blockquote className="quote-bg italic text-primary2 relative z-10 sm:px-10 py-4 text-base sm:text-lg ">
                    "{story.quote}"
                  </blockquote>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" w-full sm:w-3/4 px-4 sm:px-0 text-center m-auto mt-10 text-primary2">
        <p className="text-lg mb-6 font-semibold">
          Watch the recap video of the BFN program
        </p>
        <div className="relative overflow-hidden rounded-lg shadow-lg mb-10">
          <iframe
            className="w-full h-64 sm:h-96 lg:h-[540px] xl:h-[600px]"
            src="https://www.youtube.com/embed/TXNcNEV93T0"
            title="BFN Program Recap"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-lg mb-10">
          Click{" "}
          <a
            href="/interview-faizah-balogun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline font-semibold"
          >
            here
          </a>{" "}
          to read more about the 2024 program and how you can be ready to apply
          for the 2025 programs in this interview with{" "}
          <span>
            <a
              href="/interview-faizah-balogun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary underline font-semibold"
            >
              Faizah Balogun
            </a>
          </span>
          , BFN’s Program Coordinator.
        </p>
      </div>
    </section>
  );
};

export default SuccessStories;
