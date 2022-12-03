import React, {useState} from 'react';
import NavBarComponent from "../../component/NavBarComponent";

export default function Profile(props){
  const [selectedTab,setSelectedTab] = useState(0);
  return <div className="container-fluid p-0">
    <NavBarComponent />
    <div className="container my-5">
      <div className="d-flex flex-column"
        style={{border:"double",borderColor:"#043d5d",borderRadius:"5px"}}>
        <h3 className="text-uppercase sc-color fw-bold text-center py-2"
          style={{borderBottom:"double"}}>
          information</h3>
          <ul className="nav nav-tabs justify-content-center fw-bold">
            <li className="nav-item"><a className={`text-uppercase d-flex align-items-center justify-content-center nav-link ${(selectedTab==0)?"vc-blue active":"text-secondary"}`} href="#" onClick={e=>setSelectedTab(0)}>
              <span className="material-symbols-outlined me-1">manage_accounts</span>
              <span className="d-none d-lg-block">Account</span>
            </a></li>
            <li className="nav-item"><a className={`text-uppercase d-flex align-items-center justify-content-center nav-link ${(selectedTab==1)?"vc-blue active":"text-secondary"}`} href="#" onClick={e=>setSelectedTab(1)}>
              <span className="material-symbols-outlined me-1">lock</span>
              <span className="d-none d-lg-block">Password</span>
            </a></li>
          </ul>
          <div className='mt-5'>

          </div>
      </div>
    </div>
  </div>
}