import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      <p>{isOn ? 'The button is ON' : 'The button is OFF'}</p>
    </div>
  );
}

export default ToggleButton;
