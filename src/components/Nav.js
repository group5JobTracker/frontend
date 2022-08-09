function Nav() {
    return (
        <div className="navBar">
            <ul className="viewBtns">
                <li>
                    <button>Card View</button>
                </li>
                <li>
                    <button>List View</button>
                </li>
                <li>
                    <button>Board View</button>
                </li>
            </ul>
            <ul className="controlBtns">
                <li>
                    <form action="Submit">
                        <label htmlFor="search" className="sr-only" >Search</label>
                        <input type="search" id="search" placeholder="Search" />
                    </form>
                </li>
                <li><button>Create</button></li>
                <li><button> Sort</button></li>
                <li><button>Filter</button></li>
                <li><button>Edit</button></li>
            </ul>
        </div>
    )
}

export default Nav