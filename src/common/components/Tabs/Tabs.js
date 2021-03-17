import React, { useState, useRef, useEffect, useMemo } from 'react';

import s from './tabs.module.scss'

export const Tabs = ({ activeTabId, onClick, tabsConfigArr }) => {
  const refs = useRef({});
  const [currTabWidth, setCurrentTabWidth] = useState({
    width: 0,
    left: 0
  });
  const reduceLabels = useMemo(() => {
    return tabsConfigArr.map(tab =>
      <div
        ref={(ref) => { refs.current[tab.id] = ref }}
        className={s.tabs__titles__label}
        key={tab.id}
        onClick={(e) => {
          onClick(tab.id)
          setCurrentTabWidth({
            width: e.target.clientWidth,
            left: e.target.offsetLeft
          });
        }}
        style={tab.id === activeTabId ? {color: "#FCA311"}: null}
      >
        {tab.label}
      </div>
    )
  }, [tabsConfigArr, onClick, activeTabId]);
  const reduceContent = useMemo(() => {
    return tabsConfigArr.map(tab => {
      return (
        <div className={s.tabs__item__content} key={tab.id}>
          {(activeTabId === tab.id) && tab.content}
        </div>
      )
    })
  }, [tabsConfigArr, activeTabId]);
  useEffect(() => {
    setCurrentTabWidth(
      {
        width: refs.current[activeTabId].clientWidth,
        left: refs.current[activeTabId].offsetLeft
      }
    );
  }, [activeTabId]);
  return (
    <div className={s.tabs}>
      <div className={s.tabs__titles}>
          {reduceLabels}
      </div>
      <div className={s.tabs__item}>
        <div
          className={s.tabs__item__underline}
          style={currTabWidth}
        >
        </div>
      </div>
      <div className={s.tabs__item}>
        {reduceContent}
      </div>
    </div>
  )
}
