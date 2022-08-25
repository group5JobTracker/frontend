import React, { useState } from 'react';
import BoardCard from './boardCard';
import './boardColumn.css';

const BoardColumn = ({boardInfo, setShowModal, setSelectedBoard, newCards}) => {
    // what I need to do
    // and render all the cards that belong to a board inside boardCardsSection
    const [cards, setCards] = useState([]);

    const handleAddCardsClick = (e) => {
        setSelectedBoard(e.target.parentElement.parentElement.id)
        setShowModal(true);
    }
    
    const getCards = async() => {
        const response = await fetch(`http://localhost:3000/boards/${boardInfo.board_id}/cards`)
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
                <p className='boardName'>{boardInfo.name}</p>
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