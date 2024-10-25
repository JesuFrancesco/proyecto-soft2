import AuthWidget from "./AuthWidget";
import HeaderClient from "./HeaderClient";

const HeaderServer = () => {
  return (
    <header>
      <div className="md:py-3.5 bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90">
        <div className="mx-auto w-full md:flex md:px-4">
          <HeaderClient />
          <AuthWidget />
        </div>
      </div>
    </header>
  );
};

export default HeaderServer;
