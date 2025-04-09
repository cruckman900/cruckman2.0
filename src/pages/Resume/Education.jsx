import './Education.scss';

const Education = ({ school, date1, date2, degree }) => {
  return (
    <>
        <div className="education">
            <div className="education-line1">
                <div className="h4 left">{school}</div>
                <div className="h4 right">{date1} &mdash; {date2}</div>
            </div>
            <div className="education-line2">{degree}</div>
        </div>
        <div>&nbsp;</div>
    </>
  )
}

export default Education