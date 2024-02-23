import { ItemDetail, Items } from "../interfaces/items"

 async function getItems(search: string):Promise<Items | undefined> {
    try{
        const response = await fetch(`http://localhost:8080/api/items?q=${search}`)
        const data = await response.json()
        return {
            ...data,
            categories: data.categories,
            items: data.items.slice(0, 4)
        }
        
    }catch(error){
        console.log(error)
    }
 }

 async function getItem(id: Readonly<string>): Promise<ItemDetail | undefined> {
    try {
      const response = await fetch(`http://localhost:8080/api/items/${id}`);
      const  data  = await response.json();
    
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  

  export { getItems, getItem }