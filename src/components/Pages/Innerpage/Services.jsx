export default function Services() {
  const services = [
    { image: "/logos/innerpage/genAi.png", label: "Gen AI" },
    {
      image: "/logos/innerpage/intelligentrobotics.png",
      label: "Intelligent Robotics",
    },
    { image: "/logos/innerpage/Nlp.png", label: "NLP & Text Analytics" },
    {
      image: "/logos/innerpage/Videoimageanalysis.png",
      label: "Image & Video Analytics",
    },
    {
      image: "/logos/innerpage/forcast.png",
      label: "Forecasting and Predictive Modeling",
    },
    { image: "/logos/innerpage/explainai.png", label: "Explainable AI" },
    {
      image: "/logos/innerpage/mlops.png",
      label: "MLOps & Deployment Pipeline",
    },
    {
      image: "/logos/innerpage/recommendation.png",
      label: "Recommendation Engine",
    },
    {
      image: "/logos/innerpage/Audio.png",
      label: "Audio Analytics Data Annotations",
    },
    {
      image: "/logos/innerpage/trainingmeeting.png",
      label:
        "Training and Education Services for Digital Transformation and AI",
    },
  ];

  return (
    <div className="w-full h-full px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6 text-4xl text-black">Services</h1>
        <p className="text-lg leading-relaxed text-[#191C3A]">
          We offer a comprehensive suite of AI-powered solutions that address a
          wide range of <br /> business needs:
        </p>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}${service.image}`}
                alt={service.label}
                className="mx-auto h-30"
              />
              <p className="mt-2 text-lg text-black">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
