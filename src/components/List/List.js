import styled from "styled-components";
import { useSelector } from "react-redux";
import Grocery from "../Grocery/Grocery";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const List = () => {
  const groceries = useSelector((state) => state.groceries);

  return (
    <>
      <StyledArticles className="list-unstyled col-12">
        {groceries.map((grocery) => (
          <StyledArticle key={grocery.name} className="row">
            <Grocery grocery={grocery} />
          </StyledArticle>
        ))}
      </StyledArticles>
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default List;
