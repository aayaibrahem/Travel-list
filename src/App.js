import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Packinglist from "./components/Packinglist";
import Stats from "./components/Stats";

function App() {
  const [items, setitems] = useState([]);
  function handleadditems(item) {
    setitems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function toggleitem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleclear() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the list items "
    );
    if (confirmed) setitems([]);
  }

  return (
    <>
      <Logo />
      <Form onadd={handleadditems} />
      <Packinglist
        items={items}
        onDeleteItem={handleDeleteItem}
        ontoggle={toggleitem}
        handleclear={handleclear}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
