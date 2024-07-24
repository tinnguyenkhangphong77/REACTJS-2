import React, {useMemo} from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  console.log('Items sorted');
  const sortedList = useMemo(() => items.sort((a, b) => {
    console.log('test');
    return a - b;
  }), [items]);

  // const sortedList = items.sort((a, b) =>{
  //   console.log('231');
  //   return  a- b;
  // })

  console.log('DemoList RUNNING');
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList)
//export default DemoList;
