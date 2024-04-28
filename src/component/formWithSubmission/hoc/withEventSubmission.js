
const withEventSubmission = (Component) => {
  const withEventSubmissionHandle = (props) => {
    const { onSubmit } = props;

    const handleSubmit = () => {
      onSubmit();
    };

    return <Component {...props} onSubmit={handleSubmit} />;
  };

  return withEventSubmissionHandle;
};

export default withEventSubmission;
