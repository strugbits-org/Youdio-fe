import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  .vericalMenu {
    padding-inline: 8px;
    li {
      margin-block: 8px;
      a {
        width: 100%;
        padding: 8px 16px;
        transition: var(--transition01s);
        color: var(--textHeadingBlack);
        font-size: 18px;
        font-weight: 500;
        display: inline-block;
      }
      .active {
        background: var(--backgroundGreen);
        color: white;
      }

      &:hover {
        a {
          transition: var(--transition01s);
          background: var(--backgroundGreen);
          color: white;
        }
      }
    }
  }
`;
function SideBar({ menu, setActive }) {
  return (
    <Container>
      <nav>
        <ul className="vericalMenu">
          {menu &&
            menu.map((item, ind) => {
              return (
                <li
                  key={`${item.path}-${ind}`}
                  onclick={() => setActive(item.name)}
                >
                  <NavLink to={item.path} state={{ activePath: item.name }}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </Container>
  );
}

export default SideBar;
