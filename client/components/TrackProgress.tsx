import React from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (evt) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <div>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div style={{ display: 'flex' }}>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
