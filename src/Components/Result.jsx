import React, { useState } from 'react';
import axios from 'axios';

const Result = (props) => {
  const divStyle = {
    color: 'white',
    fontSize: '20px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const APIreq = async () => {
    setLoading(true);
    setError(null);
    const query = props.data;
    //console.log(props.data);
    //console.log(query);
    const str = "\nfind the time complexity and space complexity of this code in a single line give the output and provide a small description too in a pragraph dont use bold or escape characters";
    let res = query.concat(str);
    //console.log(res);

    try {
      const response = await axios.post('http://localhost:5000/check',{prompt : res});
      console.log(response);
      setData(response.data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    setData("");
    APIreq();
  };

  return (
    <div style={divStyle}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'block' }}>
          <button
            onClick={handleButtonClick}
            style={{
              height: '30px',
              width: '100px',
              fontSize: '18px',
              margin: '5px',
              backgroundColor: '#2F2F2F',
              cursor: 'pointer',
            }}
          >
            Check
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <p>{JSON.stringify(data, null, 2)}</p>}
      </div>
    </div>
  );
};

export default Result;
