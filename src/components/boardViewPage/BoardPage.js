import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import Context from '../../context/context';
import AddSection from './AddSectionCard';
import BoardColumn from './BoardColumn';
import './boardsPage.css'
const BoardPage = () => {
    // what I need to do: get the boards that the user has
    const [usersBoards, setUsersBoards] = useState([]);
    const context = React.useContext(Context);
    console.log(context);
    const getBoards = async(userId) => {
        // remember to replace the link with the heroku link
        const response = await (await fetch(`http://localhost:3000/boards/user/${userId}`))
        const data = await response.json();
        return data
    }

    useEffect(() => {
        if(context.userInfo.userInfo){
            getBoards(context.userInfo.userInfo.user_id)
            .then(data => {
                setUsersBoards(data.boards);
            }) 
        }
    }, [])

    console.log(usersBoards);
    return (
        <div>
            <NavBar/>
            <div className="boardsSection">
                <div className = "usersBoards">
                    { usersBoards.map(boardInfo => {
                        return <BoardColumn boardInfo = {boardInfo}/>
                     })
                    }
                </div>
                <AddSection/>
            </div>
        </div>
    )
}

export default BoardPage;