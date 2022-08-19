import { useRef } from "react"

function Column({ setShowCol1, setShowCol2, setShowCol3, setShowCol4, columnsCardView }) {

    const handleClickCol1 = () => {
        setShowCol1(true);
        setShowCol2(false);
        setShowCol3(false);
        setShowCol4(false);
        // columnsCardView.currentTarget.style.classList.add(".col1");
        // columnsCardView.currentTarget.style.classList.remove(".col2", ".col3", ".col4")
    }
    const handleClickCol2 = () => {
        setShowCol1(false);
        setShowCol2(true);
        setShowCol3(false);
        setShowCol4(false);
        // columnsCardView.currentTarget.style.classList.add(".col2");
        // columnsCardView.currentTarget.style.classList.remove(".col1", ".col3", ".col4")
    }
    const handleClickCol3 = () => {
        setShowCol1(false);
        setShowCol2(false);
        setShowCol3(true);
        setShowCol4(false);
        // columnsCardView.currentTarget.style.classList.add(".col3");
        // columnsCardView.currentTarget.style.classList.remove(".col1", ".col2", ".col4")
    }
    const handleClickCol4 = () => {
        setShowCol1(false);
        setShowCol2(false);
        setShowCol3(false);
        setShowCol4(true);
        // columnsCardView.currentTarget.style.classList.add(".col4");
        // columnsCardView.currentTarget.style.classList.remove(".col1", ".col2", ".col3")
    }

    // const columnsDisplayed = (e) => {
    //     if (showCol1) {
    //         e.currentTarget.style.classList.add(".col1");
    //         e.currentTarget.style.classList.remove(".col2", ".col3", ".col4");
    //     } else if (showCol2) {
    //         e.currentTarget.style.classList.add(".col2");
    //         e.currentTarget.style.classList.remove(".col1", ".col3", ".col4")
    //     } else if (showCol3) {
    //         e.currentTarget.style.classList.add(".col3");
    //         e.currentTarget.style.classList.remove(".col1", ".col2", ".col4")
    //     } else if (showCol4) {
    //         e.currentTarget.style.classList.add(".col4");
    //         e.currentTarget.style.classList.remove(".col1", ".col2", ".col3")
    //     }
    // }
    return (
        <div className="columnGrid">
            <p>Columns</p>
            <button onClick={() => handleClickCol1()}>1</button>
            <button onClick={() => handleClickCol2()}>2</button>
            <button onClick={() => handleClickCol3()}>3</button>
            <button onClick={() => handleClickCol4()}>4</button>
        </div>
    )
}

export default Column