const OpenLink = ({ redirectUrl, logoImage }) => {
  return (
    <>
      <a href={redirectUrl} target="_blank">
        <img src={logoImage} className="logo" alt="Vite logo" />
      </a>
    </>
  );
};

export default OpenLink;
