import React from 'react';


const Background = () => {
  return (
    <div className="background-container">
      {/* 这里放置背景图片 */}
      <img src="/images/playstation.jpg" alt="Background" className="background-image" />
      {/* 渐变背景层 */}
      <div className="background-gradient" />
      {/* 模糊效果 */}
      <div className="background-blur" />
    </div>
  );
};

export default Background;