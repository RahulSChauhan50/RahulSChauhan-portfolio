"use client";

import { motion } from "framer-motion";

import { slideInFromTop } from "../../lib/motion";

export const Encryption = () => {
  return (
    <div
      className="flex flex-col relative items-center justify-center min-h-screen w-full h-full"
      id="experience"
    >
      <div className=" w-auto h-auto top-0 z-[5] mb-10">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>{" "}
        </motion.div>
      </div>

      <div className="container mx-auto">
        <table className="min-w-full ">
          <tbody>
            <tr className="w-full  ">
              <td className="px-6 py-4 border-r border-white text-white text-right w-1/2">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    SDE2
                  </div>
                  <div className="text-base">Voosh</div>
                  <div className="text-sm">May 2023 to Present</div>
                  <div className="text-xs ">
                    Implemented various performance optimizations in a web
                    application, achieving a 50% reduction in page load times,
                    enhancing user experience with faster and smoother browsing.
                    .Developed a CI/CD pipeline for automatic code deployment on
                    Firebase, enabling continuous updates and reducing
                    deployment time by 30%. .Developed dynamic data insertion
                    and PDF file creation features using NodeJS and Google Docs
                    APIs.Created RESTful API endpoints to facilitate frontend
                    data consumption. .Established a CI/CD pipeline for
                    automatic backend deployment on EC2 instances using AWS
                    CodeDeploy, reducing deployment time by 80% and ensuring
                    consistent and reliable deployments. .Configured
                    auto-scaling and load balancing with EC2 Services, resulting
                    in a 50% increase in concurrent user capacity and improved
                    system performance during peak traffic periods. .Developed
                    and implemented server-side automation for AI-driven
                    automatic replies to user reviews on Google and Yelp,
                    enhancing customer engagement and reducing reply time by up
                    to 90%.
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  text-white"></td>
            </tr>
            <tr className="w-full  ">
              <td className="px-6 py-4 border-r border-white text-white text-right"></td>
              <td className="px-6 py-4  text-white w-1/2">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    SDE1
                  </div>
                  <div className="text-base">Voosh</div>
                  <div className="text-sm">Jan 2022 to Apr 2023</div>
                  <div className="text-xs ">
                    Developed a cross-platform food ordering application for
                    Android and iOS, providing a seamless user experience and
                    serving over 1000+ users. .Integrated Google services
                    including Firebase, Maps for location-based services, and
                    Notifications for timely updates. .Successfully deployed the
                    application on the Google Play Store, achieving over 10,000
                    downloads within the first three months of launch.
                    .Implemented Redux for efficient state management, ensuring
                    data consistency and improving application performance by
                    30%. .Created beautiful UI components using Material Design
                    principles.
                  </div>
                </div>
              </td>
            </tr>
            <tr className="w-full  ">
              <td className="px-6 py-4 border-r border-white text-white text-right w-1/2">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    React Native(Intern)
                  </div>
                  <div className="text-base">
                    {" "}
                    Analytics Valley Technology Private Limited
                  </div>
                  <div className="text-sm">Dec 2021 to Jan 2022</div>
                  <div className="text-xs ">
                    Proficient in designing and implementing visually appealing
                    UI components in React Native, enhancing user experience.
                    Skilled in seamlessly integrating backend REST APIs with
                    React Native applications for efficient data handling.
                    Experienced in debugging and resolving issues in React
                    Native applications to ensure smooth and reliable operation.
                  </div>
                </div>
              </td>
              <td className="px-6 py-4  text-white"></td>
            </tr>
            <tr className="w-full  ">
              <td className="px-6 py-4 border-r border-white text-white text-right"></td>
              <td className="px-6 py-4  text-white w-1/2">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    React Native(Intern)
                  </div>
                  <div className="text-base">Organic Tap</div>
                  <div className="text-sm">June 2021 to Nov 2021</div>
                  <div className="text-xs ">
                    Developed Android and iOS applications for local farmers to
                    sell products online. Integrated with REST APIs for backend
                    communication. Implemented location services using Google
                    Maps. Utilized Redux for efficient state management.
                    Integrated Material UI components, adhering to design
                    guidelines for enhanced user experience.
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
