import React, {useState, useEffect} from 'react';
import Context from '../../context/context';
import ModalCard from './ModalCard';
import sortIcon from '../../imgFiles/sort-vector.svg';
import filterIcon from '../../imgFiles/filter-vector.svg';
import closeIcon from '../../imgFiles/close-vector.svg'
import './addCardsModal.css';
export default function AddCardsModal({setShowModal, selectedBoard, setNewCards}) {
    const [uniqueCards, setUniqueCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [sortClicked, setSortClicked] = useState(false);
    const [sortBy, setSortBy] = useState("");
    const [sortedCards, setSortedCards] = useState([]);

    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');

    const handleClose = () => {
        setShowModal(false);
    }

    const handleOptionClick = (e) => {
        setSortBy(e.target.value)
        setSortClicked(false);
    }
    console.log(sortBy)
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
        const allCardsResponse = await fetch(`https://dragonfly.herokuapp.com/users/${parsedUser.user_id}`)
        const allCardsJson = await allCardsResponse.json();
        const allCards = allCardsJson.posts

        const selectedBoardResponse = await fetch(`https://dragonfly.herokuapp.com/boards/${selectedBoard}/cards`)
        const selectedBoardCardsJson = await selectedBoardResponse.json();
        const selectedBoardCards = selectedBoardCardsJson.cards

        const filteredArray = uniqueElements(selectedBoardCards, allCards)
        return filteredArray
    }

    useEffect(() => {
        if(userToken){
            getUniqueCards().then(data => {
                setUniqueCards(data);
                setSortedCards(data);
            })
        }
    },[])    
    useEffect(() => {
        let copy = [...uniqueCards];
        if(sortBy !== ""){
            switch (sortBy) {
                case "Company":
                    let sortedByCompany = copy.sort((a,b) => {
                        if (a.company < b.company) {
                            return -1;
                        }
                        if (a.company > b.company) {
                            return 1;
                        }
                        return 0;
                    })
                    setSortedCards(sortedByCompany)
                    break;
                case "Location":
                    const sortedByLocation = copy.sort((a,b) => {
                        if (a.location < b.location) {
                            return -1;
                        }
                        if (a.location > b.location) {
                            return 1;
                        }
                        return 0;
                    })
                    setSortedCards(sortedByLocation)
                    break
                case "Status":
                    const sortedByStatus = copy.sort((a,b) => {
                        if (a.status < b.status) {
                            return -1;
                        }
                        if (a.status > b.status) {
                            return 1;
                        }
                        return 0;
                    })
                    setSortedCards(sortedByStatus)
                    break;
                case "Job Name" :
                    const sortedByJobName = copy.sort((a,b) => {
                        if (a.position < b.position) {
                            return -1;
                        }
                        if (a.position > b.position) {
                            return 1;
                        }
                        return 0;
                    })
                    setSortedCards(sortedByJobName)
                    break;
            }
        } else {
            setSortedCards(copy);
        }
    },[sortBy])
    return (
        <>
            <div className='modalOverlay'>
                <div className='slidingModal'>
                    <div className='slidingModalHeader'>
                        <div className='headerLeftSide'>
                            <p>Your Cards</p>
                            {sortClicked ?
                                <select className="sortBy"onChange={handleOptionClick} onF>
                                    <option value={sortBy}>Sort By: {sortBy=== "" ? "Default" : sortBy}</option>
                                    <option value="">Default</option>
                                    <option value = "Company">Company</option>
                                    <option value = "Location">Location</option>
                                    <option value = "Date Applied">Date Applied</option>
                                    <option value = "Status">Status</option>
                                    <option value = "Job Name">Job Name</option>
                                    <option value = "Date Created">Date Created</option>
                                </select>
                                : 
                                <p className='filterControls' onClick={() => setSortClicked(true)}>Sort <img src={sortIcon}/></p>
                            }
                            <p className='filterControls'>Filter <img src={filterIcon}/></p>
                        </div>
                        <div className='headerRightSide'>
                            <button className='addButton' onClick={handleAddClick}>Add to section</button>
                            <img className = 'closeModalButton' onClick={handleClose} src = {closeIcon}/>
                        </div>
                    </div>
                    <div className='slidingModalBody'>
                        {sortedCards.map(cardInfo => {
                            return <ModalCard cardInfo = {cardInfo} selectedCards = {selectedCards} setSelectedCards = {setSelectedCards}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
