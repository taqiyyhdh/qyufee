import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import type { ICart, IMenu } from "../../../types/order";
import { getMenus } from "../../../services/menu.services";
import styles from './CreateOrder.module.css';
import Button from "../../ui/Button";

const CreateOrder = () => {
  const [menus, setMenus] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [carts, setCarts] = useState<ICart[]>([]);

  useEffect(() => {
        const fetchOrder = async () => {
          const result = await getMenus(searchParams.get('category') as string);
          setMenus(result.data);
        };
        fetchOrder();
    }, [searchParams.get('category')]);

  return (
    <main className={styles.create}>
      <div className={styles.menu}>
        <h1>Explore Our Best Menu</h1>
        <div className={styles.list}>
          {menus.map((item: IMenu) => (
            <div className={styles.item} key={item.id}>
              <img
                src={item.image_url}
                alt={item.name}
                className={styles.image}
              />
              <h2>{item.name}</h2>
              <div className={styles.bottom}>
                <p className={styles.price}>${item.price}</p>
                <Button  onClick={() => {}}>Order</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CreateOrder;