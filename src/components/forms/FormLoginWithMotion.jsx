import { motion } from "motion/react";
import useForm from "../Hooks/useForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ModalInfo from "../Modals/ModalInfo";
import { setValue } from "../../store/features/form/formSlice";
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [stateText, setStateText] = useState(true);
  const [textPassword, setTestPassword] = useState("Show");
  const [textType, setTextType] = useState("password");
  const { formData, handleChange } = useForm({
    username: "",
    email: "",
    password: useSelector((state) => state.form.loginForm.password),
    module: useSelector((state) => state.form.loginForm.module),
  });
  const [showModal, setShowModal] = useState(false);
  const [classElement, setClasselement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.includes(formData.username)) {
      localStorage.setItem("user", JSON.stringify(formData));
      setMessage(`Bienvenido ${formData.username}`);
      setClasselement("notification-success-login");

      dispatch(setValue({ name: "username", value: formData.username }));
      dispatch(setValue({ name: "email", value: formData.email }));
      dispatch(setValue({ name: "password", value: formData.password }));
      dispatch(setValue({ name: "module", value: formData.module }));
    } else {
      setMessage("User/Password incorrectos");
      setClasselement("notification-not-success-login");
    }
    setShowModal(true);
  };
  const onCloseModalInfo = () => {
    setShowModal(false);
  };
  const setTypePassword = () => {
    if (stateText) {
      setTestPassword("Hide");
      setTextType("text");
      setStateText(false);
    } else {
      setTestPassword("Show");
      setTextType("password");
      setStateText(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo
        visible={showModal}
        message={message}
        onClose={onCloseModalInfo}
        className={classElement}
      />
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{titleForm}</h3>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Module:
              <input
                readOnly
                type="text"
                name="module"
                value={formData.module}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label>
              Password:
              <input
                type={textType}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button type="button" onClick={() => setTypePassword(true)}>
              {textPassword}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button type="submit">Enviar</button>
        </motion.div>
      </form>
    </motion.div>
  );
};
export default FormWithMotionAndHook;
