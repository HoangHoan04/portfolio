import { useTranslation } from "react-i18next";
import profileImage from "../assets/images/profile.jpg";
import { calculateAge } from "../helpers/autoAge";



const About = () => {
  const { t } = useTranslation();
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
            <h2 className="mb-6 text-3xl font-bold text-white">{t("about.title")}</h2>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">{t("about.bio1")}</p>
              <p className="leading-relaxed">{t("about.bio2")}</p>
              <p className="leading-relaxed">{t("about.bio3")}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="../../Hoang-Dinh-Hoan.pdf"
                target="_blank"
                className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105"
              >
                <i className="pi pi-download"></i>
                <span>{t("common.downloadCV")}</span>
              </a>
              <a
                href="mailto:hoanghoanpineapple04@gmail.com?subject=Liên hệ từ trang web&body=Xin chào, tôi muốn liên hệ với bạn."
                className="flex items-center px-6 py-3 space-x-2 font-semibold text-blue-400 transition-all duration-300 transform border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:scale-105"
              >
                <i className="pi pi-envelope"></i>
                <span>{t("common.contact")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-2">
          <div className="p-8 border bg-slate-800 rounded-xl border-slate-700">
            <h3 className="flex items-center mb-6 space-x-2 text-2xl font-bold text-white">
              <i className="text-purple-400 pi pi-info-circle"></i>
              <span>{t("about.information")}</span>
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.fullname")}:</span>
                <span className="text-white">Hoàng Đình Hoàn</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.age")}:</span>
                <span className="text-white">{age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.addressCurrent")}:</span>
                <span className="text-white">
                  1002 Ta Quang Buu, ward 6, District 8, Ho Chi Minh City
                </span>
              </div>{" "}
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.addressNew")}:</span>
                <span className="text-white">
                  1002 Ta Quang Buu, ward Binh Dong, Ho Chi Minh City
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.email")}:</span>
                <span className="text-white">
                  hoanghoanpineapple04@gmail.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.phone")}:</span>
                <span className="text-white">+84 377 984 957</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t("about.languages")}:</span>
                <span className="text-white">VietNamese, English</span>
              </div>
            </div>
          </div>

          <div className="p-8 border bg-slate-800 rounded-xl border-slate-700">
            <h3 className="flex items-center mb-6 space-x-2 text-2xl font-bold text-white">
              <i className="text-pink-400 pi pi-heart"></i>
              <span>{t("about.hobby")}</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: t("about.hobbies.coding"), icon: "pi-code" },
                { name: t("about.hobbies.listenMusic"), icon: "pi-headphones" },
                { name: t("about.hobbies.traveling"), icon: "pi-map" },
                { name: t("about.hobbies.photography"), icon: "pi-camera" },
                { name: t("about.hobbies.football"), icon: "pi-heart-fill" },
                { name: t("about.hobbies.badminton"), icon: "pi-heart-fill" },
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
            {t("about.journey")}
          </h2>
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2025",
                  title: t("about.timeline.intern.title"),
                  company: t("about.timeline.intern.company"),
                  description: t("about.timeline.intern.desc"),
                  side: "right",
                },
                {
                  year: "2022",
                  title: t("about.timeline.university.title"),
                  company: t("about.timeline.university.company"),
                  description: t("about.timeline.university.desc"),
                  side: "left",
                },
                {
                  year: "2022",
                  title: t("about.timeline.highschool.title"),
                  company: t("about.timeline.highschool.company"),
                  description: t("about.timeline.highschool.desc"),
                  side: "right",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${item.side === "left" ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  <div
                    className={`w-1/2 ${item.side === "left" ? "pr-8 text-right" : "pl-8"
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
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <div className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            {t("about.coreValues")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: "pi-lightbulb",
                title: t("about.values.creativity.title"),
                description: t("about.values.creativity.desc"),
              },
              {
                icon: "pi-users",
                title: t("about.values.collaboration.title"),
                description: t("about.values.collaboration.desc"),
              },
              {
                icon: "pi-star",
                title: t("about.values.quality.title"),
                description: t("about.values.quality.desc"),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 text-center transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:bg-slate-700"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <i className={`pi ${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
