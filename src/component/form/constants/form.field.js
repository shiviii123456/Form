import { Input } from "antd";
import validator from "validator";
import InputFieldRenderer from "../../formWithSubmission/fieldRenderer/InputFieldRenderer";

export const FIRST_NAME = {
  renderer: InputFieldRenderer,
  renderOption: {
    placeholder: "FirstName",
    required: true,
  },
};

export const LAST_NAME = {
  renderer: InputFieldRenderer,
  renderOption: {
    placeholder: "LastName",
    required: true,
  },
};

export const MOBILE_NUMBER = {
  renderer: Input,
  renderOption: {
    placeholder: "MobileNumber",
    required: true,
    validation: validator.isMobilePhone,
  },
};

export const COUNTRY_CODE = {
  renderer: Input,
  renderOption: {
    placeholder: "CountryCode",
    required:true
  },
};


