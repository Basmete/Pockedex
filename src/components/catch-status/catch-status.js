import React from 'react';

const CatchStatus = ({catchStatus, yearMonthDay, time}) => {

  
  return (
    <div className="catch_status ml-auto">
      {catchStatus ? 
        <div className="catch_status-text">
          <p>Caught {yearMonthDay}</p>
          <p>at {time}</p>
        </div> : 
        <p>Not caught yet</p>}
    </div>
  );
};

export default CatchStatus;