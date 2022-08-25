import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import Context from '../../context/context';
import AddSection from './AddSectionCard';
import BoardColumn from './BoardColumn';
import './boardsPage.css'
import AddCardsModal from './AddCardsModal';
import { useNavigate } from 'react-router-dom';
const BoardPage = () => {
    // what I need to do: get the boards that the user has
    const [usersBoards, setUsersBoards] = useState([]);
    const [newBoard, setNewBoard] = useState([])
    const [newCards, setNewCards] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState(null);
    const navigate = useNavigate();

    const context = React.useContext(Context);
    console.log(context);

    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');

    const getBoards = async(userId) => {
        // remember to replace the link with the heroku link
        const response = await (await fetch(`http://localhost:3000/boards/user/${userId}`))
        const data = await response.json();
        return data
    }

    const handleLogOut = () => {
        window.localStorage.clear()
        navigate('/', {replace : true})
    }
    useEffect(() => {
        if(userToken){
            getBoards(parsedUser.user_id)
            .then(data => {
                setUsersBoards(data.boards);
            }) 
        }
    },[newBoard])

    console.log(selectedBoard)

    console.log(selectedBoard);
    return (
        <div>
            <NavBar/>
            <div className="boardsSection">
                <div className = "usersBoards">
                    { usersBoards.map(boardInfo => {
                        return <BoardColumn boardInfo = {boardInfo} setShowModal = {setShowModal} setSelectedBoard = {setSelectedBoard} newCards = {newCards}/>
                    })}
                </div>
                <AddSection newBoard = {newBoard} setNewBoard = {setNewBoard}/>
            </div>
            {showModal ? <AddCardsModal setShowModal ={setShowModal} selectedBoard={selectedBoard} showModal = {showModal} setNewCards = {setNewCards}/> : <></>}
            <button className='logOutButton' onClick={handleLogOut}>LOG OUT</button>
        </div>
    )
}

export default BoardPage;