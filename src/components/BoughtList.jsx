function BoughtList({ items, cancelItem }) {
  return (
    <div>
      <h2>산 물건들</h2>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => cancelItem(item.id)}>취소</button>
        </li>
      ))}
      <br />
    </div>
  );
}

export default BoughtList;
