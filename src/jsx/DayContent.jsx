import React, { Fragment } from 'react';

import content from '../assets/content/days.json'

const DayContent = ({match}) => {
  const currentDayIndex = match.params.day - 1;

  const currentDayTitle = content[currentDayIndex].title;
  const currentDayContent = content[currentDayIndex].paragraphs
                              .map((content, key) => <p key={key}>{content}</p>);



  return (
    <Fragment>
      <h2 className="title">{currentDayTitle}</h2>
      <hr/>
      {currentDayContent}
    </Fragment>
  );
};

export default DayContent;
