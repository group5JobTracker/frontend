import React, { useState, useEffect } from 'react';
import BoardNav from './BoardNav';
import AddSection from './AddSectionCard';
import BoardColumn from './BoardColumn';
import './boardsPage.css'
import AddCardsModal from './AddCardsModal';
import LoadingBoards from './LoadingBoards';
const BoardPage = () => {
    // what I need to do: get the boards that the user has
    const [usersBoards, setUsersBoards] = useState([]);
    const [newBoard, setNewBoard] = useState([])
    const [newCards, setNewCards] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState(null);
    const [loading, setLoading] = useState(true);

    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');

    const getBoards = async(userId) => {
        // remember to replace the link with the heroku link
        const response = await (await fetch(`https://dragonfly.herokuapp.com/boards/user/${userId}`))
        const data = await response.json();
        return data
    }

    useEffect(() => {
        if(userToken){
            setTimeout(() => {
            getBoards(parsedUser.user_id)
            .then(data => {
                setUsersBoards(data.boards);
                setLoading(false);
            }) 
        }, 1100)
        }
    },[newBoard])

    return (
        <div>
            <BoardNav/>
            {loading ? <LoadingBoards/> : 
            <div className="boardsSection">
                <div className = "usersBoards">
                    { usersBoards.map(boardInfo => {
                        return <BoardColumn boardInfo = {boardInfo} setShowModal = {setShowModal} setSelectedBoard = {setSelectedBoard} newCards = {newCards} setNewCards = {setNewCards} setNewBoard={setNewBoard}/>
                    })}
                </div>
                <AddSection newBoard = {newBoard} setNewBoard = {setNewBoard}/>
            </div>
            }
            {showModal ? <AddCardsModal setShowModal ={setShowModal} selectedBoard={selectedBoard} showModal = {showModal} setNewCards = {setNewCards}/> : <></>}
        </div>
    )
}

export default BoardPage;