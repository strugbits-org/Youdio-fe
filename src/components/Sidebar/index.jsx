import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  .vericalMenu {
    padding-inline: 8px;
    li {
      padding: 8px 16px;
      margin-block: 8px;
      transition: var(--transition01s);
      cursor: pointer;
      color: var(--textHeadingBlack);
      font-size: 18px;
      font-weight: 500;

      &[data-active="active"] {
        background: var(--backgroundGreen);
        color: white;
      }
      &:hover {
        transition: var(--transition01s);
        background: var(--backgroundGreen);
        color: white;
      }
    }
  }
`;
function SideBar({ menu }) {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handleMenuItem = (item) => {
    navigate(item.path);
    setActive(item.name)
  };
  return (
    <Container>
      <ul className="vericalMenu">
        {menu &&
          menu.map((item) => {
            return (
              <li
                key={item.path}
                data-active={item?.name === active ? "active" : ""}
                onClick={() => handleMenuItem(item)}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </Container>
  );
}

export default SideBar;
