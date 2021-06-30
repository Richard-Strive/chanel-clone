import React, { useState } from "react";
import styled from "styled-components";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const PasswordInput = styled(Input)``;
const PasswordInputLabel = styled(InputLabel)``;

function LoginPage() {
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
      LoginPage
      <FormControl variant="filled">
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
      </FormControl>
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
  padding: 10px;
  background-color: yellow;
`;
