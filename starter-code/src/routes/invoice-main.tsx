import ContentHeader from "../components/content-header";
import { InvoiceList } from "../views";

export default function InvoiceMain() {
  return (
    <>
      <ContentHeader />
      <div className="w-full min-h-[50vh] max-h-[100vh] overflow-y-auto flex justify-center">
        <InvoiceList />
      </div>
    </>
  );
}
