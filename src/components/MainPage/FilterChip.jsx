import { Avatar, Chip } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTechStack } from '../../modules/tech_stack';

function FilterChip({ selectedChip, onChipClick }) {
  const { data, loading, error } = useSelector(
    (state) => state.techStack.allTechStack
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTechStack());
  }, [dispatch]);

  if (loading || error || !data) return null;
  return (
    <div>
      {data.map((stackData) => {
        const isSelected =
          selectedChip.filter((selected) => selected === stackData.id)
            .length !== 0;
        return (
          <Chip
            key={stackData.id}
            className="main-filterchip"
            avatar={<Avatar src={stackData.iconUrl} />}
            label={stackData.name}
            style={{
              background: isSelected ? 'rgb(200, 200, 200)' : 'white',
              border: '1px solid rgb(210, 210, 210)',
            }}
            onClick={() => {
              onChipClick(isSelected, stackData.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default FilterChip;
