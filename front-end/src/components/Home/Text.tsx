import "./Home.scss";
import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { deleteData } from "./DataAction"

interface Props {
    id: string | any,
    text: string | any,
}

const Text: React.FC<Props> = props => {
  const { id, text } = props;

  const deleteText = async(id: string) => {
    try {
        console.log(id)
        await deleteData(id);
    } catch (error) {
        console.warn(`error of deleteText`, error);
    }
  }

  return (
    <div className="text-section">
        <div className="text">
            <p>{text}</p>
        </div>
        <button onClick={() => deleteText(id)}>
            <BsFillTrashFill />
        </button>
    </div>
  )
}

export default Text