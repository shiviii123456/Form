import { useState } from "react";

const useLoader = () => {
  const [isFetching, setIsFetching] = useState(false);

  const toggleLoading = (value) => {
    setIsFetching(value);
  };
  return { isFetching, toggleLoading };
};

export default useLoader;
