export default function Stats({items}) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your package list</em>
      </p>
    );

  const numItems = items.length;
  console.log(numItems);
  const numPackage = items.filter((item) => item.package).length;
  const percentage = Math.round((numPackage / numItems) * 100);
  return (
    <footer className="stats">
      <h1>Stats</h1>
      <em>
        {percentage === 100
          ? "You got everything! Ready to go!"
          : `You have ${numItems} items on your list, and you already packed ${numPackage} (${percentage}%)`}
      </em>
    </footer>
  );
}
