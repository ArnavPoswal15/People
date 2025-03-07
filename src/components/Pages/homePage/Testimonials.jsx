export default function Testimonials() {
  return (
    <div className="relative w-full min-h-[120vh] flex flex-col items-center text-black text-center pt-40 bg-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }/Bgphotos/home/testemonialsbg.png')`,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl px-6 pt-60">
        <p className="mt-24 text-3xl">What our clients say about us</p>
        <h2 className="mt-10 text-6xl">
          <span className="font-semibold text-red-600">Success Stories</span>{" "}
          from Our Partners
        </h2>

        <div className="relative flex items-center justify-center w-full">
          <button className="hidden md:block absolute left-[-50px] top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700 transition duration-300">
            ←
          </button>
          <div className="flex w-full gap-6 pt-16 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scroll-smooth no-scrollbar">
            {[
              {
                text: "Piepeople has been an outstanding partner to us. We have used them both for staffing as well as outsourced projects, and we are very happy with their quality and commitment.",
                author: "Vice President, Engineering",
              },
              {
                text: "Piepeople's understanding of our business process and how best to automate the various dependencies was very impressive. We plan to continue using them into the next phase and new implementations.",
                author: "Director of IT",
              },
            ].map(({ text, author }, index) => (
              <div
                key={index}
                className="relative bg-white border border-[#E6E6E6] p-6 rounded-2xl text-left min-h-[400px] flex flex-col justify-between snap-center w-full md:w-[48%] flex-shrink-0"
              >
                <div className="absolute flex gap-2 top-5 left-5">
                  <img
                    src={`${import.meta.env.BASE_URL}/logos/home/Vector.png`}
                    alt="Quote"
                    className="w-[30px] h-[55px]"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}/logos/home/Vector.png`}
                    alt="Quote"
                    className="w-[30px] h-[55px]"
                  />
                </div>

                <p className="text-lg text-[#181818] flex-grow flex items-center">
                  {text}
                </p>

                <img
                  src={`${import.meta.env.BASE_URL}logos/home/bar.png`}
                  alt=""
                  className="h-[4px] w-[140px]"
                />

                <p className="mt-10 text-lg font-semibold text-black">
                  - {author}
                </p>
              </div>
            ))}
          </div>

          <button className="hidden md:block absolute right-[-50px] top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700 transition duration-300">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
