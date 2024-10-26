import React, {createContext, useContext, useState} from "react";

// Create context
const AdminModalContext = createContext();

// Custom hook to use the modal context
export const useAdminModal = () => {
  return useContext(AdminModalContext);
};

// Provider component
export const AdminModalProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal open/close

  // Functions to control the modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AdminModalContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </AdminModalContext.Provider>
  );
};
