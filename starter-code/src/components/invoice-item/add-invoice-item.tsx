import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { invoiceItemInputs } from "../../forms-data";
import InvoiceItemTable from "../tables/invoice-item-table";
import iconPlus from "../../assets/icon-plus.svg";

interface AddInvoiceItemInterface {
  items: Item[];
  setItems: Function;
  clearErrors: Function;
}
export default function AddInvoiceItem(props: AddInvoiceItemInterface) {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const { items, setItems, clearErrors } = props;
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Item>({
    defaultValues: {
      name: "",
      price: 0,
      quantity: 0,
      total: 0,
    },
  });

  const onSubmit: SubmitHandler<Item> = (data) => {
    if (isEditing) {
      const index = items.findIndex((item) => item.id === data.id);
      if (index > -1) {
        items.splice(index, 1, data);
        setItems([...items]);
      } else {
        setItems((prev: Item[]) => [{ ...data, id: prev.length }, ...prev]);
      }
      setIsEditing(false);
    } else {
      setItems((prev: Item[]) => [{ ...data, id: prev.length }, ...prev]);
    }
    setValue("quantity", 0);
    setValue("total", 0);
    setValue("price", 0);
    setValue("name", "");
    clearErrors("items");
  };

  const handleEdit = (item: Item) => {
    setIsEditing(true);
    const { id, total, price, quantity, name } = item;
    setValue("id", id);
    setValue("total", total);
    setValue("quantity", quantity);
    setValue("price", price);
    setValue("name", name);
  };

  const handleDelete = (id: number) => {
    setItems((prev: Item[]) => prev.filter((item) => item.id !== id));
  };

  const quantityWatch = watch("quantity");
  const priceWatch = watch("price");

  React.useEffect(() => {
    setValue("total", quantityWatch * priceWatch);
  }, [quantityWatch, priceWatch]);

  return (
    <>
      <div className="py-3">
        <span className="text-gray-600 font-medium">Item List</span>
        <InvoiceItemTable
          items={items}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        {invoiceItemInputs.map((form) => {
          return (
            <div
              key={form.id}
              className={`md:grid grid-cols-${form.fields.length} gap-2 my-[${form.marginY}]`}
            >
              {form.fields.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <label
                    className="invoice-form-label"
                    htmlFor={item.rest.name}
                  >
                    {item.label}
                  </label>
                  <input
                    className="invoice-form-input dark:bg-[#1f213a]"
                    {...register(item.value as "quantity", {
                      required: {
                        value: !!item.required,
                        message: `${
                          item.value.charAt(0).toUpperCase() +
                          item.value.slice(1)
                        } is required.`,
                      },
                      min: {
                        value: 1,
                        message: `${
                          item.value.charAt(0).toUpperCase() +
                          item.value.slice(1)
                        } must be greater than zero`,
                      },
                    })}
                    {...item.rest}
                  />
                  {errors[item.value as "quantity"] && (
                    <p className="text-red-600" role="alert">
                      {errors[item.value as "quantity"]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          );
        })}
        <div
          onClick={handleSubmit(onSubmit)}
          className="bg-gray-300 dark:bg-[#1f2139] flex items-center justify-center cursor-pointer rounded-full py-2 mt-4 w-full"
        >
          <img
            className="w-[8px] h-[8px text-white"
            src={iconPlus}
            alt="plus"
            color="white"
          />
          <p className="pl-2">{isEditing ? "Save Changes" : "Add New Item"}</p>
        </div>
      </div>
    </>
  );
}
