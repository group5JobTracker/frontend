import BoardCard from './boardCard';
import './boardColumn.css';

const BoardColumn = () => {
    return (
        <div className="boardColumn">
            <div className="columnHeader">
                <p className='boardName'>Applied</p>
                <p className='addCards'>Add more cards +</p>
            </div>
            <div className="boardCardsSection">
                <BoardCard></BoardCard>
                <BoardCard></BoardCard>
                <BoardCard></BoardCard>
                <BoardCard></BoardCard>
                {/* <BoardCard></BoardCard> */}
            </div>
        </div>
    )
}

export default BoardColumn