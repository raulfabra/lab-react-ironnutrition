import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({look}) {

    const [filter, setFilter] = useState("");

    const filterHandler = (e) => {
        setFilter(e.target.value);
        look(e.target.value);
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={filter} type="text" onChange={filterHandler} />
    </>
  );
}

export default Search;