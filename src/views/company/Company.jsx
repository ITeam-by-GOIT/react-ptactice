import React from 'react';
import { useLocation, useHistory } from 'react-router';
function Company() {
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
      <h1>Company page</h1>
    </div>
  );
}

export default Company;
