
const Course = ({courseInfo}) => (
    <div className="card h-100 w-100 m-1 p-2">
        <div className="card-body">
            <h3 className='card-title'>{courseInfo.term} CS {courseInfo.number}</h3>
            <p className='card-text'>{courseInfo.title}</p>
        </div>
        <div>
            <p className='card-footer bg-transparent'>{courseInfo.meets}</p>
        </div>
    </div>
);

export default Course;