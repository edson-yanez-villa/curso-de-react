import { useSelector } from "react-redux";

const ModalSession = () => {
  const name = useSelector((state) => state.form.loginForm.username);
  const email = useSelector((state) => state.form.loginForm.email);
  if (!name && !email) return null;
  return (
    <span className="session-info">
      {`Bienvenido: ${name} | ${email}`} <button>Logout </button>
    </span>
  );
};

export default ModalSession;
