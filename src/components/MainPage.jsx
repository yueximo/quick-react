import './MainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from '../components/Modal';
import Banner from '../components/Banner';
import CourseList from '../components/CourseList';
import MenuPage from '../components/MenuPage';
import CourseCart from '../components/CourseCart';
import { hasTimeConflict } from '../utilities/conflict';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const Main = ({ data }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [open, setOpen] = useState(false);

  const clickModal = () => setOpen(!open);
  const closeModal = () => setOpen(false);

  const toggleSelectedClass = (course) =>
    hasTimeConflict(selectedClasses, course)
      ? null
      : setSelectedClasses(
          selectedClasses.includes(course)
            ? selectedClasses.filter((c) => c !== course)
            : [...selectedClasses, course]
        );

  return (
    <div>
      <Banner title={data.title} />
      <div className='menuButtons'>
        <MenuPage selection={selectedTerm} setSelection={setSelectedTerm} />
        <button className='btn btn-success mb-1 p-2.5' onClick={clickModal}>
          Course Plan
        </button>
        <Modal open={open} close={closeModal} title={'Course Plan'}>
          <CourseCart selected={selectedClasses} />
        </Modal>
      </div>
      <CourseList
        courses={data.courses}
        selectedTerm={selectedTerm}
        selectedClasses={selectedClasses}
        toggleSelectedClass={toggleSelectedClass}
      />
    </div>
  );
};

const queryClient = new QueryClient();

const MainPage = ({ data }) => (
  <QueryClientProvider client={queryClient}>
    <div className='container'>
      <Main data={data} />
    </div>
  </QueryClientProvider>
);

export default MainPage;
