import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function useForm() {
  const [values, setValues] = useState({
    nickname: "",
    email: "",
    password: "",
    password2: "",
  });
  // login <-> signup
  const [clickedType, setClickedType] = useState("로그인");
  const [clickedModify, setClickedModify] = useState("마이페이지");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickedType = (e) => {
    setClickedType(e.target.innerText);
    setValues({
      nickname: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  const handleClickedModify = (e) => {
    setClickedModify(e.target.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onLoginSuccess = (func) => {
    func((prev) => !prev);

    const { pathname } = window.location;

    if (pathname === "/main") {
      window.location.reload();
    } else {
      history.push("/main");
    }
    console.log("로그인 완료");
  };

  const changeType = () => {
    setClickedType("로그인");
  };

  // Signup success => Login Modal
  const onSignupSuccess = () => {
    changeType();
    setValues({
      email: "",
      password: "",
    });
    Swal.fire({
      icon: "success",
      title: "🎉회원가입 완료!🥰",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    clickedType,
    handleClickedType,
    onLoginSuccess,
    onSignupSuccess,
    handleClickedModify,
    clickedModify,
  };
}
