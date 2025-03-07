import { Check } from "lucide-react";
export default function Whypiepeople() {
  const features = [
    "Proven expertise in engineering and AI integration",
    "End-to-end implementation capabilities",
    "Focus on measurable business outcomes",
    "Strong governance and ethical frameworks",
    "Continuous innovation and research",
    "Expert team of AI engineers and data scientists",
  ];
  return (
    <div className="w-full h-full px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-8 text-5xl font-bold text-black">
          Why Choose Piepeople for AI Solutions
        </h1>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-5 bg-white rounded-lg shadow-md"
          >
            <Check className="text-green-600" />
            <p className="text-gray-800">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
