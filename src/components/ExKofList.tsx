import { FC } from "react";
import { KoversKofItem } from "../types/types";


interface ExKofListProps {
  list: KoversKofItem[];
}


const ExKofList = ({ list }: ExKofListProps) => {
  console.log(list);

  return (
    <div>
      {
        list.map((item, idx) => (
          <div key={idx}>
            <div>{item.name}</div>
            <div>{item.value}</div>
          </div>
        )
        )
      }
    </div>
  )
}

export default ExKofList;