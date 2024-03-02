import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ SearchTerm }) => {
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={SearchTerm}
        />
        <button type="submit" className="btn">
          search
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
