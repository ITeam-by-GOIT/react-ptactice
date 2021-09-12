import React from 'react';
import { useLocation, useHistory } from 'react-router';
function Heating() {
  const location = useLocation();
  const history = useHistory();

  const goBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
      return;
    }
    history.push('/');
  };
  return (
    <div>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <h1>Heating page</h1>
    </div>
  );
}

export default Heating;
