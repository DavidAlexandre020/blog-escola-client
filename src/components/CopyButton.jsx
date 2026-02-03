import { useState } from "react";
import { CgLink } from "react-icons/cg";
import { IoCheckmarkOutline } from "react-icons/io5";

const CopyButton = ({ text }) => {
    const [copyIcon, setCopyIcon] = useState(<CgLink />)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyIcon(IoCheckmarkOutline)
      setInterval(() => {
        setCopyIcon(CgLink)
      }, 800)
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }
  };

  return (
    <button className="bg-gray-300 text-[#e91a39] hover:text-white hover:bg-[#e91a39] p-2 text-xl rounded-full share" onClick={handleCopy}>
        {copyIcon}
    </button>
  );
};

export default CopyButton;
