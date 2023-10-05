import { useState } from 'react';

const EditCourseForm = ({ course, onClose }) => {
  const [editedTitle, setEditedTitle] = useState(course.title);
  const [editedMeetingTimes, setEditedMeetingTimes] = useState(course.meetingTimes);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="editedTitle">Title:</label>
          <input
            type="text"
            id="editedTitle"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editedMeetingTimes">Meeting Times:</label>
          <input
            type="text"
            id="editedMeetingTimes"
            value={editedMeetingTimes}
            onChange={(e) => setEditedMeetingTimes(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
