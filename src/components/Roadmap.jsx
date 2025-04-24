export default function RoadmapStages() {
  const roadmapStages = [
    {
      title: "Showcase Technology",
      description:
        "Showcase HBM existing technology solutions to the World Through HEXA Lab",
    },
    {
      title: "Fraud Detection",
      description: "Finalize Fraud Detection System with Machine Learning",
    },
    {
      title: "HR Platform",
      description: "Finalize HR Platform with AI Agent capability",
    },
    {
      title: "Multivendor ATM",
      description: "Develop HBX Multivendor ATM",
    },
    {
      title: "NFT Collection",
      description: "Launch Hexa Pass NFT Collection",
    },
    {
      title: "Token Generation",
      description: "Conduct $HEXA Token Generation Event (TGE)",
    },
    {
      title: "Ecosystem Growth",
      description: "Grow Hexa Ecosystem to 100,000+ audience",
    },
    {
      title: "Global Partnerships",
      description: "Secure partnerships with 10 global enterprise clients",
    },
  ];

  const futurePlans = [
    "Expand and refine technology offerings",
    "Continue developing cutting-edge solutions in AI, blockchain, and security",
    "Explore the creation of a dedicated Hexa blockchain network",
    "Strengthen global partnerships and community engagement",
  ];

  return (
    <div className="text-white py-20 px-4 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
        The{" "}
        <span className="bg-gradient-to-r from-red-500 to-indigo-600 text-transparent bg-clip-text">
          Roadmap
        </span>
      </h2>
      <div id="roadmap" className="bg-black bg-opacity-50 p-7 rounded-lg max-w-6xl w-full">
        <h2 className="text-4xl text-center bg-gradient-to-r from-red-500 to-indigo-600 text-transparent bg-clip-text">
          2025
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 mt-7">
          {roadmapStages.map((stage, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-4 h-4 mt-1 rounded-full bg-indigo-500 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{stage.title}</h3>
                <p className="text-gray-400">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black bg-opacity-50 p-5 rounded-lg max-w-4xl w-full mt-10">
        <h2 className="text-4xl text-center bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
          2026 and Beyond!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 mt-7">
          {futurePlans.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-4 h-4 mt-1 rounded-full bg-red-600 flex-shrink-0"></div>
              <p className="text-lg text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
