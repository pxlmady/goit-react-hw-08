import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && !isError && <Loader />}
        <ContactList />
      </div>
    </>
  );
}

export default App;
