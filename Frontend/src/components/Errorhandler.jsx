export const ErrorHandler = ({ errors, name }) => {
    return errors[name] ? (
      <p className="text-red-500 text-sm mt-1 ml-8">{errors[name]}</p>
    ) : null;
  };
  