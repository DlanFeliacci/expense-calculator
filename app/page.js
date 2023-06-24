"use client";
import { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  onSnapshot,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const [items, setItems] = useState([
    // { name: 'Coffee', price: 4.95 },
    // { name: 'Movie', price: 24.95 },
    // { name: 'candy', price: 7.95 },
  ]);

  const currency = [
    { value: "dollar", text: "Dollar", symbol: "$" },
    { value: "euro", text: "Euro", symbol: "€" },
    { value: "ruble", text: "Ruble", symbol: "₽" },
    { value: "dinar", text: "Dinar", symbol: "DA" },
  ];
  const [selected, setSelected] = useState(currency[0].value);
  const handleChange = (event) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
  };

  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [total, setTotal] = useState(0);

  // Add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem])
      try {
        const docRef = await addDoc(collection(db, "items"), {
          name: newItem.name.trim(),
          price: newItem.price,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setNewItem({ name: "", price: "" });
    }
  };

  // Read items from database
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);
      // Read total from itemsArr
      const calculateTotal = () => {
        const totalPrice = itemsArr.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        setTotal(totalPrice);
      };
      calculateTotal();
      return () => unsubscribe;
    });
  }, []);

  // Delete item from database
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-10 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <h1 className="text-2xl sm:text-4xl p-4 text-center">Calculateur de dépenses</h1>
        {/* Chose Currency */}
        <div className="bg-slate-800 p-4 text-white my-6  max-w-[180px] m-auto rounded">
          <div className="m-auto flex flex-col justify-center">
            <label className="text-sm text-center pb-2">
              Select a currency
            </label>
            <select
              value={selected}
              onChange={handleChange}
              className="p-2 text-black items-center text-center rounded font-semibold"
            >
              {currency.map((iter) => (
                <option
                  className="bg-slate-100 font-semibold"
                  key={iter.value}
                  value={iter.symbol}
                >
                  {iter.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* List of items */}
        <div className="bg-slate-800 p-4 rounded-lg">
          <form className="grid grid-cols-6 items-center text-black">
            <input
              className="col-span-3 p-3 border border-r-slate-800 focus:outline-none bg-gray-200 focus:bg-white"
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              value={newItem.name}
              type="text"
              name=""
              placeholder="Article"
            />
            <input
              className="col-span-2 p-3 border border-l-slate-800 focus:outline-none bg-gray-200 focus:bg-white"
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              value={newItem.price}
              type="number"
              name=""
              placeholder="Montant"
            />
            <button
              onClick={addItem}
              className="text-white bg-slate-950 hover:bg-slate-900 p-2 text-2xl font-bold"
              type="submit"
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li
                key={id}
                className="my-4 w-full flex justify-between bg-slate-950 text-white"
              >
                <div className="p-3 w-full flex justify-between">
                  <span className="capitalize">{item.name}</span>
                  <span>
                    {item.price} {selected}
                  </span>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="group text-red-900 p-4 border-l-2 border-slate-900 hover:border-slate-700 hover:bg-slate-900 w-16"
                >
                  <div className="flex justify-center">
                    <TiDelete
                      className="group-hover:scale-[1.3] duration-200"
                      size={20}
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {items.length < 1 ? (
          ""
        ) : (
          <div className="flex justify-between p-3 font-bold text-xl">
            <span>Total</span>
            <span>
              {total} {selected}{" "}
            </span>
          </div>
        )}
      </div>
      <div>Built by Adlene Feliachi</div>
    </main>
  );
}
