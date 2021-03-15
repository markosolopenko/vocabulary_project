import React, { useState, useRef, useEffect, useMemo } from 'react';
import './tabs.scss'

export const Tabs = ({ activeTabId, onClick, tabsConfigArr }) => {
  const refs = useRef({});
  const [currTabWidth, setCurrTabWidth] = useState({
    width: 0,
    left: 0
  });
  const [count, setCount] = useState(0);
  const reduceLabels = useMemo(() => {
    return tabsConfigArr.map(tab =>
      <div
        ref={(ref) => { refs.current[tab.id] = ref }}
        className="tabs__item__label"
        key={tab.id}
        onClick={(e) => {
          onClick(tab.id)
          setCurrTabWidth({
            width: e.target.clientWidth,
            left: e.target.offsetLeft
          });
        }}
      >
        {tab.label}
      </div>
    )
  }, [tabsConfigArr, onClick]);
  const reduceContent = useMemo(() => {
    return tabsConfigArr.map(tab => {
      return (
        <div className="tabs__item__content" key={tab.id}>
          {(activeTabId === tab.id) && tab.content}
        </div>
      )
    })
  }, [tabsConfigArr, activeTabId]);
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
      <div className="tabs__item">
        {reduceLabels}
      </div>
      <div className="tabs__item">
        <div
          className="tabs__item__underline"
          style={currTabWidth}
        >
        </div>
      </div>
      <div className="tabs__item">
        {reduceContent}
      </div>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
    </div>
  )
}
