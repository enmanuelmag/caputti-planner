import { Checkbox } from 'webcoreui/react';

type Props = {
  label?: string;
  id: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
};

function Checkboxes(props: Props) {
  const { label, id, options, values, onChange } = props;

  return (
    <div className="w-full">
      {label && (
        <label className="block tracking-wide text-gray-700 text-base mb-2">
          {label}
        </label>
      )}
      <ul className="text-sm font-normal text-gray-900 bg-white border border-gray-200 rounded-lg">
        {options.map((option, idx) => (
          <Checkbox
            label={option}
            name={id}
            key={`${option}-${idx}`}
            value={option}
            className={`transition-colors duration-200 px-[1rem] py-[0.75rem] w-full hover:bg-gray-100 text-gray-800 border-gray-300 focus:ring-teal-500 focus:ring-2 accent-teal-600 ${
              idx !== options.length - 1 ? 'border-b' : ''
            }`}
            checked={values.includes(option)}
            onClick={() => {
              const newValue = !values.includes(option);

              const newValues = [...values];

              if (newValue) {
                newValues.push(option);
              } else {
                newValues.splice(newValues.indexOf(option), 1);
              }

              console.log(newValues);

              onChange(newValues);
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Checkboxes;
