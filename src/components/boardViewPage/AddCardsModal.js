import React, {useState, useEffect} from 'react';
import Context from '../../context/context';
import ModalCard from './ModalCard';
import sortIcon from '../../imgFiles/sort-vector.svg';
import addToIcon from '../../imgFiles/arrow-up-vector.svg';
import filterIcon from '../../imgFiles/filter-vector.svg';
import closeIcon from '../../imgFiles/close-vector.svg'
import './addCardsModal.css';
export default function AddCardsModal({setShowModal, selectedBoard, setNewCards}) {
    const [uniqueCards, setUniqueCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const context = React.useContext(Context);

    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');

    const handleClose = () => {
        setShowModal(false);
    }
    // what I need to do, only fire if there are elements in selectedCards
    // after that condition is met, then 
    const handleAddClick = async() => {
        const arr = []
        for(const cardId of selectedCards) {
            const body = {
                appId : cardId
            }
            const response = await fetch(`http://localhost:3000/boards/addCard/${selectedBoard}`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(body)
            })

            const data = await response.json()
            arr.push(data);
        }
        setNewCards(arr);
        setShowModal(false);
    }
    console.log(selectedCards)
    const uniqueElements = (array1, array2) => {
        const hash = {};
        for(const element of array1) {
            hash[element.app_id] = element
        }
        const filtered = []
        for(const element of array2) {
            if(!(element.app_id in hash)){
                filtered.push(element)
            }
        }
        return filtered
    }

    const getUniqueCards = async() => {
        const allCardsResponse = await fetch(`http://localhost:3000/applications/users/${parsedUser.user_id}`)
        const allCardsJson = await allCardsResponse.json();
        const allCards = allCardsJson.posts

        const selectedBoardResponse = await fetch(`http://localhost:3000/boards/${selectedBoard}/cards`)
        const selectedBoardCardsJson = await selectedBoardResponse.json();
        const selectedBoardCards = selectedBoardCardsJson.cards

        const filteredArray = uniqueElements(selectedBoardCards, allCards)
        return filteredArray
    }

    useEffect(() => {
        if(userToken){
            getUniqueCards().then(data => {
                setUniqueCards(data)
            })
        }
    },[])    

    return (
        <>
            <div className='modalOverlay'>
                <div className='slidingModal'>
                    <div className='slidingModalHeader'>
                        <div className='headerLeftSide'>
                            <p>Your Cards</p>
                            <p className='filterControls'>Sort <img src={sortIcon}/></p>
                            <p className='filterControls'>Filter <img src={filterIcon}/></p>
                        </div>
                        <div className='headerRightSide'>
                            <button className='addButton' onClick={handleAddClick}>Add to section</button>
                            <img className = 'closeModalButton' onClick={handleClose} src = {closeIcon}/>
                        </div>
                    </div>
                    <div className='slidingModalBody'>
                        {uniqueCards.map(cardInfo => {
                            return <ModalCard cardInfo = {cardInfo} selectedCards = {selectedCards} setSelectedCards = {setSelectedCards}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
