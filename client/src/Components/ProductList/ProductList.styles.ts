import styled from "@emotion/styled";

export const Page = styled("div")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "#f5f7fa",
});

export const Header = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.5rem 2rem",
  background: "#1976d2",
  color: "#fff",
  boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)",
});

export const Brand = styled("strong")({
  fontSize: "1.7rem",
  letterSpacing: "0.05em",
  fontWeight: 700,
});

export const SearchInput = styled("input")({
  padding: "0.7rem 1.2rem",
  border: "none",
  borderRadius: "6px",
  fontSize: "1rem",
  background: "#fff",
  color: "#222",
  boxShadow: "0 1px 3px rgba(25, 118, 210, 0.08)",
  width: "240px",
  maxWidth: "100%",
  outline: "none",
  "::placeholder": {
    color: "#aaa",
  },
});

export const MainContent = styled("div")({
  display: "flex",
  flex: 1,
  minHeight: 0,
  '@media (max-width: 900px)': {
    flexDirection: "column",
  },
});

export const Sidebar = styled("aside")({
  flex: "0 0 220px",
  background: "#fff",
  padding: "2rem 1.5rem",
  boxShadow: "2px 0 8px rgba(25, 118, 210, 0.03)",
  minHeight: "calc(100vh - 120px)",
  '@media (max-width: 900px)': {
    display: "none",
  },
  display: "block",
});

export const SidebarTitle = styled("h3")({
  fontWeight: 700,
  fontSize: "1.2rem",
  color: "#1976d2",
  marginBottom: "1.2rem",
});
export const SidebarText = styled("div")({
  color: "#555",
  fontSize: "1rem",
  marginTop: "1rem",
});
export const SidebarList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
});
export const SidebarListItem = styled("li")({
  marginBottom: "0.7rem",
});
export const SidebarLink = styled("a")({
  color: "#222",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "1rem",
  borderRadius: "4px",
  padding: "0.3rem 0.5rem",
  display: "block",
  transition: "background 0.15s, color 0.15s",
  ':hover': {
    background: "#e3f2fd",
    color: "#1976d2",
  },
});

export const Content = styled("main")({
  flex: 1,
  padding: "2.5rem 2rem",
  '@media (max-width: 900px)': {
    padding: "1.5rem 0.5rem",
  },
});
export const ContentTitle = styled("h1")({
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  color: "#222",
});
export const ContentCount = styled("small")({
  color: "#888",
  fontWeight: 400,
  fontSize: "1.1rem",
  marginLeft: "0.5rem",
});
export const ContentText = styled("div")({
  color: "#555",
  fontSize: "1rem",
  marginBottom: "1.2rem",
});

export const Articles = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "1.5rem",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  '@media (max-width: 700px)': {
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
  },
});

export const Footer = styled("footer")({
  background: "#222",
  color: "#fff",
  padding: "1.2rem 2rem",
  textAlign: "center",
  fontSize: "1rem",
  marginTop: "auto",
});
