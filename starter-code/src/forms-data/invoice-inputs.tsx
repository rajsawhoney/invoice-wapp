const invoiceInputs = [
  {
    id: 1,
    marginY: "10px",
    fields: [
      {
        id: 1,
        value: "firstName",
        label: "First Name",
        required: true,
        rest: {
          name: "firstName",
          type: "text",
          placeholder: "Your first name",
        },
      },
      {
        id: 2,
        value: "lastName",
        label: "Last Name",
        required: true,
        rest: {
          name: "lastName",
          type: "text",
          placeholder: "Your last name",
        },
      },
    ],
  },
  {
    id: 2,
    marginY: "10px",
    fields: [
      {
        id: 1,
        value: "email",
        label: "First Email",
        required: true,
        rest: {
          name: "email",
          type: "email",
          placeholder: "Your email address",
        },
      },
      {
        id: 2,
        value: "phone",
        label: "Phone Number",
        required: true,
        rest: {
          name: "phone",
          type: "tel",
          placeholder: "Your phone number",
        },
      },
    ],
  },
  {
    id: 3,
    marginY: "10px",
    fields: [
      {
        id: 1,
        value: "address",
        label: "Your address",
        required: true,
        rest: {
          name: "address",
          type: "text",
          placeholder: "Your company address",
        },
      },
      {
        id: 2,
        value: "website",
        label: "Your website",
        rest: {
          name: "website",
          type: "url",
          placeholder: "https://yourwebsite.com",
          required: false,
        },
      },
    ],
  },

  {
    id: 4,
    marginY: "25px",
    fields: [
      {
        id: 1,
        value: "bankName",
        label: "Your bank name",
        required: true,
        rest: {
          name: "bankName",
          type: "text",
          placeholder: "Your bank name",
        },
      },
      {
        id: 2,
        value: "accountOwner",
        label: "Account holder's name",
        required: true,
        rest: {
          name: "accountOwner",
          type: "text",
          placeholder: "Account holder's name",
        },
      },
      {
        id: 3,
        value: "accountNumber",
        label: "Account Number",
        required: true,
        rest: {
          type: "tel",
          name: "accountNumber",
          placeholder: "Account Number",
        },
      },
    ],
  },

  {
    id: 5,
    marginY: "10px",
    fields: [
      {
        id: 1,
        value: "customerName",
        label: "Customer Name",
        required: true,
        rest: {
          name: "customerName",
          type: "text",
          placeholder: "Customer name",
        },
      },
      {
        id: 2,
        value: "customerAddress",
        label: "Customer Address",
        required: true,
        rest: {
          name: "customerAddress",
          type: "text",
          placeholder: "Customer address",
        },
      },
    ],
  },

  {
    id: 6,
    marginY: "10px",
    fields: [
      {
        id: 1,
        value: "invoiceNumber",
        label: "Invoice Number",
        required: true,
        rest: {
          name: "invoiceNumber",
          type: "text",
          placeholder: "Invoice number",
        },
      },
      {
        id: 2,
        value: "invoiceDate",
        label: "Invoice Date",
        required: true,
        rest: {
          name: "invoiceDate",
          type: "date",
          placeholder: "Invoice date",
        },
      },
      {
        id: 3,
        value: "expiryDate",
        label: "Invoice Due Date",
        required: true,
        rest: {
          name: "expiryDate",
          type: "date",
          placeholder: "Invoice due date",
        },
      },
    ],
  },
];
export default invoiceInputs;