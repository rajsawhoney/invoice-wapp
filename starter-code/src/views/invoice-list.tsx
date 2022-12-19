import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import deleteIcon from "../assets/icon-delete.svg";
import editIcon from "../assets/icon-check.svg";
import { deleteInvoice, populateEditData } from "../slices/invoice";
import { expand } from "../slices/apps";
import EmptyScreen from "../components/empty-page/empty-page";

const colorsMap = {
  paid: "green",
  pending: "orange",
  draft: "gray",
};

export default function InvoiceList() {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.invoices.filteredList);

  const handleEdit = (item: InvoiceDataType) => {
    dispatch(populateEditData({ data: item, status: true }));
    dispatch(expand());
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete invoice?")) {
      dispatch(deleteInvoice(id));
      setTimeout(() => {
        alert("Invoice delete");
      }, 1000);
    }
  };
  if (lists.length == 0) return <EmptyScreen />;

  return (
    <div className="flex flex-col w-full">
      {lists.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white dark:bg-[#1f213a] p-5 my-2 rounded shadow-sm"
        >
          <p className="text-gray-400">
            <strong>{item.id}</strong>
          </p>
          <p className="text-gray-400">
            {new Date(item.createdAt).toDateString()}
          </p>
          <p className="text-gray-400">{item.clientName}</p>
          <p>
            <strong>£{item.total}</strong>
          </p>
          <p
            style={{
              color: colorsMap[item.status as "paid"],
            }}
            className="font-medium"
          >
            ● {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </p>
          <p className="cursor-pointer" onClick={() => handleEdit(item)}>
            <img
              className="bg-gray-400 dark:bg-[#1f213a] w-[20px] p-[1px]"
              src={editIcon}
              alt="edit-icon"
            />
          </p>
          <p className="cursor-pointer" onClick={() => handleDelete(item.id)}>
            <img src={deleteIcon} alt="delete-icon" />
          </p>
        </div>
      ))}
    </div>
  );
}
