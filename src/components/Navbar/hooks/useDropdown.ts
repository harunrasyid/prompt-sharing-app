import { useState } from "react";

export default function useDropdown() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return {
    showDropdown,
    setShowDropdown,
  };
}
