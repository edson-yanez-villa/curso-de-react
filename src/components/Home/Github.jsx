import GithubLogo from "../assets/github.svg";

const Github = () => {
  return (
    <div>
      <a
        href="https://github.com/edson-yanez-villa/curso-de-react.git"
        target="_blank"
      >
        <img src={GithubLogo} className="logo" alt="github" />
      </a>
    </div>
  );
};

export default Github;
