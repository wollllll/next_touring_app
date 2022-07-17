import Header from "./Header";

const Base = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="h-full lg:px-40">{children}</main>
    </div>
  );
};

export default Base;
