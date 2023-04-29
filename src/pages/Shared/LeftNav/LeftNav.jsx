import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.log(error))
  }, [])
  return (
    <div className='ps-4'>
      <h4>All Category</h4>
      {
        categories.map(category => <p
          key={category.id}
        >
          <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
        </p>)
      }
    </div>
  );
};

export default LeftNav;