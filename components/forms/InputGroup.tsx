import { FC } from 'react';

interface InputGroupProps {
  className?: string;
  type: string;
  placeholder: string;
  value: string;
  error: string | undefined;
  // eslint-disable-next-line no-unused-vars
  setValue: (str: string) => void;
}

const InputGroup: FC<InputGroupProps> = ({
  className,
  type,
  placeholder,
  value,
  error,
  setValue,
}) => (
  <div className={className}>
    <input
      type={type}
      className={
        error
          ? 'border-red-500'
          : 'w-full p-3 transition duration-200 border border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white'
      }
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <small className="font-medium text-red-600">{error}</small>
  </div>
);

export default InputGroup;
