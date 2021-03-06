const Header = () => {
  return (
    <>
      <header className="bg-primary shadow lg:px-40">
        <div className="navbar">
          <div className="navbar-start" />
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">峠マイスター</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
