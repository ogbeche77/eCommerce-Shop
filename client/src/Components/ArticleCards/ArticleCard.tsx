import React, { ElementType } from "react";
import { Article } from "../../types";
import { formatter } from "../../Util/formatter";
import {
  AddToCartButton,
  ArticleCardContainer,
  ArticleCardContent,
  ArticleImage,
  ArticleImageWrapper,
  ArticleName,
  ArticlePrice,
} from "./ArticleCard.styles";
import LazyImage from "./LazyImage";

interface ArticleCardProps {
  article: Article;
  onAddToCart?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onAddToCart }) => {
  return (
    <ArticleCardContainer>
      <ArticleCardContent>
        <ArticleImageWrapper>
          <LazyImage
            as={ArticleImage as ElementType}
            src={article.images[0].path}
            alt={article.name}
          />
        </ArticleImageWrapper>
        <ArticleName>{article.name}</ArticleName>
        <ArticlePrice>
          {formatter.format(article.prices.regular.value / 100)}
        </ArticlePrice>
        <div style={{ flexGrow: 1 }} />
      </ArticleCardContent>
      <AddToCartButton role="button" onClick={onAddToCart}>
        Add to cart
      </AddToCartButton>
    </ArticleCardContainer>
  );
};

export default ArticleCard;
