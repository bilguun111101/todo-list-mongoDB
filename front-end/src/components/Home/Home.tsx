import "./Home.scss";
import React from 'react'
import Text from './Text';
import { AiFillFolderAdd } from "react-icons/ai";

const Home: React.FC = () => {
  return (
    <div className='home-section'>
        <div className="home-section__container">
            <h1>To do list</h1>
            <div className="home-section__container__inputSection">
                <input type="text" name="" id="" placeholder="write your list ..." />
                <button>
                    <AiFillFolderAdd />
                </button>
            </div>
            <div className="home-section__container__outSection">
                <Text text='' id="" />
            </div>
        </div>
    </div>
  )
}

export default Home