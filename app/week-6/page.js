import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-115 mt-4">
        <h2 className="text-4xl font-bold m-2">Shopping List</h2>
      </div>
      <ItemList/>
    </main>
  );
}
