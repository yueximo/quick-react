import './Course.css';
import { hasTimeConflict } from '../utilities/conflict';
import { Link } from 'react-router-dom';
import { useAuthState } from '../utilities/firebase';
import { useProfile } from '../utilities/profile';

const Course = ({ courseInfo, selectedClasses, toggleSelectedClass }) => {
  const [profile, profileLoading, profileError] = useProfile();

  const hasConflict = hasTimeConflict(selectedClasses, courseInfo);

  const getCourseId = (courseInfo) => {
    const term = courseInfo.term.charAt(0);
    const number = courseInfo.number;
    return `${term}${number}`;
  };

  const [user] = useAuthState();

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
        {profile.isAdmin ? (
          <Link
            to={`/course/${getCourseId(courseInfo)}/edit`}
            style={{ display: 'inline-block', width: 'fit-content' }}
            className='m-2'
          >
            {' '}
            <button className='btn btn-primary'>Edit</button>
          </Link>
        ) : null}
        <div>
          <p className='card-footer bg-transparent'>{courseInfo.meets}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
