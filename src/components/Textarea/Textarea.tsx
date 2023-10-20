import InputLabel from "@components/InputLabel/InputLabel";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange(data: string): void;
}

const Textarea = ({ label, placeholder, value, onChange }: Props) => {
  return (
    <span className="font-satoshi font-semibold text-base text-gray-700">
      <label>
        <InputLabel label={label} />
        <textarea
          className="form_textarea"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
        />
      </label>
    </span>
  );
};

export default Textarea;
