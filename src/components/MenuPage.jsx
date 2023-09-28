const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring',
};

const MenuButton = ({ term, selection, setSelection }) => (
  <div className='mt-4 mx-2'>
    <input
      type='radio'
      id={term}
      className='btn-check'
      checked={term === selection}
      autoComplete='off'
      onChange={() => setSelection(term)}
    />
    <label className='btn btn-success mb-1 p-2.5' htmlFor={term}>
      {term}
    </label>
  </div>
);

const TermSelector = ({ selection, setSelection }) => (
  <div className='btn-group d-flex justify-content-center'>
    {Object.keys(terms).map((term) => (
      <MenuButton
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

const MenuPage = ({ selection, setSelection }) => {
  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
    </div>
  );
};

export default MenuPage;
