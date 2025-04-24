import logo from "../assets/Hero.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        {/* Logo dan Tagline */}
        <div className="text-center lg:text-left">
          <img src={logo} alt="logo" className="w-44 mx-auto lg:mx-0 mb-4" />
          <p className="text-white font-medium">
            We Never Stop Making Cool Things
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center lg:text-left">
          <h3 className="text-md font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#vision" className="text-neutral-300 hover:text-white">
                Vision and Mission
              </a>
            </li>
            <li>
              <a href="#features" className="text-neutral-300 hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#roadmap" className="text-neutral-300 hover:text-white">
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
