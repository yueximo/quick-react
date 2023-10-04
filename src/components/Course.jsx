import './Course.css';
import { hasTimeConflict } from '../utilities/conflict';

const Course = ({ courseInfo, selectedClasses, toggleSelectedClass }) => {
  const hasConflict = hasTimeConflict(selectedClasses, courseInfo);
  return (
    <div className='col-lg-auto h-100 p-3'>
      <div
        className={`course card h-100 w-100 m-5 p-2 ${
          selectedClasses.includes(courseInfo) ? 'selected' : 'not-selected'
        } ${hasConflict ? 'conflict' : ''}`}
        onClick={() => toggleSelectedClass(courseInfo)}
        style={{ cursor: 'pointer' }}
      >
        <div className={'card-body'}>
          <h3 className='card-title'>
            {courseInfo.term} CS {courseInfo.number}
          </h3>
          <p className='card-text'>{courseInfo.title}</p>
        </div>
        <div>
          <p className='card-footer bg-transparent'>{courseInfo.meets}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
