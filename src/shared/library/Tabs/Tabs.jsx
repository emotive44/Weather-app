import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Tabs.scss';


const Tabs = ({ children }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  const firstTab = children[0].props.label;

   // after refresh page to stay active the current tabname
   useEffect(() => {
    const currTab = location.search.split('=')[1];

    if(currTab) {
      setActiveTab(currTab)
    } else {
      setActiveTab(firstTab)
    }
  }, [location.search, firstTab]);

  // return array with one element [{}], which contain info for active tabName
  const content = children.filter((child) => child.props.label === activeTab);
  // get childrens on active tabname
  const tabContent = content[0]?.props.children;

  const tabs = children.map((child, i) => {
    const { tabName, label } = child.props;

    let to;
    // if the first tab clicks we will not change a url
    // else will add to url ?tabs={activeTabName}
    if(firstTab === label) {
      to = `${location.pathname}`;
    } else {
      to = `${location.pathname}?type=${label}`;
    }

    //add active class
    let activeClass = '';
    if(label === activeTab) {
      activeClass = 'tab-link-active';
    }

    return (
      <NavLink
        key               = {i}
        to                = {to}
        className         = 'tab-link'
        activeClassName   = {activeClass}
        onClick           = {() => setActiveTab(label)}
      >
        <span>{tabName}</span>
      </NavLink>
    )
  });

  return (
    <section className="tabs">
      <header className="tabs-header"> {tabs} </header>
      <main className="tabs-content"> {tabContent} </main>
    </section>
  );
}

export default Tabs;
