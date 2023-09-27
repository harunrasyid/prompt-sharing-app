import InputLabel from "@components/InputLabel/InputLabel";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange(data: string): void;
}

const TextInput = ({ label, placeholder, value, onChange }: Props) => {
  return (
    <span className="font-satoshi font-semibold text-base text-gray-700">
      <label>
        <InputLabel label={label} />
        <input
          type="text"
          className="form_input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </label>
    </span>
  );
};

export default TextInput;
