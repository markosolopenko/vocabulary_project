import React, { useState, useRef, useEffect, useMemo } from 'react';

import s from './Tabs.module.scss';

export const Tabs = ({ activeTabId, onClick, tabsConfigArr, isFlexible }) => {
  const refs = useRef({});
  const [currTabWidth, setCurrentTabWidth] = useState({
    width: 0,
    left: 0,
  });
  const reduceLabels = useMemo(() => {
    return tabsConfigArr.map((tab) => (
      <div
        ref={(ref) => {
          refs.current[tab.id] = ref;
        }}
        className={`${s.tabs__titles__label} ${isFlexible && s['tabs__titles__label--flexible']}`}
        key={tab.id}
        onClick={(e) => {
          onClick(tab.id);
          setCurrentTabWidth({
            width: e.target.clientWidth,
            left: e.target.offsetLeft,
          });
        }}
        style={tab.id === activeTabId ? { color: '#FCA311' } : null}
      >
        {tab.label}
      </div>
    ));
  }, [tabsConfigArr, onClick, activeTabId, isFlexible]);
  const reduceContent = useMemo(() => {
    return tabsConfigArr.map((tab) => {
      return (
        <div className={s.tabs__item__content} key={tab.id}>
          {activeTabId === tab.id && tab.content}
        </div>
      );
    });
  }, [tabsConfigArr, activeTabId]);
  useEffect(() => {
    setCurrentTabWidth({
      width: refs.current[activeTabId].clientWidth,
      left: refs.current[activeTabId].offsetLeft,
    });
  }, [activeTabId]);
  return (
    <div className={s.tabs}>
      <div className={`${s.tabs__titles} ${isFlexible && s['tabs__titles--flexible']}`}>{reduceLabels}</div>
      <div className={s['tabs__indicator-space']}>
        <div className={s.tabs__underline} style={currTabWidth}></div>
      </div>
      <div className={s.tabs__content}>{reduceContent}</div>
    </div>
  );
};
