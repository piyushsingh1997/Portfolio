import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built & Been A Part Of" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            // href="https://nextamazon.reactbd.com/"
            // target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="Flutter"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Deep Blue
              </p>
              <h3 className="text-2xl font-bold">Booking Application</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A booking mobile application for office people in which application allowed authorized users to reserve office rooms, 
              cancel bookings and perform check-ins when they arrived at the office and see details of all the users who has booked or who has not booked. {" "}
              {/* <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>. */}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Firebase</li>
              <li>Github</li>
              <li>Figma</li>

            </ul>
          
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            // href="https://www.noormohmmad.com/"
            // target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                 Aragon Partners
              </p>  
              <h3 className="text-2xl font-bold">Microsoft SQL Server</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            I enhanced the frontend of a Turnkey project named Filler based on specific client requirements,
             working with the Microsoft SQL Server backend. Additionally, 
             I developed custom reports for clients by leveraging backend functionalities and
              customized the reports using VBA (Visual Basic for Applications).
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>SQL Server</li>
              <li>PHP</li>
              <li>MVC</li>
              <li>Excel</li>
              <li>VBA</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>


            </ul>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            // href="https://noorshop.netlify.app/"
            // target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <h3 className="text-2xl font-bold">Web development</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
             Lately, I've been involved in building web apps with the MERN stack. We use React.js for making the website interactive and user-friendly.
             Node.js takes care of the behind-the-scenes work on the server, making sure everything runs smoothly. 
             Express.js makes it easy to handle various tasks on the server side efficiently and MongoDB serves as our flexible database, 
             where we can store and retrieve data as needed. Together, these technologies help us create powerful and dynamic web applications.



            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.JS</li>
              <li>Node.JS</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>BoostrapCSS</li>
              <li>TailwindCSS</li>

            </ul>   
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
