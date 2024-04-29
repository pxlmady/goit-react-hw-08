import { useDispatch } from "react-redux";
import css from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { deleteContact } from "../../redux/contactsOps";
function Contact({ contactData }) {
  const dispatch = useDispatch();
  const handleDeleteButton = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;
  return (
    <div className={css.contactDataContainer}>
      <ul className={css.contactCard}>
        <div>
          <li className={css.contactData}>
            <span>{userIcon}</span>
            <p>{contactData.name}</p>
          </li>
          <li className={css.contactData}>
            <span>{phoneIcon}</span>
            <p>{contactData.number}</p>
          </li>
        </div>

        <li>
          {" "}
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDeleteButton(contactData.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
