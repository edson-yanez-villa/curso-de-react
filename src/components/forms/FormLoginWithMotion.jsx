import { motion } from "motion/react";
import useForm from "../Hooks/useForm";
import { useState } from "react";
import { useSelector } from "react-redux";

import ModalInfo from "../Modals/ModalInfo";
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
  const [message, setMessage] = useState("");
  const { formData, handleChange } = useForm({
    username: "",
    email: "",
    password: useSelector((state) => state.form.loginForm.password),
    module: useSelector((state) => state.form.loginForm.module),
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    if (formData.password.includes(formData.username)) {
      // localStorage.setItem("user", JSON.stringify(formData));
      // console.log("Datos guardados en localStorage");
      setMessage(`Bienvenido ${formData.username}`);
      console.log("datos del formulario", formData);
    }
    setMessage("User/Password incorrectos");
  };
  const onCloseModalInfo = () => {
    setShowModal(false);
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
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
