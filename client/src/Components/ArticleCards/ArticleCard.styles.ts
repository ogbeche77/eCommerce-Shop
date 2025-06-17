import styled from "@emotion/styled";

export const ArticleCardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(15, 6, 6, 0.07)",
  padding: "1.5rem",
  margin: "1rem",
  minWidth: "220px",
  maxWidth: "220px",
  transition: "transform 0.18s",
  ":hover": {
    transform: "translateY(-4px) scale(1.03)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  },
});

export const ArticleImage = styled("img")({
  width: "100%",
  height: "140px",
  objectFit: "contain",
  marginBottom: "1rem",
  borderRadius: "8px",
  background: "#f7f7f7",
});

export const ArticleName = styled("div")({
  fontWeight: 600,
  fontSize: "1rem",
  marginBottom: "0.5rem",
  color: "#222",
  textAlign: "center",
});

export const ArticlePrice = styled("div")({
  fontWeight: 500,
  fontSize: "1.1rem",
  color: "#1976d2",
  marginBottom: "0.75rem",
});

export const AddToCartButton = styled("section")({
  background: "#1976d2",
  color: "#fff",
  borderRadius: "6px",
  padding: "0.5rem 1.2rem",
  fontWeight: 500,
  fontSize: "0.98rem",
  cursor: "pointer",
  textAlign: "center",
  marginTop: "auto",
  transition: "background 0.2s",
  ":hover": {
    background: "#115293",
  },
});
