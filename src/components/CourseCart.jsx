import './CourseCart.css';

const CourseCart = ({ selected }) => (
  <div className='cart'>
    {selected.length === 0 ? (
      <h2>No Courses Selected</h2>
    ) : (
      selected.map((course) => (
        <div className='row' key={course.term + course.number}>
          <p className='col term'>
            {course.term} CS {course.number}
          </p>
          <p className='col-6'>{course.title}</p>
          <p className='col'>{course.meets}</p>
        </div>
      ))
    )}
  </div>
);

export default CourseCart;
