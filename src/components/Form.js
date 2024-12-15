import {useState} from "react";
export default function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {description, quantity, package: false, id: Date.now()};
    // console.log(newItem);
    onAddItems(newItem);
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
