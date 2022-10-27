import "./Home.scss";
import _ from "lodash";
import Text from './Text';
import React, { useEffect, useRef, useState } from 'react'
import { AiFillFolderAdd } from "react-icons/ai";
import { getData, addData, updateData } from "./DataAction";

interface Data {
    _id?: string,
    text?: string,
}

const Home: React.FC = () => {
  const [listening, setListening] = useState<boolean>(false);
  const [todos, setTodos] = useState<Data[] | []>();
  const [text, setText] = useState<string>("");

  const addText = async() => {
    try {
        if(text === "") {
            alert(`Please write your text!`)
            return;
        }
        const data = await addData(text);
        setListening(!listening);
    } catch (error) {
        console.log(`error of addText`, error)
    }
  }


  useEffect(() => {
      (async () => {
          try {
              const { data } = await getData();
              console.log(data);
              _.isArray(data) ? setTodos(data) : setTodos([]);
          } catch (error) {
              console.warn(`home error`, error);
          }
      })()
  }, [listening]);


  return (
    <div className='home-section'>
        <div className="home-section__container">
            <h1>To do list</h1>
            <div className="home-section__container__inputSection">
                <input type="text" placeholder="write your list ..." onChange={e => setText(e.target.value)} />
                <button onClick={addText}>
                    <AiFillFolderAdd />
                </button>
            </div>
            <div className="home-section__container__outSection">
                {/* <Text text='' id="" /> */}
                {/* {_.map(todos?, (el, idx) => {})} */}
                {todos?.map((el, idx) => <Text key={idx} text={el.text} id={el._id} />)}
            </div>
        </div>
    </div>
  )
}

export default Home