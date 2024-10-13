import AuthWidget from "../common/AuthWidget";
import HeaderClient from "./HeaderClient";

const HeaderServer = () => {
  return (
    <header>
      <div className="flex-col justify-around top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90">
        <div className="mx-auto w-full max-w-7xl md:flex md:justify-between md:py-3.5 md:px-4">
          <HeaderClient />
          <AuthWidget />
        </div>
      </div>
    </header>
  );
};

export default HeaderServer;
