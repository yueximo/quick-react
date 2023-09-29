import Course from './Course';

const CourseList = ({
  courses,
  selectedTerm,
  selectedClasses,
  toggleSelectedClass,
}) => {
  const filteredCourses = Object.entries(courses).filter(
    ([id, course]) => course['term'] === selectedTerm
  );

  return (
    <div className='container'>
      <div className='row'>
        {filteredCourses.map(([id, course]) => (
          <div key={id} className='col-sm'>
            <Course
              courseInfo={course}
              selectedClasses={selectedClasses}
              toggleSelectedClass={toggleSelectedClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
