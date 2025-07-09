import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Article, Category } from "../../types";

import ArticleCard from "../ArticleCards/ArticleCard";
import Pagination from "../Pagination/Pagination";
import {
  Articles,
  Content,
  ContentCount,
  ContentText,
  ContentTitle,
  Footer,
  MainContent,
  Page,
} from "./ProductList.styles";
import { PRODUCT_LIST_QUERY } from "./productListQuery";

interface OutletContext {
  addToCart: (article: Article) => void;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  categories: Category[];
  setCategories: (cats: Category[]) => void;
}

const ArticleList: React.FC = () => {
  const { addToCart, searchTerm, categories, setCategories } =
    useOutletContext<OutletContext>();

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
            query: PRODUCT_LIST_QUERY(articlesPerPage, page),
          }),
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();

        setCategories(result.data.categories);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Error fetching data");
        } else {
          setError("Error fetching data");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, articlesPerPage, setCategories]);

  const articleCount = categories[0]?.articleCount || 0;

  const filteredArticles = (
    categories[0]?.categoryArticles?.articles || []
  ).filter(
    (article: Article) =>
      !searchTerm ||
      article.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.variantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const articles = filteredArticles.map((article: Article, idx: number) => (
    <ArticleCard
      article={article}
      key={`article-${idx}`}
      onAddToCart={() => addToCart(article)}
    />
  ));

  // Pagination logic
  const totalPages = Math.ceil(articleCount / articlesPerPage);
  const startIdx = (page - 1) * articlesPerPage + 1;
  const endIdx = Math.min(page * articlesPerPage, articleCount);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <Page>
      <MainContent>
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
          <Articles>
            {filteredArticles.length === 0 && !loading && !error ? (
              <ContentText
                style={{ color: "#888", textAlign: "center", width: "100%" }}
              >
                Es wurden keine Artikel gefunden, die Ihrer Suche entsprechen.
              </ContentText>
            ) : (
              articles
            )}
          </Articles>
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
