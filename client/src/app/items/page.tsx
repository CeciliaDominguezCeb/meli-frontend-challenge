import Card from "../../../components/card/card";
import { Item, Items } from "../../../interfaces/items";
import { getItems } from "../../../services/items";
import { Breadcrums } from "../../../components/breadcrums/breadcrums";


interface ItemsProps {
  searchParams: {
    search: string;
  };
}

export default async function ItemsPage({
  searchParams,
}: Readonly<ItemsProps>) {
  if (!searchParams.search) {
    return (
      <p>dmsknsf</p>
    );
  }

  const response = await getItems(searchParams.search);
 

  if (!response) {
    return <p>error</p>;
  }
  const data =  response;
  
  if (!data) {
    return <p>no hay</p>;
  }

  const items:Item[]= data.items ?? [];
  
  const categories = data.categories;

  return (
    <>
      <main >
        { !!categories?.length && (
          <Breadcrums breadcrumbs={categories} />

        )}
        { <Card items={items} /> }
      </main>
    </>
  );
}