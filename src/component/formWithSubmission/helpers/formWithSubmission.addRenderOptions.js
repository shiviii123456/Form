export const addRenderOptions = (field, additionalOptions) => {
  const { renderOption, ...restFields } = field;
  return {
    ...restFields,
    renderOption: {
      ...renderOption,
      ...additionalOptions,
    },
  };
};
