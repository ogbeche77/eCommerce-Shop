import React, { useEffect, useState } from "react";
import { Category } from "../../types";
import {
  SidebarLink,
  SidebarList,
  SidebarListItem,
  SidebarTitle,
} from "../ProductList/ProductList.styles";
import { Backdrop, Drawer, HamburgerIcon } from "./HamburgerMenu.styles";

interface HamburgerMenuProps {
  categories: Category[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const childCats = categories[0]?.childrenCategories?.list || [];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <HamburgerIcon
        onClick={() => setOpen(true)}
        aria-label="Kategorien anzeigen"
      >
        &#9776;
      </HamburgerIcon>
      {open && <Backdrop onClick={() => setOpen(false)} />}
      {open && (
        <Drawer>
          <SidebarTitle>Kategorien</SidebarTitle>
          <SidebarList>
            {childCats.map(({ name }, idx) => (
              <SidebarListItem key={name || idx}>
                <SidebarLink>{name}</SidebarLink>
              </SidebarListItem>
            ))}
          </SidebarList>
        </Drawer>
      )}
    </>
  );
};

export default HamburgerMenu;
