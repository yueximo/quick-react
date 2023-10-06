import React from 'react';
import { useState } from 'react';
import { useFormData } from '../utilities/formdata';

const EditCourseForm = ({ course, onClose }) => {
  const initialFormValues = {
    editedTitle: course.title,
    editedMeetingTimes: course.meetingTimes,
  };

  const [formData, handleInputChange] = useFormData(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the form data in 'formData.values'
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
            <span className='error'>{formData.errors.editedTitle}</span>
          )}
        </div>
        <div className='form-group'>
          <label htmlFor='editedMeetingTimes'>Meeting Times:</label>
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
        <button type='button' className='btn btn-secondary' onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
