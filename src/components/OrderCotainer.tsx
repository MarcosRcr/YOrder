import { FaTrash } from "react-icons/fa";
import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderCotainerProps = {
  order: OrderItem[];
  removeItem: (id:MenuItem['id']) => void;
};
export const OrderCotainer = ({ order,removeItem }: OrderCotainerProps) => {
  return (
    <div>
      <div className="space-y-3 mt-5">
        {
          order.map((item) => (
            <div key={item.id} className="text-lg flex justify-between items-center border-t py-4 last-of-type:border-b">
              <div className="">
                <p>
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-bold">
                  Quantity: {item.quantity} - Total:{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>

              <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 size-8 rounded-full flex items-center justify-center">
                <FaTrash className="text-white" />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
