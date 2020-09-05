import React from "react";
import ReactDOM from "react-dom";

import BankingForm from "./components/BankingForm";

import supported_currencies from "../data/supported_currencies"
import banking_field_definitions from "../data/banking_field_definitions"

console.log(supported_currencies);
console.log(banking_field_definitions);
debugger;


let global_countries = [
  {description: "Afghanistan", value: "AF"},
  {description: "Albania", value: "AL"},
  {description: "Algeria", value: "DZ"},
  {description: "American Samoa", value: "AS"},
  {description: "Andorra", value: "AD"},
  {description: "Angola", value: "AO"},
  {description: "Anguilla", value: "AI"},
  {description: "Antarctica", value: "AQ"},
  {description: "Antigua and Barbuda", value: "AG"},
  {description: "Argentina", value: "AR"},
  {description: "Armenia", value: "AM"},
  {description: "Aruba", value: "AW"},
  {description: "Australia", value: "AU"},
  {description: "Austria", value: "AT"},
  {description: "Azerbaijan", value: "AZ"},
  {description: "Bahamas (the)", value: "BS"},
  {description: "Bahrain", value: "BH"},
  {description: "Bangladesh", value: "BD"},
  {description: "Barbados", value: "BB"},
  {description: "Belarus", value: "BY"},
  {description: "Belgium", value: "BE"},
  {description: "Belize", value: "BZ"},
  {description: "Benin", value: "BJ"},
  {description: "Bermuda", value: "BM"},
  {description: "Bhutan", value: "BT"},
  {description: "Bolivia (Plurinational State of)", value: "BO"},
  {description: "Bonaire, Sint Eustatius and Saba", value: "BQ"},
  {description: "Bosnia and Herzegovina", value: "BA"},
  {description: "Botswana", value: "BW"},
  {description: "Bouvet Island", value: "BV"},
  {description: "Brazil", value: "BR"},
  {description: "British Indian Ocean Territory (the)", value: "IO"},
  {description: "Brunei Darussalam", value: "BN"},
  {description: "Bulgaria", value: "BG"},
  {description: "Burkina Faso", value: "BF"},
  {description: "Burundi", value: "BI"},
  {description: "Cabo Verde", value: "CV"},
  {description: "Cambodia", value: "KH"},
  {description: "Cameroon", value: "CM"},
  {description: "Canada", value: "CA"},
  {description: "Cayman Islands (the)", value: "KY"},
  {description: "Central African Republic (the)", value: "CF"},
  {description: "Chad", value: "TD"},
  {description: "Chile", value: "CL"},
  {description: "China", value: "CN"},
  {description: "Christmas Island", value: "CX"},
  {description: "Cocos (Keeling) Islands (the)", value: "CC"},
  {description: "Colombia", value: "CO"},
  {description: "Comoros (the)", value: "KM"},
  {description: "Congo (the Democratic Republic of the)", value: "CD"},
  {description: "Congo (the)", value: "CG"},
  {description: "Cook Islands (the)", value: "CK"},
  {description: "Costa Rica", value: "CR"},
  {description: "Croatia", value: "HR"},
  {description: "Cuba", value: "CU"},
  {description: "Curaçao", value: "CW"},
  {description: "Cyprus", value: "CY"},
  {description: "Czechia", value: "CZ"},
  {description: "Côte d'Ivoire", value: "CI"},
  {description: "Denmark", value: "DK"},
  {description: "Djibouti", value: "DJ"},
  {description: "Dominica", value: "DM"},
  {description: "Dominican Republic (the)", value: "DO"},
  {description: "Ecuador", value: "EC"},
  {description: "Egypt", value: "EG"},
  {description: "El Salvador", value: "SV"},
  {description: "Equatorial Guinea", value: "GQ"},
  {description: "Eritrea", value: "ER"},
  {description: "Estonia", value: "EE"},
  {description: "Eswatini", value: "SZ"},
  {description: "Ethiopia", value: "ET"},
  {description: "Falkland Islands (the) [Malvinas]", value: "FK"},
  {description: "Faroe Islands (the)", value: "FO"},
  {description: "Fiji", value: "FJ"},
  {description: "Finland", value: "FI"},
  {description: "France", value: "FR"},
  {description: "French Guiana", value: "GF"},
  {description: "French Polynesia", value: "PF"},
  {description: "French Southern Territories (the)", value: "TF"},
  {description: "Gabon", value: "GA"},
  {description: "Gambia (the)", value: "GM"},
  {description: "Georgia", value: "GE"},
  {description: "Germany", value: "DE"},
  {description: "Ghana", value: "GH"},
  {description: "Gibraltar", value: "GI"},
  {description: "Greece", value: "GR"},
  {description: "Greenland", value: "GL"},
  {description: "Grenada", value: "GD"},
  {description: "Guadeloupe", value: "GP"},
  {description: "Guam", value: "GU"},
  {description: "Guatemala", value: "GT"},
  {description: "Guernsey", value: "GG"},
  {description: "Guinea", value: "GN"},
  {description: "Guinea-Bissau", value: "GW"},
  {description: "Guyana", value: "GY"},
  {description: "Haiti", value: "HT"},
  {description: "Heard Island and McDonald Islands", value: "HM"},
  {description: "Holy See (the)", value: "VA"},
  {description: "Honduras", value: "HN"},
  {description: "Hong Kong", value: "HK"},
  {description: "Hungary", value: "HU"},
  {description: "Iceland", value: "IS"},
  {description: "India", value: "IN"},
  {description: "Indonesia", value: "ID"},
  {description: "Iran (Islamic Republic of)", value: "IR"},
  {description: "Iraq", value: "IQ"},
  {description: "Ireland", value: "IE"},
  {description: "Isle of Man", value: "IM"},
  {description: "Israel", value: "IL"},
  {description: "Italy", value: "IT"},
  {description: "Jamaica", value: "JM"},
  {description: "Japan", value: "JP"},
  {description: "Jersey", value: "JE"},
  {description: "Jordan", value: "JO"},
  {description: "Kazakhstan", value: "KZ"},
  {description: "Kenya", value: "KE"},
  {description: "Kiribati", value: "KI"},
  {description: "Korea (the Democratic People's Republic of)", value: "KP"},
  {description: "Korea (the Republic of)", value: "KR"},
  {description: "Kuwait", value: "KW"},
  {description: "Kyrgyzstan", value: "KG"},
  {description: "Lao People's Democratic Republic (the)", value: "LA"},
  {description: "Latvia", value: "LV"},
  {description: "Lebanon", value: "LB"},
  {description: "Lesotho", value: "LS"},
  {description: "Liberia", value: "LR"},
  {description: "Libya", value: "LY"},
  {description: "Liechtenstein", value: "LI"},
  {description: "Lithuania", value: "LT"},
  {description: "Luxembourg", value: "LU"},
  {description: "Macao", value: "MO"},
  {description: "Madagascar", value: "MG"},
  {description: "Malawi", value: "MW"},
  {description: "Malaysia", value: "MY"},
  {description: "Maldives", value: "MV"},
  {description: "Mali", value: "ML"},
  {description: "Malta", value: "MT"},
  {description: "Marshall Islands (the)", value: "MH"},
  {description: "Martinique", value: "MQ"},
  {description: "Mauritania", value: "MR"},
  {description: "Mauritius", value: "MU"},
  {description: "Mayotte", value: "YT"},
  {description: "Mexico", value: "MX"},
  {description: "Micronesia (Federated States of)", value: "FM"},
  {description: "Moldova (the Republic of)", value: "MD"},
  {description: "Monaco", value: "MC"},
  {description: "Mongolia", value: "MN"},
  {description: "Montenegro", value: "ME"},
  {description: "Montserrat", value: "MS"},
  {description: "Morocco", value: "MA"},
  {description: "Mozambique", value: "MZ"},
  {description: "Myanmar", value: "MM"},
  {description: "Namibia", value: "NA"},
  {description: "Nauru", value: "NR"},
  {description: "Nepal", value: "NP"},
  {description: "Netherlands (the)", value: "NL"},
  {description: "New Caledonia", value: "NC"},
  {description: "New Zealand", value: "NZ"},
  {description: "Nicaragua", value: "NI"},
  {description: "Niger (the)", value: "NE"},
  {description: "Nigeria", value: "NG"},
  {description: "Niue", value: "NU"},
  {description: "Norfolk Island", value: "NF"},
  {description: "Northern Mariana Islands (the)", value: "MP"},
  {description: "Norway", value: "NO"},
  {description: "Oman", value: "OM"},
  {description: "Pakistan", value: "PK"},
  {description: "Palau", value: "PW"},
  {description: "Palestine, State of", value: "PS"},
  {description: "Panama", value: "PA"},
  {description: "Papua New Guinea", value: "PG"},
  {description: "Paraguay", value: "PY"},
  {description: "Peru", value: "PE"},
  {description: "Philippines (the)", value: "PH"},
  {description: "Pitcairn", value: "PN"},
  {description: "Poland", value: "PL"},
  {description: "Portugal", value: "PT"},
  {description: "Puerto Rico", value: "PR"},
  {description: "Qatar", value: "QA"},
  {description: "Republic of North Macedonia", value: "MK"},
  {description: "Romania", value: "RO"},
  {description: "Russian Federation (the)", value: "RU"},
  {description: "Rwanda", value: "RW"},
  {description: "Réunion", value: "RE"},
  {description: "Saint Barthélemy", value: "BL"},
  {description: "Saint Helena, Ascension and Tristan da Cunha", value: "SH"},
  {description: "Saint Kitts and Nevis", value: "KN"},
  {description: "Saint Lucia", value: "LC"},
  {description: "Saint Martin (French part)", value: "MF"},
  {description: "Saint Pierre and Miquelon", value: "PM"},
  {description: "Saint Vincent and the Grenadines", value: "VC"},
  {description: "Samoa", value: "WS"},
  {description: "San Marino", value: "SM"},
  {description: "Sao Tome and Principe", value: "ST"},
  {description: "Saudi Arabia", value: "SA"},
  {description: "Senegal", value: "SN"},
  {description: "Serbia", value: "RS"},
  {description: "Seychelles", value: "SC"},
  {description: "Sierra Leone", value: "SL"},
  {description: "Singapore", value: "SG"},
  {description: "Sint Maarten (Dutch part)", value: "SX"},
  {description: "Slovakia", value: "SK"},
  {description: "Slovenia", value: "SI"},
  {description: "Solomon Islands", value: "SB"},
  {description: "Somalia", value: "SO"},
  {description: "South Africa", value: "ZA"},
  {description: "South Georgia and the South Sandwich Islands", value: "GS"},
  {description: "South Sudan", value: "SS"},
  {description: "Spain", value: "ES"},
  {description: "Sri Lanka", value: "LK"},
  {description: "Sudan (the)", value: "SD"},
  {description: "Suriname", value: "SR"},
  {description: "Svalbard and Jan Mayen", value: "SJ"},
  {description: "Sweden", value: "SE"},
  {description: "Switzerland", value: "CH"},
  {description: "Syrian Arab Republic", value: "SY"},
  {description: "Taiwan (Province of China)", value: "TW"},
  {description: "Tajikistan", value: "TJ"},
  {description: "Tanzania, United Republic of", value: "TZ"},
  {description: "Thailand", value: "TH"},
  {description: "Timor-Leste", value: "TL"},
  {description: "Togo", value: "TG"},
  {description: "Tokelau", value: "TK"},
  {description: "Tonga", value: "TO"},
  {description: "Trinidad and Tobago", value: "TT"},
  {description: "Tunisia", value: "TN"},
  {description: "Turkey", value: "TR"},
  {description: "Turkmenistan", value: "TM"},
  {description: "Turks and Caicos Islands (the)", value: "TC"},
  {description: "Tuvalu", value: "TV"},
  {description: "Uganda", value: "UG"},
  {description: "Ukraine", value: "UA"},
  {description: "United Arab Emirates (the)", value: "AE"},
  {description: "United Kingdom of Great Britain and Northern Ireland (the)", value: "UK"},
  {description: "United States Minor Outlying Islands (the)", value: "UM"},
  {description: "United States of America (the)", value: "US"},
  {description: "Uruguay", value: "UY"},
  {description: "Uzbekistan", value: "UZ"},
  {description: "Vanuatu", value: "VU"},
  {description: "Venezuela (Bolivarian Republic of)", value: "VE"},
  {description: "Viet Nam", value: "VN"},
  {description: "Virgin Islands (British)", value: "VG"},
  {description: "Virgin Islands (U.S.)", value: "VI"},
  {description: "Wallis and Futuna", value: "WF"},
  {description: "Western Sahara", value: "EH"},
  {description: "Yemen", value: "YE"},
  {description: "Zambia", value: "ZM"},
  {description: "Zimbabwe", value: "ZW"},
  {description: "Åland Islands", value: "AX"},
];

let supported_currencies = {"AF":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP"]}},"AL":{"COMPANY":{"allowed_currencies":["ADP","AFA","ALL","DZD","EUR","ILS","JPY","MNT","PLN","THB"]},"PERSONAL":{"allowed_currencies":["ADP","AFA","ALL","CHW","DZD","EUR","ILS","JPY","MNT","PLN","THB"]}},"DZ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"AS":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"AD":{"COMPANY":{"allowed_currencies":["EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","USD"]}},"AO":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"AI":{"COMPANY":{"allowed_currencies":["USD","EUR","XCD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","XCD"]}},"AG":{"COMPANY":{"allowed_currencies":["USD","EUR","XCD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","XCD"]}},"AR":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"AM":{"COMPANY":{"allowed_currencies":["AUD","EUR","USD"]},"PERSONAL":{"allowed_currencies":["AUD","EUR","USD"]}},"AW":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"AU":{"COMPANY":{"allowed_currencies":["AUD","CAD","EUR","HKD","JPY","SGD","USD"]},"PERSONAL":{"allowed_currencies":["AUD","CAD","EUR","HKD","JPY","SGD","USD"]}},"AT":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"AZ":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"BS":{"COMPANY":{"allowed_currencies":["BSD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["BSD","EUR","GBP","USD"]}},"BH":{"COMPANY":{"allowed_currencies":["BHD","AED","EUR","GBP","SAR","USD"]},"PERSONAL":{"allowed_currencies":["BHD","AED","EUR","GBP","SAR","USD"]}},"BD":{"COMPANY":{"allowed_currencies":["BDT","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["BDT","EUR","GBP","USD"]}},"BB":{"COMPANY":{"allowed_currencies":["BBD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["BBD","EUR","GBP","USD"]}},"BY":{"COMPANY":{"allowed_currencies":["BYN","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["BYN","EUR","GBP","USD"]}},"BE":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"BZ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"BJ":{"COMPANY":{"allowed_currencies":["XOF","EUR","USD"]},"PERSONAL":{"allowed_currencies":["XOF","EUR","USD"]}},"BT":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"BO":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"BQ":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"BA":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["BAM","EUR","USD"]}},"BW":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"BR":{"COMPANY":{"allowed_currencies":["BRL","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["BRL","EUR","GBP","USD"]}},"IO":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"BN":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"BG":{"COMPANY":{"allowed_currencies":["BGN","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["BGN","EUR","GBP","USD"]}},"BF":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"BI":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CV":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"KH":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CM":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CA":{"COMPANY":{"allowed_currencies":["CAD","AUD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["CAD","AUD","EUR","GBP","USD"]}},"KY":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CF":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"TD":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CL":{"COMPANY":{"allowed_currencies":["CLP","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["CLP","EUR","GBP","USD"]}},"CN":{"COMPANY":{"allowed_currencies":["CNY","EUR","GBP","JPY","USD"]},"PERSONAL":{"allowed_currencies":["CNY","EUR","GBP","JPY","USD"]}},"CO":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"KM":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CD":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"CG":{"COMPANY":{"allowed_currencies":["USD"]},"PERSONAL":{"allowed_currencies":["USD"]}},"CK":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"CR":{"COMPANY":{"allowed_currencies":["CRC","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["CRC","EUR","GBP","USD"]}},"HR":{"COMPANY":{"allowed_currencies":["HRK","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["HRK","EUR","GBP","USD"]}},"CW":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"CY":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"CZ":{"COMPANY":{"allowed_currencies":["CZK","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["CZK","EUR","GBP","USD"]}},"CI":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"DK":{"COMPANY":{"allowed_currencies":["DKK","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["DKK","EUR","GBP","USD"]}},"DJ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"DM":{"COMPANY":{"allowed_currencies":["EUR","USD","XCD"]},"PERSONAL":{"allowed_currencies":["EUR","USD","XCD"]}},"DO":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"EC":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"EG":{"COMPANY":{"allowed_currencies":["EGP","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EGP","EUR","GBP","USD"]}},"SV":{"COMPANY":{"allowed_currencies":["USD","AUD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","AUD","EUR"]}},"GQ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"ER":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"EE":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SZ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"ET":{"COMPANY":{"allowed_currencies":["USD","ETB","EUR"]},"PERSONAL":{"allowed_currencies":["USD","ETB","EUR"]}},"FK":{"COMPANY":{"allowed_currencies":["EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","USD"]}},"FO":{"COMPANY":{"allowed_currencies":["DKK","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["DKK","EUR","GBP","USD"]}},"FJ":{"COMPANY":{"allowed_currencies":["FJD","EUR","USD"]},"PERSONAL":{"allowed_currencies":["FJD","EUR","USD"]}},"FI":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"FR":{"COMPANY":{"allowed_currencies":["EUR","JPY","USD"]},"PERSONAL":{"allowed_currencies":["EUR","JPY","USD"]}},"PF":{"COMPANY":{"allowed_currencies":["USD","AUD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","AUD","EUR"]}},"GA":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"GM":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"GE":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"DE":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"GH":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"GI":{"COMPANY":{"allowed_currencies":["GBP","EUR","USD"]},"PERSONAL":{"allowed_currencies":["GBP","EUR","USD"]}},"GR":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"GL":{"COMPANY":{"allowed_currencies":["DKK","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["DKK","EUR","GBP","USD"]}},"GD":{"COMPANY":{"allowed_currencies":["USD","EUR","XCD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","XCD"]}},"GU":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"GT":{"COMPANY":{"allowed_currencies":["USD","EUR","GTQ"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GTQ"]}},"GG":{"COMPANY":{"allowed_currencies":["GBP","EUR","USD"]},"PERSONAL":{"allowed_currencies":["GBP","EUR","USD"]}},"GN":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"GW":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"GY":{"COMPANY":{"allowed_currencies":["USD","EUR","GYD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GYD"]}},"HT":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"VA":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"HN":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"HK":{"COMPANY":{"allowed_currencies":["HKD","AUD","CAD","CHF","CNH","EUR","JPY","SGD","USD"]},"PERSONAL":{"allowed_currencies":["HKD","AUD","CAD","CHF","CNH","EUR","JPY","SGD","USD"]}},"HU":{"COMPANY":{"allowed_currencies":["HUF","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["HUF","EUR","GBP","USD"]}},"IS":{"COMPANY":{"allowed_currencies":["ISK","EUR","USD"]},"PERSONAL":{"allowed_currencies":["ISK","EUR","USD"]}},"IN":{"COMPANY":{"allowed_currencies":["INR","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["INR","EUR","GBP","USD"]}},"ID":{"COMPANY":{"allowed_currencies":["IDR","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["IDR","EUR","GBP","USD"]}},"IQ":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"IE":{"COMPANY":{"allowed_currencies":["EUR","AUD","CHF","USD"]},"PERSONAL":{"allowed_currencies":["EUR","AUD","CHF","USD"]}},"IM":{"COMPANY":{"allowed_currencies":["GBP","EUR","USD"]},"PERSONAL":{"allowed_currencies":["GBP","EUR","USD"]}},"IL":{"COMPANY":{"allowed_currencies":["ILS","AUD","EUR","USD"]},"PERSONAL":{"allowed_currencies":["ILS","AUD","EUR","USD"]}},"IT":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"JM":{"COMPANY":{"allowed_currencies":["JMD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["JMD","EUR","GBP","USD"]}},"JP":{"COMPANY":{"allowed_currencies":["JPY","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["JPY","EUR","GBP","USD"]}},"JE":{"COMPANY":{"allowed_currencies":["GBP","EUR","USD"]},"PERSONAL":{"allowed_currencies":["GBP","EUR","USD"]}},"JO":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"KZ":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"KE":{"COMPANY":{"allowed_currencies":["KES","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["KES","EUR","GBP","USD"]}},"KI":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"KR":{"COMPANY":{"allowed_currencies":["KRW","CAD","EUR","SGD","USD"]},"PERSONAL":{"allowed_currencies":["KRW","CAD","EUR","SGD","USD"]}},"KW":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP","KWD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP","KWD"]}},"KG":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"LA":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"LV":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"LB":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"LS":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"LR":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"LI":{"COMPANY":{"allowed_currencies":["CHF","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["CHF","EUR","GBP","USD"]}},"LT":{"COMPANY":{"allowed_currencies":["EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","USD"]}},"LU":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"MO":{"COMPANY":{"allowed_currencies":["EUR","GBP","HKD","MOP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","HKD","MOP","USD"]}},"MG":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"MW":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"MY":{"COMPANY":{"allowed_currencies":["MYR","AUD","CAD","EUR","SGD","USD"]},"PERSONAL":{"allowed_currencies":["MYR","AUD","CAD","EUR","SGD","USD"]}},"MV":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"ML":{"COMPANY":{"allowed_currencies":["XOF","EUR","USD"]},"PERSONAL":{"allowed_currencies":["XOF","EUR","USD"]}},"MT":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"MH":{"COMPANY":{"allowed_currencies":["USD"]},"PERSONAL":{"allowed_currencies":["USD"]}},"MR":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"MU":{"COMPANY":{"allowed_currencies":["USD","AUD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","AUD","EUR"]}},"YT":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP"]}},"MX":{"COMPANY":{"allowed_currencies":["MXN","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["MXN","EUR","GBP","USD"]}},"MD":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"MC":{"COMPANY":{"allowed_currencies":["EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","USD"]}},"MN":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"ME":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"MS":{"COMPANY":{"allowed_currencies":["USD","EUR","XCD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","XCD"]}},"MA":{"COMPANY":{"allowed_currencies":["MAD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["MAD","EUR","GBP","USD"]}},"MZ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"MM":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"NA":{"COMPANY":{"allowed_currencies":["USD","EUR","ZAR"]},"PERSONAL":{"allowed_currencies":["USD","EUR","ZAR"]}},"NP":{"COMPANY":{"allowed_currencies":["USD","EUR","NPR"]},"PERSONAL":{"allowed_currencies":["USD","EUR","NPR"]}},"NL":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"NC":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"NZ":{"COMPANY":{"allowed_currencies":["NZD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["NZD","EUR","GBP","USD"]}},"NI":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"NE":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"NG":{"COMPANY":{"allowed_currencies":["NGN","EUR","USD"]},"PERSONAL":{"allowed_currencies":["NGN","EUR","USD"]}},"NO":{"COMPANY":{"allowed_currencies":["NOK","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["NOK","EUR","GBP","USD"]}},"OM":{"COMPANY":{"allowed_currencies":["USD","AUD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","AUD","EUR"]}},"PK":{"COMPANY":{"allowed_currencies":["PKR","EUR","USD"]},"PERSONAL":{"allowed_currencies":["PKR","EUR","USD"]}},"PW":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"PA":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"PG":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"PY":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"PE":{"COMPANY":{"allowed_currencies":["PEN","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["PEN","EUR","GBP","USD"]}},"PH":{"COMPANY":{"allowed_currencies":["PHP","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["PHP","EUR","GBP","USD"]}},"PL":{"COMPANY":{"allowed_currencies":["PLN","EUR","USD"]},"PERSONAL":{"allowed_currencies":["PLN","EUR","USD"]}},"PT":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"PR":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"QA":{"COMPANY":{"allowed_currencies":["EUR","GBP","QAR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","QAR","USD"]}},"MK":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"RO":{"COMPANY":{"allowed_currencies":["RON","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["RON","EUR","GBP","USD"]}},"RU":{"COMPANY":{"allowed_currencies":["RUB","EUR","USD"]},"PERSONAL":{"allowed_currencies":["RUB","EUR","USD"]}},"RW":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"RE":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP"]}},"SH":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"KN":{"COMPANY":{"allowed_currencies":["USD","EUR","XCD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","XCD"]}},"LC":{"COMPANY":{"allowed_currencies":["EUR","USD","XCD"]},"PERSONAL":{"allowed_currencies":["EUR","USD","XCD"]}},"PM":{"COMPANY":{"allowed_currencies":["EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","USD"]}},"VC":{"COMPANY":{"allowed_currencies":["EUR","USD","XCD"]},"PERSONAL":{"allowed_currencies":["EUR","USD","XCD"]}},"WS":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SM":{"COMPANY":{"allowed_currencies":["EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["EUR","GBP","USD"]}},"ST":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SA":{"COMPANY":{"allowed_currencies":["USD","EUR","SAR"]},"PERSONAL":{"allowed_currencies":["USD","EUR","SAR"]}},"SN":{"COMPANY":{"allowed_currencies":["XOF","EUR","USD"]},"PERSONAL":{"allowed_currencies":["XOF","EUR","USD"]}},"RS":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SC":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP"]}},"SL":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"SG":{"COMPANY":{"allowed_currencies":["SGD","CNH","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["SGD","CNH","EUR","GBP","USD"]}},"SX":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SK":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SI":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SB":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"SO":{"COMPANY":{"allowed_currencies":["USD"]},"PERSONAL":{"allowed_currencies":["USD"]}},"ZA":{"COMPANY":{"allowed_currencies":["ZAR","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["ZAR","EUR","GBP","USD"]}},"ES":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"LK":{"COMPANY":{"allowed_currencies":["LKR","AUD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["LKR","AUD","EUR","GBP","USD"]}},"SR":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"SE":{"COMPANY":{"allowed_currencies":["SEK","EUR","USD"]},"PERSONAL":{"allowed_currencies":["SEK","EUR","USD"]}},"CH":{"COMPANY":{"allowed_currencies":["CHF","EUR","GBP","JPY","TRY","USD"]},"PERSONAL":{"allowed_currencies":["CHF","EUR","GBP","JPY","TRY","USD"]}},"TW":{"COMPANY":{"allowed_currencies":["USD","EUR","JPY"]},"PERSONAL":{"allowed_currencies":["USD","EUR","JPY"]}},"TJ":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"TZ":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"TH":{"COMPANY":{"allowed_currencies":["THB","EUR","SGD","USD"]},"PERSONAL":{"allowed_currencies":["THB","EUR","SGD","USD"]}},"TL":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"TG":{"COMPANY":{"allowed_currencies":["XOF","EUR","USD"]},"PERSONAL":{"allowed_currencies":["XOF","EUR","USD"]}},"TO":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"TT":{"COMPANY":{"allowed_currencies":["TTD","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["TTD","EUR","GBP","USD"]}},"TN":{"COMPANY":{"allowed_currencies":["USD","EUR","TND"]},"PERSONAL":{"allowed_currencies":["USD","EUR","TND"]}},"TR":{"COMPANY":{"allowed_currencies":["TRY","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["TRY","EUR","GBP","USD"]}},"TM":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"TC":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"TV":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"UG":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"UA":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP","UAH"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP","UAH"]}},"AE":{"COMPANY":{"allowed_currencies":["AED","GBP","USD"]},"PERSONAL":{"allowed_currencies":["AED","GBP","USD"]}},"US":{"COMPANY":{"allowed_currencies":["USD","EUR","SGD"]},"PERSONAL":{"allowed_currencies":["USD","EUR","SGD"]}},"UY":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"UZ":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"VU":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"VE":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"VN":{"COMPANY":{"allowed_currencies":["VND","EUR","GBP","USD"]},"PERSONAL":{"allowed_currencies":["VND","EUR","GBP","USD"]}},"VG":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"VI":{"COMPANY":{"allowed_currencies":["EUR","USD"]},"PERSONAL":{"allowed_currencies":["EUR","USD"]}},"YE":{"COMPANY":{"allowed_currencies":["USD"]},"PERSONAL":{"allowed_currencies":["USD"]}},"ZM":{"COMPANY":{"allowed_currencies":["USD","EUR","GBP"]},"PERSONAL":{"allowed_currencies":["USD","EUR","GBP"]}},"ZW":{"COMPANY":{"allowed_currencies":["USD","EUR"]},"PERSONAL":{"allowed_currencies":["USD","EUR"]}},"UK":{"COMPANY":{"allowed_currencies":["GBP","EUR","SEK","USD"]},"PERSONAL":{"allowed_currencies":["GBP","EUR","SEK","USD"]}}};

let banking_fields = {
  IN: {
    INR: {
      COMMON: {
        "bank_name": {
            "field_id": "1",
            "field_type": "Text",
            "label": "Bank Name",
            "description": "",
            "watermark": "e.g. Central Bank of India",
            "required": "True",
            "min_length": "0",
            "max_length": "70",
            "regex": "^[A-Za-z0-9\\s\\*\\#\\^\\&\\=\\[\\]\\{\\}\\|\\?\\`\\~\\;\\.\\,\\-]+$",
            "list": {
                "support_other": "True",
                "list_items": [
                    {
                        "description": "AU Small Finance Bank",
                        "value": "AU Small Finance Bank"
                    },
                    {
                        "description": "Allahabad Bank",
                        "value": "Allahabad Bank"
                    },
                    {
                        "description": "Andhra Bank",
                        "value": "Andhra Bank"
                    },
                    {
                        "description": "Bandhan Bank",
                        "value": "Bandhan Bank"
                    },
                    {
                        "description": "Axis Bank",
                        "value": "Axis Bank"
                    },
                    {
                        "description": "Bank of Baroda",
                        "value": "Bank of Baroda"
                    },
                    {
                        "description": "Bank of Maharashtra",
                        "value": "Bank of Maharashtra"
                    },
                    {
                        "description": "Canara Bank",
                        "value": "Canara Bank"
                    },
                    {
                        "description": "Bharat Co-operative Bank Mumbai Ltd",
                        "value": "Bharat Cooperative Bank Mumbai Ltd"
                    },
                    {
                        "description": "Central Bank of India",
                        "value": "Central Bank of India"
                    },
                    {
                        "description": "Citibank",
                        "value": "Citibank"
                    },
                    {
                        "description": "City Union Bank",
                        "value": "City Union Bank"
                    },
                    {
                        "description": "Corporation Bank",
                        "value": "Corporation Bank"
                    },
                    {
                        "description": "BNP Paribas",
                        "value": "BNP Paribas"
                    },
                    {
                        "description": "DCB Bank",
                        "value": "DCB Bank"
                    },
                    {
                        "description": "Dena Bank",
                        "value": "Dena Bank"
                    },
                    {
                        "description": "DBS Bank",
                        "value": "DBS Bank"
                    },
                    {
                        "description": "Federal Bank",
                        "value": "Federal Bank"
                    },
                    {
                        "description": "HDFC Bank",
                        "value": "HDFC Bank"
                    },
                    {
                        "description": "Deutsche Bank",
                        "value": "Deutsche Bank"
                    },
                    {
                        "description": "IDBI Bank",
                        "value": "IDBI Bank"
                    },
                    {
                        "description": "HSBC",
                        "value": "HSBC"
                    },
                    {
                        "description": "Indian Overseas Bank",
                        "value": "Indian Overseas Bank"
                    },
                    {
                        "description": "ICICI Bank Ltd",
                        "value": "ICICI Bank Ltd"
                    },
                    {
                        "description": "IDFC Bank Ltd",
                        "value": "IDFC Bank Ltd"
                    },
                    {
                        "description": "Jammu and Kashmir Bank",
                        "value": "Jammu and Kashmir Bank"
                    },
                    {
                        "description": "Karnataka Bank",
                        "value": "Karnataka Bank"
                    },
                    {
                        "description": "IndusInd Bank Ltd",
                        "value": "IndusInd Bank Ltd"
                    },
                    {
                        "description": "Karur Vysya Bank",
                        "value": "Karur Vysya Bank"
                    },
                    {
                        "description": "PayTM Payments Bank",
                        "value": "PayTM Payments Bank"
                    },
                    {
                        "description": "Kotak Mahindra Bank",
                        "value": "Kotak Mahindra Bank"
                    },
                    {
                        "description": "Lakshmi Vilas Bank",
                        "value": "Lakshmi Vilas Bank"
                    },
                    {
                        "description": "Maharashtra Bank",
                        "value": "Maharashtra Bank"
                    },
                    {
                        "description": "RBL Bank",
                        "value": "RBL Bank"
                    },
                    {
                        "description": "RBL Bank Ratnakar Bank",
                        "value": "RBL Bank Ratnakar Bank"
                    },
                    {
                        "description": "Oriental Bank of Commerce",
                        "value": "Oriental Bank of Commerce"
                    },
                    {
                        "description": "Punjab National Bank",
                        "value": "Punjab National Bank"
                    },
                    {
                        "description": "Saraswat Bank",
                        "value": "Saraswat Bank"
                    },
                    {
                        "description": "Shamrao Vithal Co-operative Bank",
                        "value": "Shamrao Vithal Cooperative Bank"
                    },
                    {
                        "description": "South Indian Bank",
                        "value": "South Indian Bank"
                    },
                    {
                        "description": "Standard Chartered Bank",
                        "value": "Standard Chartered Bank"
                    },
                    {
                        "description": "State Bank of Bikaner and Jaipur",
                        "value": "State Bank of Bikaner and Jaipur"
                    },
                    {
                        "description": "State Bank of Hyderabad",
                        "value": "State Bank of Hyderabad"
                    },
                    {
                        "description": "State Bank of India",
                        "value": "State Bank of India"
                    },
                    {
                        "description": "State Bank of Patiala",
                        "value": "State Bank of Patiala"
                    },
                    {
                        "description": "State Bank of Travancore",
                        "value": "State Bank of Travancore"
                    },
                    {
                        "description": "Syndicate Bank",
                        "value": "Syndicate Bank"
                    },
                    {
                        "description": "Tamilnad Mercantile Bank",
                        "value": "Tamilnad Mercantile Bank"
                    },
                    {
                        "description": "UCO Bank",
                        "value": "UCO Bank"
                    },
                    {
                        "description": "United Bank of India",
                        "value": "United Bank of India"
                    },
                    {
                        "description": "Vijaya Bank",
                        "value": "Vijaya Bank"
                    },
                    {
                        "description": "Other",
                        "value": "-1"
                    },
                    {
                        "description": "Yes Bank",
                        "value": "Yes Bank"
                    }
                ]
            }
        },
        "account_name": {
            "field_id": "2",
            "field_type": "Text",
            "label": "Account Holder Name",
            "description": "",
            "watermark": "e.g.  Inc.",
            "required": "True",
            "min_length": "0",
            "max_length": "100",
            "regex": "^[a-zA-Z0-9& ]+$"
        },
        "account_number": {
            "field_id": "3",
            "field_type": "Text",
            "label": "Account Number",
            "description": "(Up to 20 digits)",
            "watermark": "e.g. 123456789101112",
            "required": "True",
            "min_length": "0",
            "max_length": "20",
            "regex": "^[0-9a-zA-Z]+$"
        },
        "bank_number": {
            "field_id": "5",
            "field_type": "Text",
            "label": "IFSC code",
            "description": "IFSC bank  number. 11 characters (first 4 digits in capital letters). Please refer to the &amp;lt;a href=&quot;https://user./Link?a=bank-guide&quot; target=&quot;_blank&quot;&amp;gt;bank account registration guide&amp;lt;/a&amp;gt; for additional details",
            "watermark": "e.g. ABCD0123456",
            "required": "True",
            "min_length": "11",
            "max_length": "11",
            "regex": "^[A-Z]{4}[A-Z0-9]{7}$"
        },
        "account_tax_number": {
            "field_id": "13",
            "field_type": "Text",
            "label": "PAN",
            "description": "Please fill in your 10 character PAN number (Permanent Account Number). If you don’t yet have a PAN code, please &amp;lt;a href=&quot;https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html&quot; target=&quot;_blank&quot;&amp;gt;click here&amp;lt;/a&amp;gt; to register for one.",
            "watermark": "e.g. AAACA1234A",
            "required": "True",
            "min_length": "10",
            "max_length": "10",
            "regex": "^(?!(AAAPA2234A))([A-Z]{3})([P|C|F|H|A|B|T|E]{1}[A-Z]{1}[0-9]{4}[A-Z]{1})$"
        },
        "account_type": {
            "field_id": "18",
            "field_type": "Text",
            "label": "Account Type",
            "description": "This field should specify your Account Type: Saving or Current",
            "watermark": "'Current' or 'Savings'",
            "required": "True",
            "min_length": "0",
            "max_length": "1",
            "regex": "^\\d$",
            "list": {
                "support_other": "False",
                "list_items": [
                    {
                        "description": "Savings",
                        "value": "2"
                    },
                    {
                        "description": "Current",
                        "value": "1"
                    }
                ]
            }
        }
      }
    }
  },
  CA: {}
};

let supported_currencies = {}



let payee_type_field = {
  "payee.type": {
    required: true,
    label: "Legal Entity",
    list: {
      list_items: [
        {description: "Individual", value: "INDIVIDUAL"},
        {description: "Company", value: "COMPANY"}
      ]
    }
  },
}

let payee_company_fields = {
  "payee.company.legal_type": {
    required: true,
    label: "Legal Type",
    list: {
      list_items: [
        {description: "Public Company", value: "PUBLIC"},
        {description: "Private Company", value: "PRIVATE"},
        {description: "Sole Proprietorship", value: "SOLE_PROPRIETORSHIP"},
        {description: "LLC", value: "LLC"},
        {description: "LLP", value: "LLP"},        
        {description: "Nonprofit", value: "NON_PROFIT"},
        {description: "LTD", value: "LTD"},        
        {description: "INC", value: "INC"},        
      ]
    }
  },
  "payee.company.name": {
    required: true,
    label: "Legal Company Name",
  },
  "payee.company.url": {
    required: true,
    label: "Website",
  },
  "payee.company.incorporation_country": {
    required: true,
    label: "Country of Incorporation",
    list: {list_items: global_countries},
  },
}

let payee_contact_fields = {
  "payee.contact.first_name": {
    required: true,
    label: "First Name",
  },
  "payee.contact.last_name": {
    required: true,
    label: "Last Name",

  },
  "payee.contact.date_of_birth": {
    required: true,
    label: "Date of Birth",
  },
}

let payee_address_fields = {
  "payee.address.address_line_1": {
    required: true,
    label: "Address Line 1",
  },
  "payee.address.address_line_2": {
    required: false,
    label: "Address Line 2",
  },
  "payee.address.city": {
    required: true,
    label: "City",
  },
  "payee.address.state": {
    required: true,
    label: "State",
  },

  "payee.address.country": {
    required: true,
    label: "Country",
  },

  "payee.address.zip_code": {
    required: true,
    label: "Zip/Postal Code",
  }
}

let initial_banking_fields = {
  "payout_method.bank_account_type": {
    required: true,
    label: "Bank Account Ownership",
    list: {
      list_items: [
        {description: "Personal", value: "PERSONAL"},
        {description: "Company", value: "COMPANY"}
      ]
    }
  },
  "payout_method.country": {
    required: true,
    label: "Banking Country",
    list: {list_items: global_countries},
  },
}


ReactDOM.render(
  <BankingForm 
    payee_type_field={payee_type_field}
    banking_fields={banking_fields}
    payee_company_fields={payee_company_fields}
    payee_contact_fields={payee_contact_fields}
    payee_address_fields={payee_address_fields}
  />, document.getElementById("root")
);
