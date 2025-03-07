export default function Partners() {
  return (
    <div className="flex flex-col justify-center w-full min-h-screen px-10 py-16 text-center text-white bg-black">
      {/* Header Section */}
      <div className="flex flex-col items-start justify-between max-w-6xl mx-auto space-y-6 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-5xl font-bold md:w-1/2">
          Your Partner in Digital Transformation
        </h2>
        <p className="text-lg text-white md:w-1/2">
          Client service is the cornerstone of our success. Providing an
          exceptional experience goes beyond meeting expectations; it’s about
          surpassing them. Our commitment to understanding our clients’ unique
          needs allows us to deliver personalized solutions that drive their
          success and address their problems.
        </p>
      </div>

      {/* Partner Logos Section */}
      <div className="max-w-6xl mx-auto mt-16 bg-gray-900 bg-opacity-20 border border-[#7B7B7B] h-[450px] rounded-2xl p-8 flex items-center">
        <div className="grid items-center justify-center w-full grid-cols-3 md:grid-cols-4 gap-11">
          <img
            src={`${import.meta.env.BASE_URL}logos/home/hopper.png`}
            alt="Hopper"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/UST.png`}
            alt="UST"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/Globus.png`}
            alt="Globus"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/pentonic.png`}
            alt="Pentonic"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/payfx.png`}
            alt="PayFX"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/arthan.png`}
            alt="Arthan"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/felix.png`}
            alt="Felix"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/trace.png`}
            alt="Trace"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/smartP.png`}
            alt="Smart Properties"
            className="h-16 mx-auto"
          />
          <img
            src={`${import.meta.env.BASE_URL}logos/home/routine.png`}
            alt="Routine"
            className="h-16 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
