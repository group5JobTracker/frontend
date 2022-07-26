import React, { useState } from 'react';
import BoardCard from './boardCard';
import threeDots from '../../imgFiles/more_horiz_white_24dp.svg';
import trashIcon from '../../imgFiles/trashCanIcon.svg';
import './boardColumn.css';

const BoardColumn = ({ boardInfo, setShowModal, setSelectedBoard, newCards, setNewCards, setNewBoard }) => {
    // what I need to do
    // and render all the cards that belong to a board inside boardCardsSection
    const [cards, setCards] = useState([]);
    const [showMore, setShowmore] = useState(false);
    const [toBeRemovedCards, setToBeRemovedCards] = useState([])
    const [cardSelectedStates, setCardSelectedStates] = useState({})
    const handleAddCardsClick = (e) => {
        setSelectedBoard(e.target.parentElement.parentElement.parentElement.id)
        setShowModal(true);
    }
    const handleShowMoreClick = (e) => {
        setShowmore(!showMore);
    }
    const handleCardDeletions = async () => {
        for (const cardId of toBeRemovedCards) {
            const response = await fetch(`https://dragonfly.herokuapp.com/boards/${boardInfo.board_id}/removeCard/${cardId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json()
        }
        setNewCards([])
        setToBeRemovedCards([]);
    }
    // when a user clicks on the delete button we should make a delete request to the server 
    // and change the 
    const handleDeleteSection = async (e) => {
        const response = await fetch(`https://dragonfly.herokuapp.com/boards/${boardInfo.board_id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        });
        const data = await response.json()
        setNewBoard(data);
    }
    const getCards = async () => {
        const response = await fetch(`https://dragonfly.herokuapp.com/boards/${boardInfo.board_id}/cards`)
        const data = await response.json();
        for (const card of data.cards) {
            setCardSelectedStates(prevState => ({
                ...prevState,
                [card.app_id]: false
            }))
        }
        return data.cards
    }
    React.useEffect(() => {
        getCards().then(cards => {
            setCards(cards)
        })
    }, [newCards])
    return (
        <div className="boardColumn" key={boardInfo.board_id} id={boardInfo.board_id} >
            <div className="columnHeader" >
                <div className='headerTopRow' >
                    <p className='boardName' > {boardInfo.name} </p>
                    <div className='headerTopRowRightSide' >
                        <button className='threeDotsButton' onClick={handleShowMoreClick} >
                            <img src={threeDots} />
                            {showMore ? < button className='deleteSectionButton' onClick={handleDeleteSection} > Delete Section
                            </button>
                                : <> </>}
                        </button>
                    </div>
                </div>
                <div className='headerBottomRow' >
                    <p className='addCards' onClick={handleAddCardsClick} > Add more cards + </p>
                    {toBeRemovedCards.length > 0 &&
                        < button className='removeCardsButton' onClick={handleCardDeletions} > Remove < img src={trashIcon} />
                        </button >}
                </div>
            </div>

            <div className="boardCardsSection" > {
                cards.map(cardInfo => {
                    return <BoardCard cardInfo={cardInfo}
                        toBeRemovedCards={toBeRemovedCards}
                        setToBeRemovedCards={setToBeRemovedCards}
                        cardSelectedStates={cardSelectedStates}
                        setCardSelectedStates={setCardSelectedStates}
                    />
                })}
            </div>
        </div>
    )
}

export default BoardColumn