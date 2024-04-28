import { FIELD_IDS } from "./form.fieldId";

export const SECTIONS = [
  {
    label: "Basic Details",
    rows: [
      {
        columns: [FIELD_IDS.FIRST_NAME, FIELD_IDS.LAST_NAME],
      }
    ],
  },
  {
    label: "Contact Details",
    rows: [
      {
        columns: [FIELD_IDS.COUNTRY_CODE, FIELD_IDS.MOBILE_NUMBER],
      }
    ],
  },
];
