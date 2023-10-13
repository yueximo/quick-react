import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import EditCourseForm from './components/EditCourseForm.jsx';
import { useDbData } from './utilities/firebase';

const App = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (data === undefined) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage data={data} />} />
        <Route
          path='course/:id/edit'
          element={<EditCourseForm data={data} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
