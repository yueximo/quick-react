const parseCourseTime = (courseTime) => {
  const [dayString, timeRange] = courseTime.split(' ');
  const days = dayString.match(/[A-Z][a-z]*/g);
  const [startTime, endTime] = timeRange.split('-');

  let startTimeConverted = new Date();
  let endTimeConverted = new Date();

  startTimeConverted.setHours(parseInt(startTime.split(':')[0]));
  startTimeConverted.setMinutes(parseInt(startTime.split(':')[1]));
  startTimeConverted.setSeconds(0);

  endTimeConverted.setHours(parseInt(endTime.split(':')[0]));
  endTimeConverted.setMinutes(parseInt(endTime.split(':')[1]));
  endTimeConverted.setSeconds(0);

  return {
    days: days,
    startTime: startTimeConverted,
    endTime: endTimeConverted,
  };
};

const skipChecks = (selectedCourse, course) =>
  selectedCourse === course ||
  selectedCourse.meets === '' ||
  course.meets === '' ||
  selectedCourse.term !== course.term;

const hasTimeOverlap = (parsedSelectedCourseTime, parsedCourseTime) => {
  return (
    parsedCourseTime.days.some((day) =>
      parsedSelectedCourseTime.days.includes(day)
    ) &&
    parsedCourseTime.startTime <= parsedSelectedCourseTime.endTime &&
    parsedCourseTime.endTime >= parsedSelectedCourseTime.startTime
  );
};

export const hasTimeConflict = (selectedCourses, course) => {
  const parsedCourseTime = parseCourseTime(course.meets);

  for (const selectedCourse of selectedCourses) {
    if (skipChecks(selectedCourse, course)) {
      continue;
    }

    const parsedSelectedCourseTime = parseCourseTime(selectedCourse.meets);

    if (hasTimeOverlap(parsedSelectedCourseTime, parsedCourseTime)) {
      return true;
    }
  }

  return false;
};
