import AuthWidget from "./AuthWidget";
import HeaderClient from "./HeaderClient";

const HeaderServer = () => {
  return (
    <header>
      <div className="md:py-3.5 transition-all duration-100 ease-in dark:bg-slate-900/90 bg-cyan-100/90 md:backdrop-blur-sm ">
        <div className="mx-auto w-full md:flex md:px-4">
          <HeaderClient />
          <AuthWidget />
        </div>
      </div>
    </header>
  );
};

export default HeaderServer;
