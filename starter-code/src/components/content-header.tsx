import { useDispatch, useSelector } from "react-redux";
import iconPlus from "../assets/icon-plus.svg";
import { expand } from "../slices/apps";
import { filterByStatus } from "../slices/invoice";
import { RootState } from "../store";

const ContentHeader = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.invoices.filteredList);

  return (
    <div className="sticky top-0 bg-white dark:bg-[#151625] flex items-center w-full px-2">
      <div>
        <h1>Invoices</h1>
        <span>
          {lists.length > 0
            ? `There are ${lists.length} total invoices`
            : "No Invoices"}
        </span>
      </div>
      <div className="ml-auto flex items-center">
        <label className="mr-2" htmlFor="filter">
          Filter by status
        </label>
        <select
          className="bg-white dark:bg-[#151625] mr-2 bottom-1"
          name="filter"
          placeholder="Filter by status"
          onChange={(e) => dispatch(filterByStatus(e.target.value))}
        >
          <option value="">All</option>
          <option value="draft">Draft</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
        <div
          onClick={() => {
            dispatch(expand());
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
