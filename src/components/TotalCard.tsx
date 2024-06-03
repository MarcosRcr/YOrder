import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type TotalCardProps = {
  order: OrderItem[]; 
  tip: number;
  placeOrder: () => void;
}
export const TotalCard = ({order, tip, placeOrder}:TotalCardProps) => {
  const subtotalAmount = useMemo(() => {
    return order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [order]);

  const tipAmount = useMemo(() => {
    return subtotalAmount * tip;
  }, [subtotalAmount, tip]);

  const totalAmount = useMemo(() => {
    return subtotalAmount + tipAmount;
  }, [subtotalAmount, tipAmount]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-2xl">Total & Tips</h2>
        <p>
          Subtotal: <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Tips: <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total: <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button className="w-full border-2 border-emerald-600 px-3 py-1 rounded-lg 
                      hover:bg-emerald-300 disabled:opacity-25 disabled/hover:bg-white" 
                      disabled={totalAmount===0}
                      onClick={()=> placeOrder()}
                      >
        Save Order
      </button>
    </>
  );
};
