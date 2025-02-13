import React, {useState} from 'react';
import NavBarComponent from "../../component/NavBarComponent";
import Account from './Account';
import Driver from './Driver';

const FONT_SIZE = '15px';

export default function Profile(props){
  const [selectedTab,setSelectedTab] = useState(0);

  let currentTab=null

  switch(selectedTab){
    case 0: currentTab = <Account FONT_SIZE={FONT_SIZE}/>
      break;
    case 1: currentTab = <Driver FONT_SIZE={FONT_SIZE}/>
      break;
  }

  return <div className="container-fluid p-0">
    <NavBarComponent />
    <div className="container py-4">
      <div className="d-flex flex-column"
        style={{border:"double",borderColor:"#043d5d",borderRadius:"5px"}}>
        <h3 className="text-uppercase sc-color fw-bold text-center py-3"
          style={{borderBottom:"double"}}>
          information</h3>
          <ul className="nav nav-tabs justify-content-center fw-bold">
            <li className="nav-item"><a className={`text-uppercase d-flex align-items-center justify-content-center nav-link ${(selectedTab==0)?"vc-blue active":"text-secondary nav-link-non-active"}`} style={{cursor:"pointer"}} onClick={e=>setSelectedTab(0)}>
              <span className="material-symbols-outlined me-1">manage_accounts</span>
              <span className="d-none d-lg-block">Account</span>
            </a></li>
            <li className="nav-item"><a className={`text-uppercase d-flex align-items-center justify-content-center nav-link ${(selectedTab==1)?"vc-blue active":"text-secondary nav-link-non-active"}`} style={{cursor:"pointer"}} onClick={e=>setSelectedTab(1)}>
              <span className="material-symbols-outlined me-1">directions_car</span>
              <span className="d-none d-lg-block">Driver</span>
            </a></li>
          </ul>
          {currentTab}
      </div>
    </div>
  </div>
}