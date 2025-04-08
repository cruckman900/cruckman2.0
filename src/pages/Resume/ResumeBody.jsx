import { forwardRef } from 'react';

import './ResumeBody.scss';

// eslint-disable-next-line react/display-name
const ResumeBody = forwardRef((_props, ref) => {
  console.log(document.getElementById('printable-content'));
  return (
    <div id="printable-content" ref={ref} className="resumeBody">
      <header className='resumeBody-header'>
        <div className="resumeBody-header-sub">
          <div className='resumeBody-header-sub-left'>
            <div className='h1'>Christopher L Ruckman</div>
            <div>Full Stack / Cross-Platform Software Engineer</div>
            <div>2005 &mdash; Present</div>
          </div>
          <div className='resumeBody-header-sub-right'>
            <div>Rayland, OH 43943</div>
            <div>(740) 827-2743</div>
            <div>cruckman900@gmail.com</div>
            <div>https://cruckman.com</div>
          </div>
        </div>
      </header>
      <div>Hello Kitty!</div>
      <div>Hello world!</div>
    </div>
  );
});

export default ResumeBody