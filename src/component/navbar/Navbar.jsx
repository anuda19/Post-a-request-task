import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h4>Whistle</h4>
        </div>
        <div className="nav_items">
          <div className="service">Service</div>
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
            <div className="search" onClick={() => setShowSearch(true)}>
              <span className="search_icon">
                <SearchIcon />
              </span>
              Search
            </div>
          )}

          <div>
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
          <div className="menu_icon">
            <MenuIcon fontSize="large" className="hamburger_icon"/>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
