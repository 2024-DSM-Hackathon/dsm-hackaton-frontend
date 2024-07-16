export const Input = ({ label, value, onChange, placeholder, name, type }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={label} className="font-bold">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-b-2 focus:outline-none"
        name={name}
        type={type}
      />
    </div>
  );
};
