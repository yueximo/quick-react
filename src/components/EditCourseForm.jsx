import { useParams, useNavigate } from 'react-router-dom';
import { useDbUpdate } from '../utilities/firebase';
import { useState } from 'react';

const getCourseById = (id, data) => {
  const course = data.courses[id];
  return course;
};

const EditCourseForm = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = getCourseById(id, data);

  const [update, result] = useDbUpdate(`/courses/${id}/`);

  const [nameError, setNameError] = useState('');
  const [meetsError, setMeetsError] = useState('');

  const [formData, setFormData] = useState({
    title: course.title,
    meets: course.meets,
    term: course.term,
    number: course.number,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'title') {
      if (value.length < 2) {
        setNameError('Title must be at least 2 characters long');
      } else {
        setNameError('');
      }
    }
    if (name === 'meets') {
      if (
        !/\b(?:M|Tu|W|Th|F)+(?:-(?:M|Tu|W|Th|F)+)?\s+\d{2}:\d{2}-\d{2}:\d{2}\b/.test(
          value
        )
      ) {
        setMeetsError(
          'Meeting time must have a format like "MWF 12:00-13:20".'
        );
      } else {
        setMeetsError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !meetsError) {
      update(formData);
      console.log(result);
      navigate('/');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='container mt-4'>
      <h2>
        Edit Course: {id} {course.title}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='editedTitle' className='form-label'>
            Title:
          </label>
          <input
            type='text'
            id='editedTitle'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
          />
          {nameError && <div className='invalid-feedback'>{nameError}</div>}
        </div>
        <div className='mb-3'>
          <label htmlFor='editedMeetingTimes' className='form-label'>
            Meeting Times:
          </label>
          <input
            type='text'
            id='editedMeetingTimes'
            name='meets'
            value={formData.meets}
            onChange={handleInputChange}
            className={`form-control ${meetsError ? 'is-invalid' : ''}`}
          />
          {meetsError && <div className='invalid-feedback'>{meetsError}</div>}
        </div>
        <button type='submit' className='btn btn-success'>
          Save
        </button>
        <button
          type='button'
          className='btn btn-danger m-2'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
