import Navbar from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;