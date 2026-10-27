import { Product } from "../../types/Product";

interface ItemListProps {
  items: Product[];
  renderCallback: (item: Product) => React.ReactNode;
}

const ItemList = ({ items, renderCallback }: ItemListProps) => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          return (
            <li key={`${index}`}>
              {renderCallback(item)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ItemList;