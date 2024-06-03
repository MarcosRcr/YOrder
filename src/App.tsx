import { MenuCard } from "./components/MenuCard";
import { OrderCotainer } from "./components/OrderCotainer";
import { TipForm } from "./components/TipForm";
import { TotalCard } from "./components/TotalCard";
import { menuItems } from "./data/db";

import useOrder from "./hooks/useOrder";

function App() {
  console.log(menuItems);
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className=" bg-orange-400 py-5">
        <h1 className="text-center text-4xl font-black">YOrder</h1>
      </header>
      <main className=" max-w-full mx-10 py-20 grid md:grid-cols-2 gap-10">
        <div className="">
          <h2 className="text-3xl font-black">Menu</h2>
          <div className="space-y-4 mt-10">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-xl space-y-10">
          <h2 className="font-black text-3xl">Consume</h2>
          {order.length > 0 ? (
            <>
              <OrderCotainer order={order} removeItem={removeItem} />
              <TipForm setTip={setTip} tip={tip} />
              <TotalCard order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-slate-300">Your order is empty</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
