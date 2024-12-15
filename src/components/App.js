import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   {id: 1, description: "Passports", quantity: 2, package: false},
//   {id: 2, description: "Socks", quantity: 12, package: true},
//   {id: 3, description: "charge", quantity: 1, package: false},
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handlerAddItem(item) {
    setItems((items) => [...items, item]);
    // console.log(items);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? {...item, package: !item.package} : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to Delete all items "
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="container">
      <Logo />
      <Form onAddItems={handlerAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
