import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const ContactsArray = useSelector(selectContacts);
  console.log(ContactsArray);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value || '',
    };

    if (ContactsArray.map(el => el.name).includes(form.elements.name.value))
      //dispatch(editContact(contact));
      alert(`${form.elements.name.value} is already in contacts`);
    else dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} class="max-w-3xl w-max">
      <div class="mx-auto  sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
        <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
          <label
            for="hs-hero-name-1"
            class="block text-sm font-medium dark:text-white"
          >
            <span class="sr-only">Your name</span>
          </label>
          <input
            type="text"
            name="name"
            id="hs-hero-name-1"
            pattern="^[A-Za-z.'\- ]+$"
            class="py-3 px-4 block w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:p-4   "
            placeholder="Name"
          />
        </div>
        <div class="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-100 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] ">
          <label
            for="hs-hero-email-1"
            class="block text-sm font-medium dark:text-white"
          >
            <span class="sr-only">Your email address</span>
          </label>
          <input
            type="tel"
            name="number"
            id="hs-hero-email-1"
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            class="py-3 px-4 block w-full rounded-md text-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:p-4   "
            placeholder="Phone"
          />
        </div>
        <div class="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
          <button class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-4 dark:focus:ring-offset-gray-800">
            Add contacts
          </button>
        </div>
      </div>
    </form>
  );
};
