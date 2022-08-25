import './addSectionCard.css';
import React, { useState } from 'react';
import Context from '../../context/context';
const CreateBoardForm = ({setSectionClicked, setNewBoard, newBoard}) => {
    //selected color for the board
    const [selectedColor, setSelectedColor] = useState(null);
    const [newBoardInfo, setNewBoardInfo] = useState({});
    // context where user id is stored
    const context = React.useContext(Context);
    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');
    // when a dot is clicked, update the selected color
    const handleDotClick = (e) => {
        setSelectedColor(e.target.id)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // when the form is submitted, we need to update the baordInfo state
        // with the information from the form, the users that is currently logged in
        // and the colorState
        setNewBoardInfo({
            name : e.target.newBoardName.value,
            owner : parsedUser.user_id,
            color : selectedColor
        })
    }
    // we will call this createBoard function inside of our useEffect hook
    // and pass in our boardState
    const createBoard = async(boardObj) => {
        // remember to switch our the request link with heroku one
        const response = await fetch("http://localhost:3000/boards/create", {
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
        if(selectedColor !== null) {
            createBoard(newBoardInfo).then(data => {
                console.log(data)
                setSectionClicked(false);
            })
        }
    }, [newBoardInfo])

    return (
        <div className='createSection'>
            <form className='boardViewForm' onSubmit={handleFormSubmit}>
                <input type="text" name ="newBoardName" id= "newBoardName" required placeholder='New Board' autoComplete='off'></input>
                <div className = "colorSection">
                    <span className='dot redDot' id ='#FE5A5A' onClick={handleDotClick} style = {selectedColor === "#FE5A5A" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot orangeDot' id ="#FFAC4A" onClick={handleDotClick} style = {selectedColor === "#FFAC4A" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot yellowDot' id ="#FFE24A" onClick={handleDotClick} style = {selectedColor === "#FFE24A" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot greenDot' id ="#63BF37" onClick={handleDotClick} style = {selectedColor === "#63BF37" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot lightBlueDot' id ="#4AC9FF" onClick={handleDotClick} style = {selectedColor === "#4AC9FF" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot mediumBlueDot' id ="#4A52FF" onClick={handleDotClick} style = {selectedColor === "#4A52FF" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot purpleDot' id ="#AF4AFF" onClick={handleDotClick} style = {selectedColor === "#AF4AFF" ? {border: "2px solid #FFFFFF"} : {}}></span>
                    <span className='dot pinkDot' id ="#FF77C9" onClick={handleDotClick} style = {selectedColor === "#FF77C9" ? {border: "2px solid #FFFFFF"} : {}}></span>
                </div>
                <button type='submit' className='createButton'>Confirm (temp)</button>
            </form>
        </div>
    )
}

export default CreateBoardForm;