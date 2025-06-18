import styled from "@emotion/styled";

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 1rem 1.5rem;
  gap: 1.5rem;
`;
export const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
  background: #f7f7f7;
`;
export const ItemInfo = styled.div`
  flex: 1;
`;
export const ItemName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
`;
export const ItemPrice = styled.div`
  color: #1976d2;
  font-weight: 500;
  margin-top: 0.2rem;
`;
export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const QtyBtn = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #115293;
  }
`;
export const RemoveBtn = styled.button`
  background: #ff7043;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.4rem 0.9rem;
  font-size: 0.96rem;
  margin-left: 1.2rem;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #d84315;
  }
`;
export const EmptyCart = styled.div`
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  margin-top: 2.5rem;
`;

// Styled total summary
export const Summary = styled.div`
  margin-top: 2.5rem;
  padding: 1.5rem 2rem;
  background: #f7f7fa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;
export const TotalLabel = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
`;
export const TotalValue = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1976d2;
  margin-left: 1.2rem;
`;
export const PayButton = styled.button`
  background: #43a047;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.7rem 2.2rem;
  cursor: pointer;
  transition: background 0.18s;
  margin-left: 2.5rem;
  &:hover {
    background: #2e7031;
  }
`;
