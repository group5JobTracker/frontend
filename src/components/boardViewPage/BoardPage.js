import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import Context from '../../context/context';
import AddSection from './AddSectionCard';
import BoardColumn from './BoardColumn';
import './boardsPage.css'
import AddCardsModal from './AddCardsModal';
const BoardPage = () => {
    // what I need to do: get the boards that the user has
    const [usersBoards, setUsersBoards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState(null);
    const context = React.useContext(Context);
    console.log(context);
    const getBoards = async(userId) => {
        // remember to replace the link with the heroku link
        const response = await (await fetch(`http://localhost:3000/boards/user/${userId}`))
        const data = await response.json();
        return data
    }
    // **NOTE**
    // does not dynamically rerender when new boards are created.
    // need to fix
    useEffect(() => {
        if(context.userInfo.userInfo){
            getBoards(context.userInfo.userInfo.user_id)
            .then(data => {
                setUsersBoards(data.boards);
            }) 
        }
    },[])

    console.log(selectedBoard);
    return (
        <div>
            <NavBar/>
            <div className="boardsSection">
                <div className = "usersBoards">
                    { usersBoards.map(boardInfo => {
                        return <BoardColumn boardInfo = {boardInfo} setShowModal = {setShowModal} setSelectedBoard = {setSelectedBoard}/>
                    })}
                </div>
                <AddSection/>
            </div>
            {showModal ? <AddCardsModal setShowModal ={setShowModal} selectedBoard={selectedBoard}/> : <></>}
        </div>
    )
}

export default BoardPage;