import React, {useState, useEffect} from 'react';
import Context from '../../context/context';
import BoardCard from './boardCard';
import sortIcon from '../../imgFiles/sort-vector.svg';
import addToIcon from '../../imgFiles/arrow-up-vector.svg';
import filterIcon from '../../imgFiles/filter-vector.svg';
import closeIcon from '../../imgFiles/close-vector.svg'
import './addCardsModal.css';
export default function AddCardsModal({setShowModal, selectedBoard}) {
    const [cards, setCards] = useState([]);
    const context = React.useContext(Context);
    const handleClose = () => {
        setShowModal(false);
    }

    const getCards = async() => {
        const response = await fetch(`http://localhost:3000/applications/users/${context.userInfo.userInfo.user_id}`)
        const data = await response.json();
        return data.posts
    }

    useEffect(() => {
        if(context.userInfo.userInfo){
            getCards().then(data => {
                setCards(data)
            })
        }
    },[])    
    console.log(cards);
    return (
        <>
            <div className='modalOverlay'>
                <div className='slidingModal'>
                    <div className='slidingModalHeader'>
                        <p>Your Cards</p>
                        <div className='filterControls'>
                            <p>Sort <img src={sortIcon}/></p>
                            <p>Filter <img src={filterIcon}/></p>
                            <p>Add to <img src={addToIcon}/></p>
                        </div>
                        <img className = 'closeModalButton' onClick={handleClose} src = {closeIcon}/>
                    </div>
                    <div className='slidingModalBody'>
                        {cards.map(cardInfo => {
                            return <BoardCard cardInfo = {cardInfo}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
