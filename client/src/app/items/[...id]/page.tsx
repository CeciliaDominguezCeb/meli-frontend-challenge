import ItemDetail from "../../../../components/item-detail/item.detail";
import { getItem } from "../../../../services/items";
import classes from "./items.module.css";
import { Breadcrums } from "../../../../components/breadcrums/breadcrums";



export interface ItemProps {
  params: {
    id: string;
  };
}

export default async function ItemPage({ params }: Readonly<ItemProps>) {
  const response = await getItem(params.id);

  if (!response) {
   'algo fallo'
  }

  const data = response;
  
  if (!data) {
    return <p>i</p>;
  }
 
  const  item  = data.item
  const categories = data.categories



  return (
    <>
      {!!categories?.length && (
        <Breadcrums breadcrumbs={categories} />
      )}
       <main>{item && <ItemDetail item={item} />}</main>
    </>
  );
}