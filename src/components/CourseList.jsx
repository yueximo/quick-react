import Course from "./Course";


const CourseList = ({courses}) => (
    <div className="container">
        <div className="row">
            {Object.entries(courses).map(([id, course]) => <div key={id} className="col-sm"><Course courseInfo={course} /></div>)}
        </div>
    </div>
);

export default CourseList;

  