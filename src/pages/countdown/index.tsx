import React, {useState, useEffect} from "react";
import './index.less';

const Countdown: React.FC = () => {

  let target = new Date('2023-1-22').getTime();

  /**
   * 设置翻动效果
   * @param dom {HTMLElement}
   * @param value {Number}
   * @returns {void}
   */
  const setHTML = (dom: HTMLElement, value: Number): void => {
    let nextValue = value.toString().padStart(2, '0');
    let curValue = dom?.dataset.number;
    if (nextValue === curValue) {
      return;
    }
    dom.innerHTML = `<div class="cur top"><span>${curValue}</span></div>
              <div class="cur bottom"><span>${curValue}</span></div>
              <div class="next top"><span>${nextValue}</span></div>
              <div class="next bottom"><span>${nextValue}</span></div>`;
    dom.classList.remove('flip');
    dom.clientHeight;
    dom.classList.add('flip');
    dom.dataset.number = nextValue;
  }

  useEffect(() => {
    let days = document.querySelector('.item:nth-child(1) .number') as HTMLElement;
    let hours = document.querySelector('.item:nth-child(2) .number') as HTMLElement;
    let mins = document.querySelector('.item:nth-child(3) .number') as HTMLElement;
    let secs = document.querySelector('.item:nth-child(4) .number') as HTMLElement;

    const setNumbers = () => {
      let now = Date.now();
      let dis = target - now;
      if (dis < 0) {
        dis = 0;
      }
      let _days = Math.floor(dis / (24 * 3600 * 1000));
      dis -= _days * 24 * 3600 * 1000;
  
      let _hours = Math.floor(dis / (3600 * 1000));
      dis -= _hours * 3600 * 1000;
  
      let _mins = Math.floor(dis / (60 * 1000));
      dis -= _mins * 60 * 1000;
  
      let _secs = Math.floor(dis / 1000);
  
      setHTML(days, _days);
      setHTML(hours, _hours);
      setHTML(mins, _mins);
      setHTML(secs, _secs);
    }
  
    setNumbers();
  
    let timerID = setInterval(setNumbers, 1000);

    return () => clearInterval(timerID);
  })

  return (
    <div className="container">
      <h1>距离春节还剩下</h1>
      <div className="number-list">
        <div className="item">
          <div className="number" data-number="00">
            <div className="cur top"><span>00</span></div>
            <div className="cur bottom"><span>00</span></div>
            <div className="next top"><span>00</span></div>
            <div className="next bottom"><span>00</span></div>
          </div>
          <div className="label">DAYS</div>
        </div>
        <div className="item">
          <div className="number" data-number="00">
            <div className="cur top"><span>00</span></div>
            <div className="cur bottom"><span>00</span></div>
            <div className="next top"><span>00</span></div>
            <div className="next bottom"><span>00</span></div>
          </div>
          <div className="label">HOURS</div>
        </div>
        <div className="item">
          <div className="number" data-number="00">
            <div className="cur top"><span>00</span></div>
            <div className="cur bottom"><span>00</span></div>
            <div className="next top"><span>00</span></div>
            <div className="next bottom"><span>00</span></div>
          </div>
          <div className="label">MINS</div>
        </div>
        <div className="item">
          <div className="number" data-number="00">
            <div className="cur top"><span>00</span></div>
            <div className="cur bottom"><span>00</span></div>
            <div className="next top"><span>00</span></div>
            <div className="next bottom"><span>00</span></div>
          </div>
          <div className="label">SECS</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown;