interface Props {
  label: string;
}

const InputLabel = ({ label }: Props) => {
  return (
    <span className="font-satoshi font-semibold text-base text-gray-700">
      {label}
    </span>
  );
};

export default InputLabel;
