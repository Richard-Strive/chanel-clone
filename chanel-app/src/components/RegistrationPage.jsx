import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { titles, countries } from "./arrays";

function RegistrationPage() {
  const [title, setCurrency] = useState("");
  const [location, setLocation] = useState("Italy");
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <RegistrationPageContainer>
      <small>
        Create an account to enjoy a personalised shopping experience and faster
        online checkout.
      </small>
      <EmailField label="Email" />
      <TitleDropDown
        id="standard-select-currency-native"
        select
        label="Title"
        value={title}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        {titles.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </TitleDropDown>
      <FirstNameField label="First name" />
      <SurnameField label="Surname" />
      <PhoneNumberField>
        <PhoneNumberPrefix
          id="standard-select-currency-native"
          select
          label="Location Code"
          value={location}
          onChange={handleChangeLocation}
          SelectProps={{
            native: true,
          }}
        >
          {countries.map((country, i) => (
            <option key={i} value={country.code}>
              {`${country.code} (${country.name.slice(0, 5)})`}
            </option>
          ))}
        </PhoneNumberPrefix>

        <NumberField id="filled-number" label="Number" type="number" />
      </PhoneNumberField>
      <LocationField
        id="standard-select-currency-native"
        select
        label="Location of Residence"
        value={location}
        onChange={handleChangeLocation}
        SelectProps={{
          native: true,
        }}
      >
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </LocationField>
      <PasswordField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <PasswordHint>
        <p>
          Your password must contain 8 characters minimum and the following 3
          character types: uppercase, lowercase and numbers
        </p>
      </PasswordHint>
      <CheckContainer>
        <CheckButton onClick={() => setCheck(!check)} check={check} />I consent
        to CHANEL providing me with marketing information about CHANEL products
        via email, post, phone and text message. (optional)
      </CheckContainer>
      <HiddenCheckInfo check={check}>
        <small>
          You have the right at any time to withdraw your consent to the
          receipt/provision of marketing information by changing your personal
          preferences in the section my account. The withdrawal of the consent
          does not affect the lawfulness of the processing based on consent
          before its withdrawal.
        </small>
      </HiddenCheckInfo>
      <small>
        Further information, in particular regarding your data subject rights,
        can be found in the <u>Privacy Policy</u>
      </small>
      <FormButton>CREATE ACCOUNT</FormButton>
    </RegistrationPageContainer>
  );
}

export default RegistrationPage;

const RegistrationPageContainer = styled.div`
  height: fit-content;
  width: 30vw;

  font-family: "Times New Roman", Times, serif;
  display: flex;
  flex-direction: column;
  padding: 10px;

  small {
    font-size: 12px;
    font-weight: 300;
  }

  small:last-of-type {
    margin-top: 10px;
    color: #767676;

    u {
      color: black;
    }
  }
`;

const EmailField = styled(TextField)`
  margin-top: 40px !important;

  label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated {
    font-family: Helvetica, Open-Sans, "sans-serif-light", sans-serif;
    font-size: 14px;
    color: #767676;
  }

  .MuiInput-underline:after {
    border-bottom: 2px solid black;
  }
`;

const TitleDropDown = styled(EmailField)`
  width: 30%;
`;

const NumberField = styled(EmailField)`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  width: 65%;
`;
const SurnameField = styled(EmailField)``;
const FirstNameField = styled(EmailField)``;
const PasswordField = styled(EmailField)``;
const PhoneNumberField = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PhoneNumberPrefix = styled(TitleDropDown)``;
const LocationField = styled(TitleDropDown)`
  width: 100%;
`;

const PasswordHint = styled.div`
  height: 50px;
  width: 30vw;
`;
const CheckContainer = styled.div`
  height: 60px;
  width: 30vw;

  display: flex;
  flex-wrap: no-wrap;
  margin-top: 35px;
  p {
    font-size: 12px;
  }
`;
const CheckButton = styled.div`
  position: relative;
  border: 1px solid black;
  height: 10px;
  width: 30px;
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

const FormButton = styled.div`
  width: 30vw;
  height: 10vh;
  background-color: black;
  color: white;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    border-bottom: 1px solid white;
    position: absolute;
    width: 37%;
    bottom: 17px;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
  &:hover:after {
    opacity: 10;
  }
`;

const HiddenCheckInfo = styled.div`
  height: 0px;
  width: 30vw;
  margin: 20px 0;
  overflow: hidden;
  opacity: 0;

  ${(props) =>
    props.check
      ? `height: 70px;
         opacity: 0.9;`
      : ""}

  transition: all 550ms ease;
`;
