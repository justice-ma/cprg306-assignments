import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-96 mt-4">
        <h2 className="text-4xl font-bold">Shopping List</h2>
      </div>
      <ItemList/>
    </main>
  );
}
