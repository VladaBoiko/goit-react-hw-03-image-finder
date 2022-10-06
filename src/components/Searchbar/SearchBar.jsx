import { Form, Field, Formik } from 'formik';
import { Header } from './SearchBar.styled';
import PropTypes from 'prop-types';
const initialValues = {
  query: '',
  page: 1,
};
export const SearchBar = ({ updateQuery, getData }) => {
  const handleSubmit = (values, { resetForm }) => {
    // console.log(values.query, 'до апдейт');
    updateQuery(values);
    // console.log(values.query, 'до гет');
    getData();
    // console.log(values, 'до ресет');
    resetForm();
    // console.log(values, 'после ресет');
  };
  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Formik>
    </Header>
  );
};

SearchBar.propTypes = {
  updateQuery: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};
