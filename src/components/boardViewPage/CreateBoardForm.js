import './addSectionCard.css';
import React, { useState } from 'react';
import Context from '../../context/context';
const CreateBoardForm = ({setSectionClicked, setNewBoard, newBoard}) => {
    //selected color for the board
    const [newBoardInfo, setNewBoardInfo] = useState({});
    // context where user id is stored
    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');
    // when a dot is clicked, update the selected color


    const handleFormSubmit = (e) => {
        e.preventDefault()
        // when the form is submitted, we need to update the baordInfo state
        // with the information from the form, the users that is currently logged in
        // and the colorState
        setNewBoardInfo({
            name : e.target.newBoardName.value,
            owner : parsedUser.user_id,
        })
    }
    // we will call this createBoard function inside of our useEffect hook
    // and pass in our boardState
    const createBoard = async(boardObj) => {
        // remember to switch our the request link with heroku one
        const response = await fetch("https://dragonfly.herokuapp.com/boards/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(boardObj)
        })
        const data = await response.json()
        setNewBoard(data)
        return data;
    }

    React.useEffect(() => {
        // only make the request when a user selects a color
        if("name" in newBoardInfo) {
            createBoard(newBoardInfo).then(data => {
                setSectionClicked(false);
            })
        }
    }, [newBoardInfo])

    return (
        <div className='createSection'>
            <form className='boardViewForm' onSubmit={handleFormSubmit}>
                <input type="text" name ="newBoardName" id= "newBoardName" required placeholder='New Board...' autoComplete='off' autoFocus></input>
            </form>
        </div>
    )
}

export default CreateBoardForm;