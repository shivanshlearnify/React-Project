import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/Hi";
import { IoMdTrash } from "react-icons/Io";
import { RiEditCircleLine } from "react-icons/Ri";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import { useState } from "react";
import useDisclose from "../hooks/useDisclose";

const ContactCard = ({ contacts }) => {
  const { onClose, onOpen, isopen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex bg-yellow justify-between p-2 rounded-lg mt-4"
          >
            <div className="flex gap-2">
              <HiOutlineUserCircle className="text-orange text-4xl" />
              <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl gap-3">
              <RiEditCircleLine onClick={onOpen} className=" cursor-pointer " />
              <IoMdTrash
                onClick={() => deleteContact(contact.id)}
                className="text-orange cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <AddAndUpdate contact={contacts} isUpdate isOpen={isopen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
