import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalInfo = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleModalInfo,
  };
};

export default useModal;