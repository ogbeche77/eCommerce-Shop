import styled from "@emotion/styled";

export const ArticleCardContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(15, 6, 6, 0.07)",
  padding: "2rem 1.5rem 1.5rem 1.5rem",
  minWidth: "220px",
  maxWidth: "220px",
  minHeight: "350px",
  height: "350px",
  boxSizing: "border-box",
  transition: "transform 0.18s",
  ":hover": {
    transform: "translateY(-4px) scale(1.03)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  },
});

export const ArticleCardContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  flexGrow: 1,
  width: "100%",
  height: "100%",
});

export const ArticleImageWrapper = styled("div")({
  width: "100%",
  height: "140px",
  maxWidth: "180px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  background: "#f7f7f7",
  borderRadius: "8px",
  boxSizing: "border-box",
});

export const ArticleImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  display: "block",
  margin: 0,
  borderRadius: "8px",
});

export const ArticleName = styled("div")({
  fontWeight: 600,
  fontSize: "1rem",
  marginBottom: 0,
  color: "#222",
  textAlign: "center",
  minHeight: "2.2em",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingTop: "1rem",
});

export const ArticlePrice = styled("div")({
  fontWeight: 500,
  fontSize: "1.1rem",
  color: "#1976d2",
  marginBottom: "0.75rem",
  minHeight: "1.5em",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
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
