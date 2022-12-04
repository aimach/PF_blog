import Footer from "./Footer";
import NavBar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="mx-5 flex flex-col h-screen">
      <div className="basis-20">
        <NavBar />
      </div>
      <div className="basis-auto">
        {children}
      </div>
      <div className="basis-20 flex justify-center items-center border-t">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;