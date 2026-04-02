import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      
      <p data-testid="counter">
        Button clicked {count} times
      </p>

      <button data-testid="button" onClick={handleClick}>
        Click me
      </button>

    </div>git add .
git commit -m "fix: remove duplicate export and retry submission"
git push
  );
};

export default App;
