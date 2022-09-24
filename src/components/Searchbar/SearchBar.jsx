import { Form, Field, Formik } from 'formik';
const initialValues = {
  query: '',
  page: 1,
};
export const SearchBar = ({ updateQuery, getData }) => {
  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    updateQuery(values);
    getData(values);
    resetForm();
  };
  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          {/* <label htmlFor="search"> */}
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          {/* <ErrorMessage name="search" component="p" /> */}
          {/* </label> */}

          <button type="submit">
            <span>Search</span>
          </button>
        </Form>
      </Formik>
    </header>
  );
};
