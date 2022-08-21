import NavBar from '../NavBar';
import BoardCard from './boardCard';
import AddSection from './AddSectionCard';
import BoardColumn from './BoardColumn';
import './boardsPage.css'
const BoardPage = () => {
    return (
        <div>
            <NavBar/>
            <div className="boardsSection">
                <div className = "usersBoards">
                    <BoardColumn></BoardColumn>
                    <BoardColumn></BoardColumn>
                    <BoardColumn></BoardColumn>
                </div>
                <AddSection/>
            </div>
            {/* <BoardCard></BoardCard> */}
        </div>
        
    )
}

export default BoardPage;