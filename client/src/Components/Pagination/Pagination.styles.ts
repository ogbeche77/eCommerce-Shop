import styled from "@emotion/styled";

export const PaginationContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  margin: "2rem 0",
});

export const PaginationBtn = styled("button")<{
  disabled?: boolean;
}>(({ disabled }) => ({
  padding: "0.5rem 1rem",
  borderRadius: 4,
  border: "1px solid #1976d2",
  background: disabled ? "#eee" : "#1976d2",
  color: disabled ? "#888" : "#fff",
  cursor: disabled ? "not-allowed" : "pointer",
  fontSize: "1rem",
  transition: "background 0.2s, color 0.2s",
}));

export const PaginationInfo = styled("span")({
  fontWeight: 500,
  color: "#1976d2",
});

export const PaginationRange = styled("span")({
  marginLeft: 24,
  color: "#555",
  fontSize: "0.98rem",
});
