import { Checkbox } from 'webcoreui/react';

type Props = {
  label: string;
  id: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
};

function Checkboxes(props: Props) {
  const { label, id, options, values, onChange } = props;

  return (
    <div className="w-full">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {options.map((option) => (
          <Checkbox
            label={option}
            name={id}
            value={option}
            className="transition-colors duration-200 px-[1rem] py-[0.75rem] w-full border-b hover:bg-gray-100 text-teal-600 border-gray-300 focus:ring-teal-500 focus:ring-2 accent-teal-600"
            checked={values.includes(option)}
            onClick={() => {
              const newValue = !values.includes(option);

              console.log({ newValue });

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
          // <li className="w-full border-b border-gray-200 rounded-t-lg hover:bg-gray-50">
          //   <div className="flex items-center ps-3">
          //     <input
          //       name={id}
          //       id={option}
          //       type="checkbox"
          //       value={option}
          //       className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2 accent-teal-600"
          //     />
          //     <label
          //       for={option}
          //       className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
          //     >
          //       {option}
          //     </label>
          //   </div>
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkboxes;
