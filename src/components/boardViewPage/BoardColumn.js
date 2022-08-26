import React, { useState } from 'react';
import BoardCard from './boardCard';
import threeDots from '../../imgFiles/more_horiz_white_24dp.svg'
import './boardColumn.css';

const BoardColumn = ({boardInfo, setShowModal, setSelectedBoard, newCards, setNewBoard}) => {
    // what I need to do
    // and render all the cards that belong to a board inside boardCardsSection
    const [cards, setCards] = useState([]);
    const [showMore, setShowmore] = useState(false);

    const handleAddCardsClick = (e) => {
        setSelectedBoard(e.target.parentElement.parentElement.id)
        setShowModal(true);
    }
    const handleShowMoreClick = (e) => {
        setShowmore(!showMore);
        console.log(e.target)
    }
    // when a user clicks on the delete button we should make a delete request to the server 
    // and change the 
    const handleDeleteSection = async(e) => {
        console.log(boardInfo.board_id)
        const response = await fetch(`https://dragonfly.herokuapp.com/boards/${boardInfo.board_id}`, {
            method: 'DELETE',
            headers : {
                "Content-Type" : 'application/json'
            }
        });
        console.log("req succ")
        const data = await response.json()
        setNewBoard(data);
    }
    const getCards = async() => {
        const response = await fetch(`https://dragonfly.herokuapp.com/boards/${boardInfo.board_id}/cards`)
        const data = await response.json();
        return data.cards
    }

    React.useEffect(() =>{ 
        getCards().then(cards => {
            setCards(cards)
        })
    },[newCards])    
    return (
        <div className="boardColumn" key={boardInfo.board_id} id = {boardInfo.board_id}>
            <div className="columnHeader">
                <div className='headerTopRow'>
                    <p className='boardName'>{boardInfo.name}</p>
                    <div className='headerTopRowRightSide'>
                        <button className='threeDotsButton' onClick={handleShowMoreClick}>
                            <img src={threeDots}/> 
                            {showMore ? <button className = 'deleteSectionButton' onClick={handleDeleteSection}>Delete Section</button> : <></>}
                        </button>
                    </div>
                </div>
                <p className='addCards' onClick={handleAddCardsClick}>Add more cards +</p>
            </div>
            <div className="boardCardsSection">
                {
                    cards.map(cardInfo => {
                        return <BoardCard cardInfo = {cardInfo}/>
                    })
                }
            </div>
        </div>
    )
}

export default BoardColumn