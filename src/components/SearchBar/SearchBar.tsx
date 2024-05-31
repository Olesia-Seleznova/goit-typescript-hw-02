import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (newQuery: string) => Promise<void>;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const notify = () => toast.error("Text must be entered");

  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            notify();
          } else {
            onSearch(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <button className={css.btn} type="submit">
            <AiOutlineSearch className={css.searchIcon} size="20" />
          </button>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <Toaster position="top-right" />
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
