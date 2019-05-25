import React from 'react';
import SidebarProcessos from './SidebarProcessos';
import SidebarEtiquetas from './SidebarEtiquetas';
import SidebarFeitos from './SidebarFeitos';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <SidebarProcessos />
                <SidebarEtiquetas />
                <SidebarFeitos />
            </div>
        </div>
    )
}

export default Sidebar;