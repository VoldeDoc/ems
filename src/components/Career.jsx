import career from "../assets/career1.png";
// import hero from "../assets/career.png";
// import career2 from "../assets/career2.png";

const Career = () => {
  // const jobs = [
  //   {
  //     title: "Customer Service Officer",
  //     description: "Location: Abuja",
  //     bg: "#D9D9D9",
  //     text: "#020202",
  //   },
  //   {
  //     title: "Business Development Officer",
  //     description: "Location: Abuja",
  //     bg: "#193728",
  //     text: "#F9FAFB",
  //   },
  //   {
  //     title: "Marketing Manager",
  //     description: "Location: Lagos",
  //     bg: "#D9D9D9",
  //     text: "#020202",
  //   },
  // ];

  return (
    <div className="lg:px-15 md:px-10 px-5 pb-15 home-2">
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between">
        <img
          src={career}
          alt="Career"
          className="object-cover min-h-72 md:h-auto w-full md:w-1/2"
        />
        <div className="bg-[#19392C] w-full md:w-1/2 flex justify-center items-center flex-col p-10 md:p-15">
          <div className="w-fit text-start">
            <h2 className="text-lg poppins md:text-xl font-semibold text-[#F9FAFB] mb-2">
              Why Work With Us?
            </h2>
            <hr className="bg-[#F9FAFB] w-20 h-1 mb-8" />
            <p className="text-sm md:text-base text-[#F9FAFB] poppins mb-4">
              At Etiquette Management School, we are redefining excellence in
              domestic and hospitality service. As a leading training
              institution committed to raising the standard of professional
              domestic staffing, we invest in people, purpose, and performance.
            </p>
            <p className="text-sm md:text-base text-[#F9FAFB] poppins mb-4">
              When you join our team or become part of our talent pool, you
              align with an institution that values:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-[#F9FAFB]">
              <li className="pb-3 poppins">
                <span className="font-semibold mr-3">
                  Professional Growth :
                </span>
                We offer a dynamic and supportive environment where your skills
                are continually nurtured through hands-on training, mentorship,
                and exposure to best practices in domestic service and
                hospitality management.
              </li>
              <li className="pb-3 poppins">
                <span className="font-semibold mr-3">Impactful Work :</span>
                Our graduates serve in some of the most prestigious homes and
                institutions. Whether you train, support, or manage, your work
                directly shapes lives and careers, creating a ripple effect of
                excellence in homes and communities.
              </li>
              <li className="pb-3 poppins">
                <span className="font-semibold mr-3">
                  Integrity & Respect :
                </span>
                We believe in the dignity of domestic work and treat every
                member of our team and talent pool with professionalism,
                respect, and fairness.
              </li>
              <li className="pb-3 poppins">
                <span className="font-semibold mr-3">
                  Career Advancement Opportunities :
                </span>
                We don't just train—we connect. Through our growing employer
                network and placement support, we help skilled professionals
                find meaningful, long-term employment.
              </li>
              <li className="pb-3 poppins">
                <span className="font-semibold mr-3">
                  Inclusive & Supportive Culture :
                </span>
                From trainers to trainees, every voice matters. We foster a
                culture where everyone is seen, supported, and encouraged to
                thrive.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#383737] p-5 md:p-10 lg:p-15 ">
        <div className="w-fit text-start mb-10">
          <h2 className="text-lg poppins md:text-xl poppins font-semibold text-[#F9FAFB] mb-2">
            Are you interested in working with us or being considered for a
            placement?
          </h2>
          <hr className="bg-[#19392C] w-20 h-2" />
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-6">
          {jobs.map((job, index) => (
            <div key={index}>
              <div
                className="p-10 rounded-lg flex-1"
                style={{ backgroundColor: job.bg }}
              >
                <h3
                  className={
                    "text-[22px] poppins font-bold text-[#F9FAFB] mb-2"
                  }
                  style={{ color: job.text }}
                >
                  {job.title}
                </h3>
                <p
                  className={`whitespace-pre-line poppins font-semibold`}
                  style={{ color: job.text }}
                >
                  {job.description}
                </p>
              </div>
              <button className="bg-black poppins text-[#F9FAFB] text-2xl px-4 py-2 w-full text-center">
                Apply Now
              </button>
            </div>
          ))}
        </div> */}
        <div className="flex items-center justify-center gap-6">
          <div className="bg-[#193728] text-center p-10">
            <p className="text-white poppins font-light text-sm md:text-base">
              To join our team, kindly submit your CV and Cover Letter to:{" "}
              <a
                href="mailto:info@etiquettemanagementschool.com?subject=Job Application"
                className="text-white underline hover:text-gray-300 mr-2"
              >
                info@etiquettemanagementschool.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
