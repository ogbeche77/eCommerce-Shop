import styled from "@emotion/styled";

export const CartButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;
  margin-left: 16px;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    background: #f7f7f7;
  }
`;

export const CartIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  font-size: 1.3em;
`;

export const CartCount = styled.span`
  background: #ff7043;
  color: #fff;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.95em;
  margin-left: 8px;
`;
