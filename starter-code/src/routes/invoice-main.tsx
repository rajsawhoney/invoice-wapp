import ContentHeader from "../components/content-header";
import emptyPage from "../assets/illustration-empty.svg";
export default function InvoiceMain() {
  return (
    <>
      <ContentHeader />
      <div className="w-full min-h-[50vh] max-h-[100vh] overflow-y-auto flex justify-center">
        <EmptyScreen />
      </div>
    </>
  );
}

const EmptyScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-auto">
      <img src={emptyPage} alt="no-invoice" />
      <br />
      <h2 className="font-semibold text-xl">There is nothing here</h2>
      <p>
        Create an invoice by clicking the <br />
        <strong>New Invoice</strong> button and get started
      </p>
    </div>
  );
};
