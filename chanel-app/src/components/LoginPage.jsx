import React, { useState } from "react";
import styled from "styled-components";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import { AiOutlineRight } from "react-icons/ai";
import AccountButton from "./AccountButton";

function LoginPage() {
  const [check, setCheck] = useState(false);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginPageContainer>
      <h1>WELCOME BACK</h1>
      <small>Sign in with your email and password.</small>
      <EmailField label="Email" />
      <MyForm variant="filled">
        <PasswordInputLabel htmlFor="standard-adornment-password">
          Password
        </PasswordInputLabel>
        <PasswordInput
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <ForgotPassword>
          Forgot password?
          <RightArrow />
        </ForgotPassword>
        <RememberMe onClick={() => setCheck(!check)}>
          <CheckButton check={check} />
          Remember me
        </RememberMe>
        <AccountButton line={"15%"} text={"SING IN"} />
      </MyForm>
    </LoginPageContainer>
  );
}

export default LoginPage;

const LoginPageContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  width: 30vw;
  height: 75vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  /* background-color: yellow; */
`;
const RightArrow = styled(AiOutlineRight)`
  height: 11px;
`;
const ForgotPassword = styled.div`
  /* width: 100%; */
  width: 10vw;

  height: 30px;
  /* background-color: violet; */
  margin-top: 35px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    border-bottom: 1px solid black;
    opacity: 0;
    width: 85%;
    transition: all 280ms ease-out;
    position: absolute;
    bottom: 5px;
  }

  &:hover:after {
    opacity: 10;
  }
`;
const PasswordInput = styled(Input)``;
const PasswordInputLabel = styled(InputLabel)``;
const MyForm = styled(FormControl)`
  margin-top: 30px !important;
  width: 100%;

  label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated {
    font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
    font-size: 14px;
    color: #767676;
    transform: translate(0px, 20px) scale(1);
  }

  label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.Mui-focused {
    transform: translate(0px, 10px) scale(0.75);
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid black;
  }

  transform: all 250ms ease;
`;
const EmailField = styled(TextField)`
  margin-top: 40px !important;
  width: 100%;

  label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated {
    font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
    font-size: 14px;
    color: #767676;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid black;
  }
`;

const RememberMe = styled.div`
  display: flex;
  width: 10vw;
  height: 30px;
  /* background-color: tomato; */
  margin-top: 20px;
  cursor: pointer;
`;

const CheckButton = styled.div`
  position: relative;
  border: 1px solid black;
  height: 5px;
  width: 5px;
  cursor: pointer;
  margin-right: 5px;
  margin-top: 3px;

  ${(props) => (props.check ? "border: 2px solid black;" : "")}
  transition:all 250ms ease;
  &:after {
    content: "";
    height: 0%;
    width: 0%;
    background-color: black;
    position: absolute;
    right: 0;
    top: 0;

    ${(props) =>
      props.check
        ? `
    height: 100%;
    width: 100%;
    `
        : ""};

    transition: all 250ms ease;
  }
`;
