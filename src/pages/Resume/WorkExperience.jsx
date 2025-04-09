import './WorkExperience.scss';

const WorkExperience = ({ business, date1, date2, accomplishments }) => {
  return (
    <div className='workexp page-break'>
        <div className="workexp-line1 page-break">
            <div className="h4 workexp-line1-left">{business}</div>
            <div className="h4 workexp-line1-right">{date1} &mdash; {date2}</div>
        </div>
        <div className='workexp-line2 page-break'>
            <ul>
                {accomplishments.map(acc => <li key={acc.key} className='page-break'><i className='fa-solid fa-arrow-right'></i>{acc.value}</li>)}
            </ul>
        </div>
        <div>&nbsp;</div>
    </div>
  )
}

export default WorkExperience