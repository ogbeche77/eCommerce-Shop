import React, { useEffect, useState } from "react";

import "./ProductList.css";
import { Article, Category } from "./types";

var intlNumberFormatValues = ["de-DE", "currency", "EUR"];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

export var ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className={"article"}>
      <img src={article.images[0].path} alt="" />
      <div>{article.name}</div>
      <div>{formatter.format(article.prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  );
};

const ArticleList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
                categoryArticles: articlesList(first: 120) {
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
        setCategories(result.data.categories);
      } catch (err: any) {
        setError(err.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const articles = categories.flatMap((category, i) =>
    category.categoryArticles.articles.map((article, j) => (
      <ArticleCard article={article} key={`article-${i}-${j}`} />
    ))
  );

  return (
    <div className={"page"}>
      <div className={"header"}>
        <strong>home24</strong>
        <input placeholder={"Search"} />
      </div>

      <div className={"sidebar"}>
        <h3>Kategorien</h3>
        {loading ? (
          "Loading..."
        ) : error ? (
          <span style={{ color: "red" }}>{error}</span>
        ) : categories.length && categories[0].childrenCategories ? (
          <ul>
            {categories[0].childrenCategories.list.map(
              ({ name, urlPath }, idx) => (
                <li key={urlPath || idx}>
                  <a href={`/${urlPath}`}>{name}</a>
                </li>
              )
            )}
          </ul>
        ) : (
          "No categories found."
        )}
      </div>

      <div className={"content"}>
        {loading ? (
          "Loading..."
        ) : error ? (
          <span style={{ color: "red" }}>{error}</span>
        ) : categories.length ? (
          <h1>
            {categories[0].name}
            <small> ({categories[0].articleCount})</small>
          </h1>
        ) : null}
        <div className={"articles"}>{articles}</div>
      </div>

      <div className={"footer"}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
        Versandkosten.
      </div>
    </div>
  );
};

const PLP: React.FC = () => {
  return <ArticleList />;
};

export default PLP;
