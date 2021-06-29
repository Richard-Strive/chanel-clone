import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const titles = [
  {
    value: "Mrs.",
    label: "Mrs.",
  },
  {
    value: "Mr.",
    label: "Mr.",
  },
  {
    value: "Ms.",
    label: "Ms.",
  },
  {
    value: "Miss.",
    label: "Miss.",
  },
  {
    value: "Dir.",
    label: "Dir.",
  },
  {
    value: "Dr.",
    label: "Dr.",
  },
  {
    value: "Sir.",
    label: "Sir.",
  },
  {
    value: "Lady",
    label: "Lady",
  },
  {
    value: "Lord",
    label: "Lord",
  },
];

const locations = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function RegistrationPage() {
  const [title, setCurrency] = useState("");
  const [location, setLocation] = useState("Italy");

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
        {titles.map((option) => (
          <option key={option.value} value={option.value}>
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
          label="Location of Residence"
          value={location}
          onChange={handleChangeLocation}
          SelectProps={{
            native: true,
          }}
        >
          {locations.map((country) => (
            <option key={country} value={country}>
              {country}
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
        {locations.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </LocationField>

      <PasswordField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </RegistrationPageContainer>
  );
}

export default RegistrationPage;

const RegistrationPageContainer = styled.div`
  height: 90vh;
  width: 30vw;
  background-color: coral;
  font-family: "Times New Roman", Times, serif;
  display: flex;
  flex-direction: column;
  padding: 10px;

  small {
    font-size: 12px;

    font-weight: 300;
    background-color: aqua;
  }
`;

const EmailField = styled(TextField)`
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
  height: 50px;
  width: 100%;
  background-color: pink;
  display: flex;
  justify-content: space-between;
`;
const PhoneNumberPrefix = styled(TitleDropDown)``;
const LocationField = styled(TitleDropDown)`
  width: 100%;
`;
