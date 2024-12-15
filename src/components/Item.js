export default function Item({item, onDeleteItem, onToggleItem}) {
  return (
    <li className="items">
      <input
        type="checkbox"
        value={item.package}
        onClick={() => onToggleItem(item.id)}
      />
      <span style={item.package ? {textDecoration: "line-through"} : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>X</button>
    </li>
  );
}
