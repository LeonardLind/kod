const Nav = () => {
  return (
    <header className="w-full bg-blue-100">
      <nav className="p-4 flex justify-around h-14">
        <div className="text-lg font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">Services</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
