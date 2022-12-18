import iconPlus from "../assets/icon-plus.svg";

const ContentHeader = () => {
  return (
    <div className="flex items-center w-full">
      <div>
        <h1>Invoices</h1>
        <span>No Invoices</span>
      </div>
      <div className="ml-auto flex items-center">
        <label className="mr-2" htmlFor="filter">
          Filter by status
        </label>
        <select
          className="dark:bg-[#151625] mr-2"
          name="filter"
          placeholder="Filter by status"
        >
          <option value="1">Draft</option>
          <option value="2">Pending</option>
          <option value="2">Paid</option>
        </select>
        <div
          onClick={() => {
            const selector = document.querySelector("#create-invoice-id");
            if (selector) {
              selector.setAttribute("transform", "translateX(590px)");
            }
          }}
          className="flex items-center py-1 px-2 rounded-full bg-[#7c5df9] text-white cursor-pointer"
        >
          <div className="p-[5px] bg-white rounded-full">
            <img className="w-[8px] h-[8px" src={iconPlus} alt="plus" />
          </div>
          <span className="pl-1 font-medium">New Invoice</span>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
