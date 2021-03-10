import React from 'react';
import './tabs.scss'

export const Tabs = ({activeTabId, onClick, tabsConfigArr}) => {
  return (
    <div className="tabs-container">
      {
        tabsConfigArr.map((tab) => 
          <div className="tab-box" key={tab.id} onClick={() => onClick(activeTabId)}>
            <div className="tab-box__label">{tab.label}</div>
            <div className="tab-box__content">
              {tab.content}
            </div>
          </div>
        )
        
      } 
    </div>
  )
}