import React from 'react';

import HeartPNG from './assets/heart.png';
import StarPNG from './assets/star.png';
import * as S from './styled';

export interface ItemCardProps {
  children?: React.ReactNode;
}

export const ItemCard: React.FC<ItemCardProps> = () => {
  const TEST_IMAGE =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERDxEREREQEA8RDxISERESERIRERASGBQZGRgZGRgcJC4lHB4rIxgYJzgmKy8xNUM1GiQ7QDszTS40NTEBDAwMEA8QGBERHzEhGB00NDQ0MTExMTE0NDQ0Pz8/PzQ0NDQxNDQ0MTE0MTExNDQxMTQxMTExPzExMTE0MTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xAA/EAACAQMDAQUGAwUIAAcAAAABAgADBBEFEiExEyJBUWEGBzJxgZEUI6FScoKx8BVCYpKywcLRJENEg6Lh8f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAARASES/9oADAMBAAIRAxEAPwDskREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARMXqetUrd6aOy76gdlDOlMBVxkksQOpAx16+Rmqp71dPOR2V0WDMMKlJgQCe8DvHBHMDfomhj3l2rLUdaToiIz/nMEZ2AyFUKHHgeSRzjzka296FKpQeqaPY7KRcI5ZjUfB7qlRgDIHJ556QOixOZUvefvt3rNRWiy0gyod9XtGwfEbdoztwOTyfkbVp7z3ekalSklDFPcAqmsHfB5JLLtXgYHJ73pyHUonGLb3sXtQqgo2obHeJWocgeON/6SvU/eRdp+HSi2azHNQVEpmm4wAcBQCozuI5/ujrzlB2SJxTU/eJeJbpsqOLlqo72KRpkbiSoTZkDlRyx/Xi1fe3t4ts5aq3btwtRWCqpO3AVFAAxhjk5+I+Qlg7hE4dZe214tNqlzUes5pcfmPRCcE8LT2gtkryfLHjNdoe2eollT8Zc4JOPzGyMnPJz+sQfScYnz5f+01VbSrTdxUeoMGpUZnrZJHO5jwAFx9/OR9H1ypTVHq1Erts4/E4uNq8HADZx0XOOuBESvoh6qqpZmVVXqxICj5nwlqne0mba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';

  return (
    <>
      <div />

      <S.CardContainer>
        <S.Card>
          <S.FlexText>FLEX 상품</S.FlexText>

          <S.ImageCard src={TEST_IMAGE} />
          <S.SpanCard>
            <S.PriceRangeCard>5만원대</S.PriceRangeCard>
            <br />
            COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)
          </S.SpanCard>
          <br />
          <S.distance>
            <S.ReviewCard src={StarPNG} />
            <S.ReviewText>4.6</S.ReviewText>
            <br />
            <S.ReviewCard src={HeartPNG} />
            <S.ReviewText>20</S.ReviewText>
          </S.distance>
          <S.PriceCard>56,090원</S.PriceCard>
        </S.Card>

        <S.Card>
          <S.ImageCard src={TEST_IMAGE} />
          <S.SpanCard>
            <S.PriceRangeCard>5만원대</S.PriceRangeCard>
            <br />
            COX CK87 블랙 게이트론 LED 게이밍 기계식 (황축)
          </S.SpanCard>
          <br />
          <S.distance>
            <S.ReviewCard src={StarPNG} />
            <S.ReviewText>4.6</S.ReviewText>
            <br />
            <S.ReviewCard src={HeartPNG} />
            <S.ReviewText>20</S.ReviewText>
          </S.distance>
          <S.PriceCard>56,090원</S.PriceCard>
        </S.Card>
      </S.CardContainer>
    </>
  );
};
