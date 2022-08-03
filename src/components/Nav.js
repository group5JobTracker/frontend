function Nav() {
    return (
        <div className="navBar wrapper">
            <ul className="viewBtns">
                <li>
                    <p>Card View</p>
                </li>
                <li>
                    <p>List View</p>
                </li>
                <li>
                    <p>Board View</p>
                </li>
            </ul>
            <ul className="controlBtns">
                <li>
                    <form action="Submit">
                        <label htmlFor="search" >Search</label>
                        <input type="text" id="search" placeholder="Search" />
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