import { useDispatch, useSelector } from "react-redux";
import ModalLogout from "./ModalLogout";
import { useState } from "react";
import { setValue } from "../../store/features/form/formSlice";

const ModalSession = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const name = useSelector((state) => state.form.loginForm.username);
  const email = useSelector((state) => state.form.loginForm.email);

  const showViewModal = (value) => {
    setShowModal(value);
  };
  const onCloseModalInfo = () => {
    setShowModal(false);
  };
  const removeSessionStore = () => {
    localStorage.removeItem("user");
    dispatch(setValue({ name: "username", value: "" }));
    dispatch(setValue({ name: "email", value: "" }));
    dispatch(setValue({ name: "password", value: "" }));
    dispatch(setValue({ name: "module", value: "" }));
    onCloseModalInfo();
  };

  if (!name && !email) return null;
  return (
    <>
      <ModalLogout
        visible={showModal}
        message="¿Estás seguro de cerrar sesión?"
        onClose={onCloseModalInfo}
        onAccept={removeSessionStore}
      />
      <span className="session-info">
        {`Bienvenido: ${name} | ${email}`}{" "}
        <button onClick={() => showViewModal(true)}>Logout </button>
      </span>
    </>
  );
};

export default ModalSession;
