import "./Home.scss";
import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

interface Props {
    id: string,
    text: string,
}

const Text: React.FC<Props> = props => {
  const { id, text } = props;
  return (
    <div className="text-section">
        <div className="text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dignissimos deleniti maiores? Provident tempore et repudiandae eos repellendus! Quidem voluptates quos enim. Deserunt necessitatibus, ipsa alias non nesciunt quibusdam accusantium.</p>
        </div>
        <button>
            <BsFillTrashFill />
        </button>
    </div>
  )
}

export default Text