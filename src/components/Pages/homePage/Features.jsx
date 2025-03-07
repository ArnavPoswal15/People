export default function Features() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 text-center text-white"
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }/Bgphotos/home/featurebg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="w-full px-10 text-6xl font-bold leading-tight text-left text-white">
        Explore the Magic Behind <br />
      </h1>
      <h1 className="mb-8 text-6xl font-bold">Piepeople’s AI Innovations</h1>
      <div className="font-bold grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl text-center justify-center min-h-[326px]">
        <div className="flex items-center justify-center p-6 text-center bg-black bg-opacity-50 border border-white rounded-2xl">
          <p className="text-2xl text-left">
            Engineering <br /> excellence with <br />
            cutting-edge artificial <br />
            intelligence to drive <br /> enterprise <br /> transformation
          </p>
        </div>

        <div className="p-6 bg-black bg-opacity-50 border border-white rounded-2xl">
          <p className="text-2xl text-left">
            Application <br />
            development and <br /> building Foundational <br />
            Gen AI models
          </p>
        </div>

        <div className="p-6 bg-black bg-opacity-50 border border-white rounded-2xl">
          <p className="text-2xl">
            <span className="text-2xl font-bold">Over 400,000</span> <br />
            <br />
            <br />
            person-hours experience in AI, ML, LLM, VLM
          </p>
        </div>

        <div className="p-6 bg-black bg-opacity-50 border border-white rounded-2xl">
          <p className="text-2xl text-left">
            Serving diverse <br /> sectors including <br /> technology,
            <br /> healthcare, finance, <br />
            retail, and industrial <br />
            operations
          </p>
        </div>
      </div>
    </div>
  );
}
