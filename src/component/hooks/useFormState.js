import { useCallback, useState } from "react";

const useFormState = (initialValues) => {
  const [formState, setFormState] = useState(initialValues);

  const handleFormChange = useCallback(
    (id, value) => {
      setFormState((prev) => ({ ...prev, [id]: value }));
    },
    [setFormState]
  );
  return [formState, handleFormChange];
};

export default useFormState;
