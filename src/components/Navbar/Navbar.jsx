const Navbar = ({ isAuthed }) => {
  return (
    <div className="flex justify-center pt-2">
      <div className="container mx-auto px-20">
        <ul className="flex pl-0">
          {isAuthed && (
            <li className="mr-6 font-medium text-lg">
              <a href="/dashboard" className="text-gray-800 hover:text-black">
                Dashboard
              </a>
            </li>
          )}
          <li className="mr-6 font-medium text-lg">
            <a href="/" className="text-gray-800 hover:text-black">
              Home
            </a>
          </li>
          <li className="mr-6 font-medium text-lg">
            <a href="#" className="text-gray-800 hover:text-black">
              #ai
            </a>
          </li>
          <li className="mr-6 font-medium text-lg">
            <a href="#" className="text-gray-800 hover:text-black">
              #apple ipad
            </a>
          </li>
          <li className="mr-6 font-medium text-lg">
            <a href="#" className="text-gray-800 hover:text-black">
              #máy lạnh
            </a>
          </li>
          <li className="mr-6 font-medium text-lg">
            <a href="#" className="text-gray-800 hover:text-black">
              #trên tay
            </a>
          </li>
          <li className="mr-6 font-medium text-lg">
            <a href="#" className="text-gray-800 hover:text-black">
              #review
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
