import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/buttons/Button";
import AddInvoiceItem from "../components/invoice-item/add-invoice-item";

const CreateInvoice = () => {
  const [items, setItems] = React.useState<Item[]>([
    {
      name: "Banner Design",
      quantity: 1,
      price: 156.0,
      total: 156.0,
      id: 1,
    },
    {
      name: "Email Design",
      quantity: 2,
      price: 200.0,
      total: 400.0,
      id: 2,
    },
  ]);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<InvoiceDataType>({
    defaultValues: {
      id: "XM9141",
      createdAt: "2021-08-21",
      paymentDue: "2021-09-20",
      description: "Graphic Design",
      paymentTerms: 30,
      clientName: "Alex Grim",
      clientEmail: "alexgrim@mail.com",
      status: "pending",
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
      },
      clientAddress: {
        street: "84 Church Way",
        city: "Bradford",
        postCode: "BD1 9PB",
        country: "United Kingdom",
      },
      total: 556.0,
    },
  });

  const onSubmit: SubmitHandler<InvoiceDataType> = (data) => {
    if (items.length === 0)
      return setError("items", {
        message: "At least one invoice item is required.",
      });
    console.log("Data:", { ...data, items });
  };

  return (
    <div className="relative overflow-x-hidden left-0 px-4 pt-2 pb-[10rem] min-w-[400px] w-[60%] flex flex-col max-h-[100vh] h-[100vh] overflow-y-auto bg-white dark:bg-[#151625] rounded-r-lg shadow-md">
      <h1 className="text-[1.4rem] py-3 sticky top-[-10px] bg-white dark:bg-[#151625]">
        New Invoice
      </h1>
      {/* invoice form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-2">
        {/* Sender Details */}
        <span className="text-[#7759ef]">Bill From</span>
        <div className="flex flex-col">
          <label
            className="invoice-form-label"
            htmlFor={"senderAddress.street"}
          >
            Street Address
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            {...register("senderAddress.street", {
              required: {
                value: true,
                message: `Street address is required.`,
              },
            })}
            name="senderAddress.street"
          />
        </div>

        <div className={`grid grid-cols-3 gap-2 my-2`}>
          <div className="flex flex-col">
            <label className="invoice-form-label" htmlFor={"city"}>
              City
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("senderAddress.city", {
                required: {
                  value: true,
                  message: `City is required.`,
                },
              })}
              name="city"
            />
          </div>
          <div className="flex flex-col">
            <label className="invoice-form-label" htmlFor={"postCode"}>
              Post Code
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("senderAddress.postCode", {
                required: {
                  value: true,
                  message: `Post Code is required.`,
                },
              })}
              name="postCode"
            />
          </div>

          <div className="flex flex-col">
            <label className="invoice-form-label" htmlFor={"country"}>
              Country
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("senderAddress.country", {
                required: {
                  value: true,
                  message: `Country is required.`,
                },
              })}
              name="country"
            />
          </div>
        </div>

        {/* Client Details */}
        <span className="text-[#7759ef]">Bill To</span>
        <div className="flex flex-col">
          <label className="invoice-form-label" htmlFor={"clientName"}>
            Client's Name
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            {...register("clientName", {
              required: {
                value: true,
                message: `Street address is required.`,
              },
            })}
            name="clientName"
          />
        </div>

        <div className="flex flex-col">
          <label className="invoice-form-label" htmlFor={"clientEmail"}>
            Client's Email
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            {...register("clientEmail", {
              required: {
                value: true,
                message: `Street address is required.`,
              },
            })}
            name="clientEmail"
          />
        </div>

        <div className="flex flex-col">
          <label
            className="invoice-form-label"
            htmlFor={"clientAddress.street"}
          >
            Street Address
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            {...register("clientAddress.street", {
              required: {
                value: true,
                message: `Street address is required.`,
              },
            })}
            name="clientAddress.street"
          />
        </div>

        <div className={`grid grid-cols-3 gap-2 my-2`}>
          <div className="flex flex-col">
            <label
              className="invoice-form-label"
              htmlFor={"clientAddress.city"}
            >
              City
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("clientAddress.city", {
                required: {
                  value: true,
                  message: `City is required.`,
                },
              })}
              name="clientAddress"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="invoice-form-label"
              htmlFor={"clientAddress.postCode"}
            >
              Post Code
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("clientAddress.postCode", {
                required: {
                  value: true,
                  message: `Post Code is required.`,
                },
              })}
              name="clientAddress.postCode"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="invoice-form-label"
              htmlFor={"clientAddress.country"}
            >
              Country
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("clientAddress.country", {
                required: {
                  value: true,
                  message: `Country is required.`,
                },
              })}
              name="clientAddress.country"
            />
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-2 my-2`}>
          <div className="flex flex-col">
            <label className="invoice-form-label" htmlFor={"createdAt"}>
              Issue date
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("createdAt", {
                required: {
                  value: true,
                  message: `Issue date is required.`,
                },
              })}
              name="createdAt"
            />
          </div>
          <div className="flex flex-col">
            <label className="invoice-form-label" htmlFor={"paymentTerms"}>
              Payment Terms
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              {...register("paymentTerms", {
                required: {
                  value: true,
                  message: `Payment terms is required.`,
                },
              })}
              name="paymentTerms"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="invoice-form-label" htmlFor={"description"}>
            Payment Terms
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            {...register("description", {
              required: {
                value: true,
                message: `Project description is required.`,
              },
            })}
            name="description"
          />
        </div>

        {/* Items Adder */}
        <AddInvoiceItem
          items={items}
          setItems={setItems}
          clearErrors={clearErrors}
        />
        {errors.items && (
          <p className="text-red-600" role="alert">
            {errors.items?.message}
          </p>
        )}
      </form>
      {/* ends invoice form */}

      {/* footer */}
      <div className="left-[8%] flex items-center fixed bottom-0 bg-[#151625] p-4">
        <Button title="Discard" backgroundColor="white" color="gray" />
        <div className="flex items-center justify-between ml-10">
          <Button
            title="Save as Draft"
            backgroundColor="#373b54"
            color="white"
            style={{ marginRight: "10px" }}
          />
          <Button title="Save & Send" backgroundColor="#7759ef" color="white" />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
