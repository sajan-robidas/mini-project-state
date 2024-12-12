import {useState} from "react";

const initialItems = [
  {id: 1, description: "Passports", quantity: 2, package: false},
  {id: 2, description: "Socks", quantity: 12, package: true},
  {id: 3, description: "charge", quantity: 1, package: false},
];

export default function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div className="logos">
      <p className="logo">Logo</p>
      <h1 className="logo-title">far away</h1>
    </div>
  );
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {description, quantity, package: false, id: Date.now()};
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="forms" onSubmit={handlerSubmit}>
      <h1>Form</h1>
      <p>What di you need for your trip</p>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
function PackingList() {
  return (
    //
    <div>
      <ul className="Lists">
        <h1>Lists</h1>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({item}) {
  return (
    <li className="items">
      <span style={item.package ? {textDecoration: "line-through"} : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>X</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <h1>Stats</h1>
      <em>You have 6 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
