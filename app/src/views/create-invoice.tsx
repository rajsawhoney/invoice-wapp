import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/buttons/Button";
import AddInvoiceItem from "../components/invoice-item/add-invoice-item";
import { collapse } from "../slices/apps";
import {
  createInvoice,
  populateEditData,
  updateInvoice,
} from "../slices/invoice";
import { RootState } from "../store";
import generateID from "../utils/generateId";

const CreateInvoice = () => {
  const dispatch = useDispatch();
  const editData = useSelector(
    (state: RootState) => state.invoices.editableInvoice
  );
  const editing = useSelector((state: RootState) => state.invoices.editing);

  const invoiceStatus = React.useRef<"draft" | "pending" | "paid">("draft");

  const [items, setItems] = React.useState<Item[]>([]);

  const createInvoiceRef = React.useRef<HTMLDivElement>(null);
  const expanded = useSelector((state: RootState) => state.apps.expanded);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InvoiceDataType>();

  React.useEffect(() => {
    if (editData) {
      const {
        id,
        createdAt,
        paymentDue,
        description,
        paymentTerms,
        status,
        senderAddress,
        clientAddress,
        clientEmail,
        clientName,
        total,
      } = editData;
      setValue("id", id);
      setValue("createdAt", createdAt);
      setValue("paymentDue", paymentDue);
      setValue("description", description);
      setValue("paymentTerms", paymentTerms);
      setValue("status", status);
      setValue("senderAddress", senderAddress);
      setValue("clientAddress", clientAddress);
      setValue("clientEmail", clientEmail);
      setValue("clientName", clientName);
      setValue("total", total);
      setItems(editData.items);
      invoiceStatus.current = status;
    } else {
      reset();
      setItems([]);
    }
  }, [editData]);

  const onSubmit: SubmitHandler<InvoiceDataType> = (data) => {
    if (items.length === 0)
      return setError("items", {
        message: "At least one invoice item is required.",
      });

    const total = items.reduce(function (sum: number, item: Item) {
      return sum + item.total;
    }, 0);

    const formData = {
      ...data,
      status: invoiceStatus.current,
      total,
      id: editing ? data.id : generateID(),
      items,
    };
    if (editing) {
      dispatch(updateInvoice(formData));
    } else dispatch(createInvoice(formData));
    dispatch(collapse());
  };

  React.useEffect(() => {
    if (expanded) {
      createInvoiceRef.current?.style.setProperty(
        "transform",
        "translateX(510px)"
      );
    } else {
      createInvoiceRef.current?.style.setProperty(
        "transform",
        "translateX(-400px)"
      );
    }
  }, [expanded]);

  const renderError = (message: string | undefined) => {
    return (
      message && (
        <p className="text-red-600" role="alert">
          {message}
        </p>
      )
    );
  };

  return (
    <div
      ref={createInvoiceRef}
      style={{
        left: "-400px",
        transition: "all 1.2s",
      }}
      className="absolute overflow-x-hidden left-0 pt-2 min-w-[400px] w-[70%] flex flex-col bg-white dark:bg-[#151625] rounded-r-lg shadow-md"
    >
      <h1 className="text-[1.4rem] pl-5 py-3 sticky top-[-10px] bg-white dark:bg-[#151625]">
        New Invoice
      </h1>
      {/* invoice form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mt-2 px-5 max-h-[100vh] h-[100vh] overflow-y-auto pb-[10rem]"
      >
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
          />
          {renderError(errors.senderAddress?.street?.message)}
        </div>

        <div className={`grid grid-cols-3 gap-2 my-2`}>
          <div className="flex flex-col">
            <label
              className="invoice-form-label"
              htmlFor={"senderAddress.city"}
            >
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
            />
            {renderError(errors.senderAddress?.city?.message)}
          </div>
          <div className="flex flex-col">
            <label
              className="invoice-form-label"
              htmlFor={"senderAddress.postCode"}
            >
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
            />
            {renderError(errors.senderAddress?.postCode?.message)}
          </div>

          <div className="flex flex-col">
            <label
              className="invoice-form-label"
              htmlFor={"senderAddress.country"}
            >
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
            />
            {renderError(errors.senderAddress?.country?.message)}
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
          />
          {renderError(errors.clientName?.message)}
        </div>

        <div className="flex flex-col">
          <label className="invoice-form-label" htmlFor={"clientEmail"}>
            Client's Email
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            type={"email"}
            {...register("clientEmail", {
              required: {
                value: true,
                message: `Street address is required.`,
              },
            })}
          />
          {renderError(errors.clientEmail?.message)}
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
          />
          {renderError(errors.clientAddress?.street?.message)}
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
            />
            {renderError(errors.clientAddress?.city?.message)}
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
            />
            {renderError(errors.clientAddress?.postCode?.message)}
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
            />
            {renderError(errors.clientAddress?.country?.message)}
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-2 my-2`}>
          <div className="flex flex-col">
            <label className="invoice-form-label" htmlFor={"createdAt"}>
              Issue date
            </label>
            <input
              className="invoice-form-input dark:bg-[#1f213a]"
              type={"date"}
              {...register("createdAt", {
                required: {
                  value: true,
                  message: `Issue date is required.`,
                },
              })}
            />
            {renderError(errors.createdAt?.message)}
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
            />
            {renderError(errors.paymentTerms?.message)}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="invoice-form-label" htmlFor={"description"}>
            Project description
          </label>
          <input
            className="invoice-form-input dark:bg-[#1f213a]"
            {...register("description", {
              required: {
                value: true,
                message: `Project description is required.`,
              },
            })}
          />
          {renderError(errors.description?.message)}
        </div>

        {/* Items Adder */}
        <AddInvoiceItem
          items={items}
          setItems={setItems}
          clearErrors={clearErrors}
        />
        {renderError(errors.items?.message)}
      </form>
      {/* ends invoice form */}

      {/* footer */}
      <div className="left-0 flex items-center fixed bottom-[60px] bg-[#151625] p-4">
        <Button
          onClick={() => {
            dispatch(collapse());
            dispatch(populateEditData({ data: null, status: false }));
          }}
          title="Discard"
          backgroundColor="white"
          color="gray"
        />
        <div className="flex items-center justify-between ml-10">
          <Button
            title="Save as Draft"
            backgroundColor="#373b54"
            color="white"
            style={{ marginRight: "10px" }}
            onClick={() => {
              invoiceStatus.current = "draft";
              handleSubmit(onSubmit)();
            }}
          />
          <Button
            onClick={() => {
              invoiceStatus.current = "paid";
              handleSubmit(onSubmit)();
            }}
            title="Save & Send"
            backgroundColor="#7759ef"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
