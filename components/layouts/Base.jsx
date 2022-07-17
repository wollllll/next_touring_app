import Header from "./Header";
import Footer from "./Footer";

const Base = ({ children }) => {
  return (
    <div className="secondary-bg-color flex flex-col h-screen">
      <Header />
      <main className="xl:px-64 p-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Base;
