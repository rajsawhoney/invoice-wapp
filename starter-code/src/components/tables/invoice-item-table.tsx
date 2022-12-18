import deleteIcon from "../../assets/icon-delete.svg";
import editIcon from "../../assets/icon-check.svg";
export default function InvoiceItemTable(props: {
  items: Item[];
  handleEdit: Function;
  handleDelete: Function;
}) {
  const { items, handleEdit, handleDelete } = props;

  return (
    <div className="w-full py-5 bg-white dark:bg-[#151625] ">
      <div className="grid grid-cols-6 gap-2">
        <span className="px-2 py-1">Item</span>
        <span className="px-2 py-1">Price</span>
        <span className="px-2 py-1">Quantity</span>
        <span className="px-2 py-1">Total</span>
        <span className="px-2 py-1">Edit</span>
        <span className="px-2 py-1">Delete</span>
      </div>
      {items.map((item) => (
        <div key={item.id} className="grid grid-cols-6 gap-2 my-2">
          <span className="py-1 items-center justify-center flex px-3 bg-white dark:bg-[#1f2139]">
            {item.name.slice(0, 8)}...
          </span>
          <span className="py-1 items-center justify-center flex px-3 bg-white dark:bg-[#1f2139]">
            {item.price}
          </span>
          <span className="py-1 items-center justify-center flex px-3 bg-white dark:bg-[#1f2139]">
            {item.quantity}
          </span>
          <span className="py-1 items-center justify-center flex px-3 bg-white dark:bg-[#1f2139]">
            {item.total}
          </span>
          <span
            className="p-2 cursor-pointer items-center justify-center flex bg-white dark:bg-[#1f2139]"
            onClick={() => handleEdit(item)}
          >
            <img src={editIcon} alt="edit-icon" />
          </span>
          <span
            className="p-2 cursor-pointer items-center justify-center flex bg-white dark:bg-[#1f2139]"
            onClick={() => handleDelete(item.id)}
          >
            <img src={deleteIcon} alt="delete-icon" />
          </span>
        </div>
      ))}
    </div>
  );
}
