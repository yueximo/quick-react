import { useState } from 'react';

export const useFormData = (values = {}) => {
  const [state, setState] = useState(() => ({
    values,
    errors: {},
  }));

  const change = (evt) => {
    const { id, value } = evt.target;
    const errors = { ...state.errors };

    if (id === 'editedTitle') {
      if (value.length < 2) {
        errors[id] = 'Title must be at least 2 characters.';
      } else {
        errors[id] = '';
      }
    } else if (id === 'editedMeetingTimes') {
      if (
        !/\b(?:M|Tu|W|Th|F)+(?:-(?:M|Tu|W|Th|F)+)?\s+\d{2}:\d{2}-\d{2}:\d{2}\b/.test(
          value
        )
      ) {
        errors[id] = 'Meeting time must have a format like "MWF 12:00-13:20".';
      } else {
        errors[id] = '';
      }
    }

    setState({ values: { ...state.values, [id]: value }, errors });
  };

  return [state, change];
};
