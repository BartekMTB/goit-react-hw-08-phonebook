import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import css from './contactPage.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contactbook</title>
      </Helmet>

      <div>{isLoading && 'Request in progress...'}</div>
      <div className={css.main_div}>
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Phonebook
        </h2>
        <Form />
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Contacts
        </h2>
        <Filter />

        <ContactList></ContactList>
      </div>
    </>
  );
};

export default Contacts;
