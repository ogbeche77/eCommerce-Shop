import React, { useEffect, useState } from "react";

import { Category } from "../../types";
import ArticleCard from "../ArticleCards/ArticleCard";
import Pagination from "../Pagination/Pagination";
import {
  Articles,
  Brand,
  Content,
  ContentCount,
  ContentText,
  ContentTitle,
  Footer,
  Header,
  MainContent,
  Page,
  SearchInput,
  Sidebar,
  SidebarLink,
  SidebarList,
  SidebarListItem,
  SidebarText,
  SidebarTitle,
} from "./ProductList.styles";

const ArticleList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const articlesPerPage = 120;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `{
              categories: productLists(ids: "156126", locale: de_DE) {
                name
                articleCount
                childrenCategories: childrenProductLists {
                  list {
                    name
                    urlPath
                  }
                }
                categoryArticles: articlesList(first: ${articlesPerPage}, offset: ${
              (page - 1) * articlesPerPage
            }) {
                  articles {
                    name
                    variantName
                    prices {
                      currency
                      regular {
                        value
                      }
                    }
                    images(
                      format: WEBP
                      maxWidth: 200
                      maxHeight: 200
                      limit: 1
                    ) {
                      path
                    }
                  }
                }
              }
            }`,
          }),
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        console.log(result);

        setCategories(result.data.categories);
      } catch (err: any) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, articlesPerPage]);

  const articleCount = categories[0]?.articleCount || 0;
  const articles = categories.flatMap((category, i) =>
    category?.categoryArticles?.articles.map((article, j) => (
      <ArticleCard article={article} key={`article-${i}-${j}`} />
    ))
  );

  // Pagination controls
  const totalPages = Math.ceil(articleCount / articlesPerPage);
  const startIdx = (page - 1) * articlesPerPage + 1;
  const endIdx = Math.min(page * articlesPerPage, articleCount);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <Page>
      <Header>
        <Brand>home24</Brand>
        <SearchInput placeholder={"Search"} />
      </Header>
      <MainContent>
        <Sidebar>
          <SidebarTitle>Kategorien</SidebarTitle>
          {loading ? (
            <SidebarText>Loading...</SidebarText>
          ) : error ? (
            <SidebarText style={{ color: "#d32f2f" }}>{error}</SidebarText>
          ) : categories.length && categories[0]?.childrenCategories ? (
            <SidebarList>
              {categories[0]?.childrenCategories?.list.map(
                ({ name, urlPath }, idx) => (
                  <SidebarListItem key={urlPath || idx}>
                    <SidebarLink href={`/${urlPath}`}>{name}</SidebarLink>
                  </SidebarListItem>
                )
              )}
            </SidebarList>
          ) : (
            <SidebarText>No categories found.</SidebarText>
          )}
        </Sidebar>
        <Content>
          {loading ? (
            <ContentText>Loading...</ContentText>
          ) : error ? (
            <ContentText style={{ color: "#d32f2f" }}>{error}</ContentText>
          ) : categories.length ? (
            <ContentTitle>
              {categories[0].name}
              <ContentCount> ({categories[0].articleCount})</ContentCount>
            </ContentTitle>
          ) : null}
          <Articles>{articles}</Articles>
          <Pagination
            page={page}
            totalPages={totalPages}
            startIdx={startIdx}
            endIdx={endIdx}
            totalCount={articleCount}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </Content>
      </MainContent>
      <Footer>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </Footer>
    </Page>
  );
};

const PLP: React.FC = () => {
  return <ArticleList />;
};

export default PLP;
