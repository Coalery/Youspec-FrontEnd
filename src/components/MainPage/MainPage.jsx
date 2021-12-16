import { useState } from 'react';
import FilterChip from './FilterChip';
import FilteredProject from './FilteredProjects';

import './MainPage.scss';

function MainPage() {
  const [selectedChip, setSelectedChip] = useState([]);

  const onChipClick = (selected, chipId) => {
    if (selected) setSelectedChip(selectedChip.filter((cId) => cId !== chipId));
    else setSelectedChip([...selectedChip, chipId]);
  };

  return (
    <div className="main-container">
      <div className="main-title">마음에 드는 프로젝트를 찾아보세요!</div>
      <FilterChip selectedChip={selectedChip} onChipClick={onChipClick} />
      <FilteredProject selectedChip={selectedChip} />
    </div>
  );
}

export default MainPage;
