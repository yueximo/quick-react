import Course from './Course';

const CourseList = ({ courses, selectedTerm }) => {
  const filteredCourses = Object.entries(courses).filter(
    ([id, course]) => course['term'] === selectedTerm
  );

  console.log(filteredCourses);
  return (
    <div className='container'>
      <div className='row'>
        {filteredCourses.map(([id, course]) => (
          <div key={id} className='col-sm'>
            <Course courseInfo={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
