

function JobOptions({ title, company, location, dateApplied, stats, index }) {
    return (
        <div key={index} className="cardsJob">
            <div className="principal">
                <h4>{title}</h4>
                <h5>{company}</h5>
                <h6>{location}</h6>
            </div>

            <div className="complement">
                <p>Date Applied: {dateApplied}</p>
                <p>Status: {stats}</p>
            </div>

        </div>

    )
}

export default JobOptions