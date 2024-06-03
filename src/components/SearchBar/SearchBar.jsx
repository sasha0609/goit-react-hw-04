import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formValue = form.elements.formValue.value;
    if (formValue.trim() === "") {
      toast.error("Please fill the field");
      return;
    }
    onSearch(formValue);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="formValue"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
