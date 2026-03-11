import profileImage from "../assets/images/profile.jpg";
import { calculateAge } from "../helpers/autoAge";

const About = () => {
  const age = calculateAge(2004, 4, 1);

  return (
    <div className="min-h-screen py-5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="flex items-center justify-center text-white shadow-2xl h-1/2 rounded-2xl text-8xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="flex flex-col mt-10 space-y-4">
            <h2 className="mb-6 text-3xl font-bold text-white">About me</h2>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Hi! I'm a Full-Stack Developer with over 1 year of experience in
                developing web applications. I am passionate about learning new
                technologies and always looking for creative ways to solve
                complex problems.
              </p>
              <p className="leading-relaxed">
                My expertise includes React, Node.js, MySQL, and cloud
                technologies like AWS. I have experience working with both
                startups and large companies, from building MVPs to scaling
                systems serving millions of users.
              </p>
              <p className="leading-relaxed">
                Besides coding, I enjoy reading technology books, writing blogs
                to share knowledge, and participating in developer community
                activities. I believe that sharing knowledge helps the entire
                community grow stronger.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="../../Hoang-Dinh-Hoan.pdf"
                target="_blank"
                className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105"
              >
                <i className="pi pi-download"></i>
                <span>Download CV</span>
              </a>
              <a
                href="mailto:hoanghoanpineapple04@gmail.com?subject=Liên hệ từ trang web&body=Xin chào, tôi muốn liên hệ với bạn."
                className="flex items-center px-6 py-3 space-x-2 font-semibold text-blue-400 transition-all duration-300 transform border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:scale-105"
              >
                <i className="pi pi-envelope"></i>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          <div className="p-8 border bg-slate-800 rounded-xl border-slate-700">
            <h3 className="flex items-center mb-6 space-x-2 text-2xl font-bold text-white">
              <i className="text-purple-400 pi pi-info-circle"></i>
              <span>Personal Information</span>
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Full Name:</span>
                <span className="text-white">Hoàng Đình Hoàn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Age:</span>
                <span className="text-white">{age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Address current:</span>
                <span className="text-white">
                  1002 Ta Quang Buu, ward 6, District 8, Ho Chi Minh City
                </span>
              </div>{" "}
              <div className="flex justify-between">
                <span className="text-gray-400">Address (New):</span>
                <span className="text-white">
                  1002 Ta Quang Buu, ward Binh Dong, Ho Chi Minh City
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-white">
                  hoanghoanpineapple04@gmail.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Phone:</span>
                <span className="text-white">+84 377 984 957</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Languages:</span>
                <span className="text-white">VietNamese, English</span>
              </div>
            </div>
          </div>

          <div className="p-8 border bg-slate-800 rounded-xl border-slate-700">
            <h3 className="flex items-center mb-6 space-x-2 text-2xl font-bold text-white">
              <i className="text-pink-400 pi pi-heart"></i>
              <span>Hobbies</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Coding", icon: "pi-code" },
                { name: "Listening to Music", icon: "pi-headphones" },
                { name: "Traveling", icon: "pi-map" },
                { name: "Photography", icon: "pi-camera" },
                { name: "Football", icon: "pi-heart-fill" },
                { name: "Badminton", icon: "pi-heart-fill" },
              ].map((hobby) => (
                <div
                  key={hobby.name}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <i className={`pi ${hobby.icon} text-purple-400`}></i>
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            My development journe
          </h2>
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-linear-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2025",
                  title: "Intern Full-Stack Developer",
                  company: "APE TECH Solutions",
                  description:
                    "Participated in developing web and mobile application projects.",
                  side: "right",
                },
                {
                  year: "2022",
                  title: "Studied at Saigon University",
                  company: "Faculty of Information Technology",
                  description: "Major in Software Engineering.",
                  side: "left",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    item.side === "left" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      item.side === "left" ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="p-6 transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:bg-slate-700">
                      <div className="mb-2 font-semibold text-purple-400">
                        {item.year}
                      </div>
                      <h3 className="mb-1 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <div className="mb-2 font-medium text-gray-300">
                        {item.company}
                      </div>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="w-4 h-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500"></div>
                    <div className="absolute w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
