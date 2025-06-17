import styled from "@emotion/styled";

export const HamburgerIcon = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 16px;
  color: #333;
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: #fff;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  padding: 32px 18px 18px 18px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #bbb #fff;

  /* For Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.18);
  z-index: 999;
`;
