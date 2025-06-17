import React from "react";
import { Article } from "../../types";
import { formatter } from "../../Util/formatter";
import {
  AddToCartButton,
  ArticleCardContainer,
  ArticleImage,
  ArticleName,
  ArticlePrice,
} from "./ArticleCard.styles";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <ArticleCardContainer>
      <ArticleImage src={article.images[0].path} alt={article.name} />
      <ArticleName>{article.name}</ArticleName>
      <ArticlePrice>
        {formatter.format(article.prices.regular.value / 100)}
      </ArticlePrice>
      <AddToCartButton role="button">Add to cart</AddToCartButton>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
