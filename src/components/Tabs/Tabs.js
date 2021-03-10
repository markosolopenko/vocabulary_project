import React from 'react';
import './tabs.scss'

export const Tabs = ({activeTabId, onClick, tabsConfigArr}) => {
  return (
    <div className="tabs-container">
      {
        tabsConfigArr.map((tab) => 
          <div className="tab-box" key={tab.id} onClick={() => onClick(tab.id)}>
            <div className="tab-box__label">{tab.label}</div>
            <div className={activeTabId === tab.id ? "tab-box__content": "inactive"}>
              {tab.content}
            </div>
          </div>
        )
        
      } 
    </div>
  )
}