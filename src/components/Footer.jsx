export default function Footer() {
  return (
    <footer className="px-6 py-10 text-white bg-black border-t border-gray-700 md:px-20">
      <div className="grid max-w-6xl gap-8 mx-auto text-center sm:grid-cols-2 md:grid-cols-3 md:text-left">
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            PIE<span className="text-red-600">PEOPLE</span>
          </h2>
          <p className="mt-2 text-base leading-relaxed text-gray-300 sm:text-lg">
            Piepeople Consulting, founded in <br /> 2004, offers staffing and
            outsourcing <br /> globally.
          </p>
          <div className="flex justify-center mt-4 md:justify-start">
            <img
              src={`${import.meta.env.BASE_URL}logos/home/Linkedin.png`}
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-7 sm:text-2xl">ADDRESS</h3>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            <span className="font-bold ">BAY AREA</span>
            <br />
            1669-2, Hollenbeck Avenue #186
            <br />
            Sunnyvale, CA 94087
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mt-7 sm:text-2xl">EMAIL</h3>
          <p className="mt-4 text-base text-gray-300 sm:text-lg">
            customercareba@piepeople.com
          </p>
          <p className="mt-1 text-gray-300">info@piepeople.com</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-6 mt-10 text-sm text-gray-400 border-t border-gray-700 md:flex-row md:justify-between">
        <p className="text-center md:text-left">
          Copyrights © PiePeople Consulting Inc. 2022. All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Disclaimer
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
