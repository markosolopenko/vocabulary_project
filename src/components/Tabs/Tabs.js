import React, { useState, useRef, useEffect } from 'react';
import './tabs.scss'

export const Tabs = ({ activeTabId, onClick, tabsConfigArr }) => {
  const refs = useRef({});
  const [currTabWidth, setCurrTabWidth] = useState({
    width: 0,
    left: 0
  });
  const ReduceLabels = () => {
    const labels = tabsConfigArr.map((tab) => 
       <div
        ref={(ref) => {
          refs.current[tab.id] = ref  
        }}
        className="tabs__item__label"
        onClick={(e) => {
          onClick(tab.id)
          setCurrTabWidth({ width: e.target.clientWidth, left: e.target.offsetLeft });
        }}
        key={tab.id}
      >
        {tab.label}
      </div>
    )
    return <div className="tabs__item">{labels}</div>
  }
  useEffect(() => {
    setCurrTabWidth(
      {
        width: refs.current[activeTabId].clientWidth,
        left: refs.current[activeTabId].offsetLeft
      }
    );
  }, [activeTabId]);
  return (
    <div className="tabs">
      <ReduceLabels />
      <div className="tabs__item">
        <div 
          className="tabs__item__underline" 
          style={currTabWidth}
         >
          </div>
      </div>
      {
        tabsConfigArr.map(tab => 
          <div className="tabs__content" key={tab.id}>
              {(activeTabId === tab.id) && tab.content}
          </div>  
        )
      }
    </div>
  )
}
