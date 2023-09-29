import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import MenuPage from './components/MenuPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedClasses, setSelectedClasses] = useState([]);

  const toggleSelectedClass = (course) =>
    setSelectedClasses(
      selectedClasses.includes(course)
        ? selectedClasses.filter((c) => c !== course)
        : [...selectedClasses, course]
    );

  const [data, isLoading, error] = useJsonQuery(
    'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'
  );

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div>
      <Banner title={data.title} />
      <MenuPage selection={selectedTerm} setSelection={setSelectedTerm} />
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className='container'>
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;
