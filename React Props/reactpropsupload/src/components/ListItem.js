import React, { Component } from "react";

// Complete this Component
const ListItem = ({ listitem }) => {
  return (
    <>
      {listitem.map((item, index) => {
        return (
    
            <div
              className="ListItem"
              style={{
                height: 30,
                backgroundColor: item.bgColor
              }}
              key={index}
            >
              <img src={item.icon} alt="social-icon" role="img" />
              <a href={item.link}>{item.name}</a>
            </div>
      
        );
      })}
    </>
  );
};

export default ListItem;
