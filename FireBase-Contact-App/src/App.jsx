import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from "./hooks/useDisclose";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { onClose, onOpen, isopen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapShot = await getDocs(contactsRef);
        const contactList = contactsSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <>
      <div className=" mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="flex relative flex-grow items-center ">
            <FiSearch className=" ml-1 text-white text-3xl absolute " />
            <input
              type="text"
              className="text-white flex-grow h-10 border bg-transparent rounded-md border-white pl-9 "
            />
          </div>

          <FaPlusCircle
            onClick={onOpen}
            className="text-5xl cursor-pointer text-white "
          />
        </div>
        <ContactCard contacts={contacts} />
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isopen} />
    </>
  );
};

export default App;
