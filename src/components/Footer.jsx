const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-white">
      <div className="text-center sm:text-left px-6">
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
    </footer>
  );
};

export default Footer;
