// function Column({ showCol1, showCol2, showCol3, showCol4, setShowCol1, setShowCol2, setShowCol3, setShowCol4 }) {

//     const handleClickCol1 = () => {
//         setShowCol1(true);
//         setShowCol2(false);
//         setShowCol3(false);
//         setShowCol4(false);
//     }
//     const handleClickCol2 = () => {
//         setShowCol1(false);
//         setShowCol2(true);
//         setShowCol3(false);
//         setShowCol4(false);
//     }
//     const handleClickCol3 = () => {
//         setShowCol1(false);
//         setShowCol2(false);
//         setShowCol3(true);
//         setShowCol4(false);
//     }
//     const handleClickCol4 = () => {
//         setShowCol1(false);
//         setShowCol2(false);
//         setShowCol3(false);
//         setShowCol4(true);
//     }

//     return (
//         <div className="columnGrid">
//             <p>Columns</p>
//             <button className={showCol1 ? "bntSelected" : ""} onClick={() => handleClickCol1()}>1</button>
//             <button className={showCol2 ? "bntSelected" : ""} onClick={() => handleClickCol2()}>2</button>
//             <button className={showCol3 ? "bntSelected" : ""} onClick={() => handleClickCol3()}>3</button>
//             <button className={showCol4 ? "bntSelected" : ""} onClick={() => handleClickCol4()}>4</button>
//         </div>
//     )
// }

// export default Column