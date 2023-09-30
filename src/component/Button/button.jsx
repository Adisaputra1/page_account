const ButtonAccount = (props) => {
  const { children, variant = 'bg-black' } = props;
  return (
    <button
      className={`h-32 px-6 mb-2 font-semibold rounded-md ${variant} text-white `}
      type="submit"
    >
      {children}
    </button>
  );
};

export default ButtonAccount;
