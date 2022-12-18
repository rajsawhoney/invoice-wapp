import data from "../../data.json";
export default function InvoiceList() {
  const colorsMap = {
    paid: "green",
    pending: "orange",
    draft: "black",
  };
  return (
    <div className="flex flex-col w-full">
      {data.map((item) => (
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
          >
            ● {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </p>
        </div>
      ))}
    </div>
  );
}
