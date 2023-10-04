import './CourseCart.css';

const CourseCart = ({ selected }) => (
  <div className='cart'>
    {selected.length === 0 ? (
      <h2>No Courses Selected</h2>
    ) : (
      selected.map((course) => (
        <div className='course' key={course.term + course.number}>
          <p>
            {course.term} CS {course.number}
          </p>
          <p>&nbsp;{course.title}</p>
          <p>&nbsp;{course.meets}</p>
        </div>
      ))
    )}
  </div>
);

export default CourseCart;
