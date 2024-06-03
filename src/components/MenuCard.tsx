import type { MenuItem } from "../types";
interface MenuItemProps {
  item: MenuItem,
  addItem: (item:MenuItem) => void
}
export const MenuCard = ({item, addItem}:MenuItemProps) => {
  return (
    <button 
    onClick={() => addItem(item)}
    className="flex justify-between px-3 py-2 w-full 
                        border-2 border-amber-500 hover:bg-amber-100 rounded-2xl 
                        transition-all cursor-pointer">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </button>
  )
}
