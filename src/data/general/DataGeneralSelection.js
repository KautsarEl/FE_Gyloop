


const selectBoolean = [
    {
        value: "Yes",
        label: "Yes"
    },
    {
        value: "No",
        label: "No"
    },
]

const selectActivationStatus = [
    {
        value: "Active",
        label: "Active"
    },
    {
        value: "Suspend",
        label: "Suspend"
    },
    {
        value: "Inactive",
        label: "Inactive"
    },
    {
        value: "Deleted",
        label: "Deleted"
    },

]

const selectOrganizationType = [
  {
      value: "Company",
      label: "Company"
  },
  {
      value: "Association",
      label: "Association"
  },
  {
    value: "Cooperative",
    label: "Cooperative"
  },
  {
      value: "Foundation",
      label: "Foundation"
  },
  {
      value: "NPO",
      label: "Non Profit Organization"
  },
  {
      value: "NGO",
      label: "Non Government Organization"
  },
  {
      value: "Trade Union",
      label: "Trade Union"
  },
  {
      value: "Educational Institution",
      label: "Educational Institution"
  },
  {
      value: "Religious Organization",
      label: "Religious Organization"
  },
  {
      value: "Government Agency",
      label: "Government Agency"
  },
];

const selectPrefixOrganization = [
  {
    value: "PT",
    label: "PT"
  },
  {
    value: "CV",
    label: "CV"
  },
]

const selectIndustryFocus = [
  {
    value: "PT",
    label: "PT"
  },
  {
    value: "CV",
    label: "CV"
  },
]

const selectEmployeeSize = [
  { value: "1S", label: "1 - 20" },
  { value: "2S", label: "21 - 50" },
  { value: "3S", label: "51 - 100" },
  { value: "4S", label: "101 - 200" },
  { value: "5S", label: "201 - 500" },
  { value: "6S", label: "501 - 1.000" },
  { value: "7S", label: "1,001 - 5,000" },
  { value: "8S", label: "5,001 - 10,000" },
  { value: "9S", label: "10,001 - 50.000" },
  { value: "10S", label: "50,001 - 100.000" },
  { value: "11S", label: "100,000+" },
];

const selectOfficeType = [
  { value: "HO", label: "Head Office" },
  { value: "BO", label: "Branch Office" },
  { value: "RO", label: "Representative Office" },
  { value: "SO", label: "Site Office" },
  { value: "RMO", label: "Regional Office" },
  { value: "LO", label: "Liaison Office" },
  { value: "CO", label: "Corporate Office" },
  { value: "FO", label: "Field Office" },
  { value: "PO", label: "Project Office" },
  { value: "DO", label: "Distribution Office" },
  { value: "MO", label: "Manufacturing Office" },
  { value: "RDO", label: "Research & Development Office" },
  { value: "WO", label: "Warehouse Office" },
  { value: "EO", label: "Executive Office" },
  { value: "AO", label: "Administrative Office" },
];


const selectTimeZone = [
  { value: "GMT-12", label: "GMT-12 (International Date Line West)" },
  { value: "GMT-11", label: "GMT-11 (Midway Island, Samoa)" },
  { value: "GMT-10", label: "GMT-10 (Hawaii)" },
  { value: "GMT-9", label: "GMT-9 (Alaska)" },
  { value: "GMT-8", label: "GMT-8 (Pacific Time - US & Canada)" },
  { value: "GMT-7", label: "GMT-7 (Mountain Time - US & Canada)" },
  { value: "GMT-6", label: "GMT-6 (Central Time - US & Canada, Mexico City)" },
  { value: "GMT-5", label: "GMT-5 (Eastern Time - US & Canada, Bogota, Lima)" },
  { value: "GMT-4", label: "GMT-4 (Atlantic Time - Canada, Caracas, La Paz)" },
  { value: "GMT-3", label: "GMT-3 (Brasilia, Buenos Aires, Georgetown)" },
  { value: "GMT-2", label: "GMT-2 (Mid-Atlantic)" },
  { value: "GMT-1", label: "GMT-1 (Cape Verde Islands, Azores)" },
  { value: "GMT+0", label: "GMT+0 (London, Dublin, Lisbon, Casablanca)" },
  { value: "GMT+1", label: "GMT+1 (Berlin, Brussels, Madrid, Paris)" },
  { value: "GMT+2", label: "GMT+2 (Cairo, Johannesburg, Athens, Istanbul)" },
  { value: "GMT+3", label: "GMT+3 (Moscow, Riyadh, Nairobi)" },
  { value: "GMT+4", label: "GMT+4 (Abu Dhabi, Dubai, Baku)" },
  { value: "GMT+5", label: "GMT+5 (Islamabad, Karachi, Tashkent)" },
  { value: "GMT+6", label: "GMT+6 (Dhaka, Almaty, Colombo)" },
  { value: "GMT+7", label: "GMT+7 (Jakarta, Bangkok, Hanoi)" },
  { value: "GMT+8", label: "GMT+8 (Beijing, Singapore, Kuala Lumpur, Perth)" },
  { value: "GMT+9", label: "GMT+9 (Tokyo, Seoul, Pyongyang)" },
  { value: "GMT+10", label: "GMT+10 (Sydney, Melbourne, Guam)" },
  { value: "GMT+11", label: "GMT+11 (Solomon Islands, New Caledonia)" },
  { value: "GMT+12", label: "GMT+12 (Auckland, Wellington, Fiji)" },
  { value: "GMT+13", label: "GMT+13 (Samoa, Tonga)" },
  { value: "GMT+14", label: "GMT+14 (Line Islands)" },
];


const selectSuffixOrganization = [
  {
    value: "Tbk",
    label: "Tbk"
  },
  {
    value: "Persero",
    label: "(Persero)"
  },
]

const selectLicenseTypeServer = [
    {
        value: "Server-Starter",
        label: "Server-Starter"
    },
    {
        value: "Server-Compact",
        label: "Server-Compact"
    },
    {
        value: "Server-Enterprise",
        label: "Server-Enterprise"
    },
    {
        value: "Server-Enterprise-Pro",
        label: "Server-Enterprise-Pro"
    },

]

const selectLicenseTypeUser = [
  {
      value: "User-Standard",
      label: "User-Standard"
  },
  {
      value: "User-Volunteer",
      label: "User-Volunteer"
  },
  {
      value: "User-Functional",
      label: "User-Functional"
  },
  {
      value: "User-Professional",
      label: "User-Professional"
  },

]

const selectSystemType = [
    {
      value: "Development",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Development
        </>
      ),
    },
    {
      value: "Testing",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Testing
        </>
      ),
    },
    {
      value: "Training",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Training
        </>
      ),
    },
    {
      value: "Production",
      label: (
        <>
          <i className=" fars-database" style={{ marginRight: 5 }}></i>Production
        </>
      ),
    },
  ];

  const selectPeriodBilling = [
    {
        value: "Monthly",
        label: "Monthly"
    },
    {
        value: "Yearly",
        label: "Yearly"
    },

]

  export { 
    selectBoolean, 
    selectSystemType, 
    selectLicenseTypeServer, 
    selectActivationStatus, 
    selectLicenseTypeUser, 
    selectOrganizationType,
    selectPrefixOrganization,
    selectSuffixOrganization,
    selectIndustryFocus,
    selectEmployeeSize,
    selectOfficeType,
    selectTimeZone,
    selectPeriodBilling,
  };