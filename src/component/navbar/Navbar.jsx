import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = ()=>{
    showMenu? setShowMenu(false):setShowMenu(true)
  }

  return (
    <div>
      <div className={showMenu? 'nav':'navbar'}>
        <div className="logo">
          <h4>Wizztle</h4>
        </div>
        <div className={showMenu? 'nav_list':'nav_items'}>
          <div className={showMenu? 'services':'service'}>Service<ArrowDropDownIcon/>
            <div className="service_item">
            <p>Photography</p>
            <p>Videography</p>
            <p>Makeup Artist</p>
            <p>Planner</p>
            </div>
          </div>
          <div className="blog">Blog</div>
          {showSearch ? (
            <div>
              <input
                type="text"
                placeholder="Find service"
                className="service_input"
              />
            </div>
          ) : (
            <div className="search" onClick={()=>setShowSearch(true)}>
              <span className="search_icon">
                <SearchIcon />
              </span>
              Search
            </div>
          )}

          <div className="avtar">
            <Avatar
              alt="Remy Sharp"
              src="https://cinematichive.files.wordpress.com/2021/03/the-russo-brothers_the-gray-man_rege-jean-page_netflix_chris-evans_ryan-gosling_spy-film_.jpeg?w=1200"
            />
          </div>
        </div>
          <button className="vendor_register"><span className="vndor_btn_text">
           Register as a vendor
          </span>
           </button>
          <div className="menu_icon" onClick={handleMenu}>
            <MenuIcon fontSize="large" className="hamburger_icon"/>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
