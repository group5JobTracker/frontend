import { useState } from 'react';
import './addSectionCard.css';
import CreateBoardForm from './CreateBoardForm';

const AddSection = () => {
    const [sectionClicked, setSectionClicked] = useState(false);
    const handleClick = () => {
        setSectionClicked(true);
    }

    return (
        <>
            {sectionClicked ? 
                <CreateBoardForm setSectionClicked = {setSectionClicked}/>
                :
                <div className = "addSection" onClick={handleClick}>
                    <p>Add Section +</p> 
                </div>
            }
        </>
    )
}

export default AddSection;