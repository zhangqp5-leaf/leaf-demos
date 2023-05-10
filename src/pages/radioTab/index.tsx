import React, { useEffect, useRef, useState } from "react";

import './index.less';

interface optionsProps {
  label: string,
  value: number,
}

const RadioTab: React.FC = () => {
  const options: optionsProps[] = [
    {
      label: '开灯',
      value: 0,
    },
    {
      label: '关灯',
      value: 1,
    },
  ];
  const [activeKey, setActiveKey] = useState<Number>(0);
  const [radioTabStyle, setRadioTabStyle] = useState({});
  useEffect(() => {
    initPage();
  }, []);
  const initPage = () => {
    setRadioTabStyle({
      '--groove-left': `12px`,
    });
  }
  const changeTab = (val: number) => {
    setActiveKey(val);
    setRadioTabStyle({
      '--groove-left': `calc(12px + ${val * 50}%)`,
      '--wrapper-origin': `${val === 0 ? '75% top' : '25% top'}`,
    });
  }
  return (
    <div className={`container ${activeKey ? 'dark' : ''}`}>
      <div className={`radioTab`} style={radioTabStyle}>
        {
          options.map((item: optionsProps) => (
            <div
              className={`btn ${activeKey === item.value ? 'active' : ''}`}
              onClick={() => changeTab(item.value)}
              key={item.value}
            >{item.label}</div>
          ))
        }
      </div>
    </div>
  )
};

export default RadioTab;