import React from 'react';
import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';

const EditCourseForm = ({ course, onClose }) => {
  const initialFormValues = {
    editedTitle: course.title,
    editedMeetingTimes: course.meetingTimes,
  };

  const getId = (course) => {
    const term = course.term.charAt(0);
    const number = course.number;
    return `${term}${number}`;
  };

  const [update, result] = useDbUpdate(`/courses/${getId(course)}/`);
  const [formData, handleInputChange] = useFormData(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData.errors).length === 0) {
      update({
        title: formData.values.editedTitle,
        meets: formData.values.editedMeetingTimes,
        term: course.term,
        number: course.number,
      });
      console.log(result);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='editedTitle'>Title:</label>
          <input
            type='text'
            id='editedTitle'
            value={formData.values.editedTitle}
            onChange={handleInputChange}
          />
          {formData.errors.editedTitle && (
            <p className='error'>{formData.errors.editedTitle}</p>
          )}
        </div>
        <div className='form-group'>
          <label>Meeting Times:</label>
          <input
            type='text'
            id='editedMeetingTimes'
            value={formData.values.editedMeetingTimes}
            onChange={handleInputChange}
          />
          {formData.errors.editedMeetingTimes && (
            <span className='error'>{formData.errors.editedMeetingTimes}</span>
          )}
        </div>
        <button type='submit' className='btn btn-primary' onClick={onClose}>
          Submit
        </button>
        <button type='button' className='btn btn-secondary' onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
