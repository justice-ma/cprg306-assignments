export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <section>
      <ul>
        <li className="bg-[#1D293D] p-2 m-4 mx-auto w-96 h-19">
          <h1 className="text-2xl font-bold ">{name}</h1>
          <p className="text-[18px]">Buy {quantity} in {category}</p>
        </li>
      </ul>
    </section>
  );
}
