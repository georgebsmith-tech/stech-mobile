import React, { useState, createContext } from "react";
import { View, Text } from "react-native";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [checkoutModalIsOpen, setCheckoutModalIsOpen] = useState(false);
  const [addToCartModalISOpen, setAddToCartModalISOpen] = useState(false);
  const [beforePayingModal, setBeforePayingModal] = useState(false);
  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);
  const [withdrawModalIsOpen, setWithdrawModalIsOpen] = useState(false);

  const value = {
    withdrawModalIsOpen,
    setWithdrawModalIsOpen,
    checkoutModalIsOpen,
    setCheckoutModalIsOpen,
    addToCartModalISOpen,
    setAddToCartModalISOpen,
    beforePayingModal,
    setBeforePayingModal,
    depositModalIsOpen,
    setDepositModalIsOpen,
    loadingModalIsOpen,
    setLoadingModalIsOpen,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
