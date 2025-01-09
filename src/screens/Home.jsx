// import Logo from "../components/Home/Logo";
import Body from "../components/Home/Body";
import Footer from "../components/Home/Footer";
// import Github from "../components/Home/Github";

import OpenLink from "../components/core/OpenLink";

import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import GithubLogo from "../assets/github.svg";

const Home = () => {
  return (
    <div>
      <div>
        <OpenLink
          redirectUrl="https://vitejs.dev/guide/features.html"
          logoImage={viteLogo}
        />
        <OpenLink redirectUrl="https://react.dev" logoImage={reactLogo} />
        <OpenLink
          redirectUrl="https://github.com/edson-yanez-villa/curso-de-react.git"
          logoImage={GithubLogo}
        />
      </div>
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
