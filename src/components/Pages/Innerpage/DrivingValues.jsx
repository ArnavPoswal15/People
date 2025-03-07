export default function DrivingValues() {
  return (
    <section className="w-full h-full px-6 py-12 mx-auto bg-white">
      <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:w-[50%] mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 md:text-left">
            Driving Value Through AI
          </h2>

          <div className="max-w-lg mx-auto md:mx-0">
            <p className="mt-4 text-xl text-gray-600">
              Transform your business with AI solutions that deliver real
              results. Our expertise helps you:
            </p>
            <ul className="mt-4 space-y-3 text-xl text-[#252525]">
              {[
                "Reduce operational costs",
                "Improve decision-making accuracy",
                "Enhance customer satisfaction",
                "Accelerate time-to-market",
                "Drive innovation",
                "Create competitive advantages",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xl text-green-500">✔</span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}/logos/innerpage/minirobo.png`}
            alt="AI Illustration"
          />
        </div>
      </div>
    </section>
  );
}
