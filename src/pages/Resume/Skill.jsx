import './Skill.scss';

const Skill = ({ category, skills }) => {
  return (
    <div className="skills">
        <div className='h4'>{category}</div>
        <div className="line2">{skills}</div>
        <div>&nbsp;</div>
    </div>
  )
}

export default Skill