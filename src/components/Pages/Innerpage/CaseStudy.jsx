export default function CaseStudy() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-center bg-cover"
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }/Bgphotos/innerpage/Casestudybg.png')`,
      }}
    >
      {/* Heading */}
      <h1 className="text-4xl text-black font-semi mb-11 md:text-5xl">
        Case Study
      </h1>

      {/* Case Study Container */}
      <div className="flex flex-col items-center max-w-6xl p-6 bg-white shadow-2xl rounded-3xl md:flex-row md:p-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl leading-snug text-black md:text-3xl">
            Prompt-based Organ Segmentation using VLM
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
            Using a prompt-based approach that combined vision and language
            models, this project achieved <strong>83% accuracy</strong> in
            segmenting anatomical structures in chest X-rays, demonstrating the
            potential for more flexible and efficient medical image analysis.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={`${import.meta.env.BASE_URL}/logos/innerpage/caseStudy.png`}
            alt="Medical AI"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
}
