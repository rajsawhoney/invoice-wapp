const invoiceItemInputs = [
  {
    id: 1,
    marginY: "10px",
    fields: [
      {
        id: 1,
        value: "name",
        label: "Item Name",
        required: true,
        rest: {
          name: "name",
          type: "text",
          placeholder: "Item Name ",
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
        value: "quantity",
        label: "Quantity",
        required: true,
        rest: {
          name: "quantity",
          type: "number",
          placeholder: "Item quantity ",
        },
      },
      {
        id: 2,
        value: "price",
        label: "Price",
        required: true,
        rest: {
          name: "price",
          type: "number",
          placeholder: "Item price ",
        },
      },
      {
        id: 3,
        value: "total",
        label: "Total",
        required: true,
        rest: {
          name: "total",
          type: "number",
          disabled: true,
          placeholder: "Item Total ",
        },
      },
    ],
  },
];

export default invoiceItemInputs;
