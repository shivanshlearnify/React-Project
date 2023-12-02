import { useState } from "react";

const useDisclose = () => {
  const [isopen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return {onClose, onOpen, isopen};
};

export default useDisclose;
