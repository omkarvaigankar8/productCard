import { useFormContext } from "react-hook-form";
import './form.scss';

function Form({ children, ref, onSubmit, autoComplete, ...rest }) {
  const methods = useFormContext();
  const { handleSubmit } = methods;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete={autoComplete ? "on" : "off"}
      ref={ref}
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
