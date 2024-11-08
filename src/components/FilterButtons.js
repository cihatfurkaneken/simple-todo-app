import React from 'react';
import LABELS from '../constants/text';

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>{LABELS.FILTER_ALL}</button>
      <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>{LABELS.FILTER_ACTIVE}</button>
      <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>{LABELS.FILTER_COMPLETED}</button>
    </div>
  );
}

export default FilterButtons;
