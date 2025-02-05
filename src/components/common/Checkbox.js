const Checkbox = ({ label, name, checked, onChange }) => {
    return (
      <div className="flex items-center">
        <input
          id={name}
          type="checkbox"
          name={name}
          checked={checked}
          className="mr-2 w-4 h-4"
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  };
  
  export default Checkbox;
  