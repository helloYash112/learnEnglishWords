import { disc } from "./disc"
import { Item } from "./Item"
export function ItemContainer(){

    return<div className="mt-15  mb-15 grid grid-cols-4 gap-4 ">
      {
        disc.map((obj,idx)=>{
            return <li key={idx}>
                < ol>
                  <Item img={obj.img} word={obj.name} description={obj.desc}></Item>
                </ol>
            </li>
        })
      }
    </div>
}