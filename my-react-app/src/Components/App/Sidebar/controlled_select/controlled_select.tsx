import { Option } from '../../../../additional/consts/options';

function ControlledSelect(props: {
  handleChange: (a: string) => void;
  name: string;
  className: string;
  currentState: string;
  options: Option[];
}) {
  const { handleChange, name, className, currentState, options } = props;
  let optionsElements: React.ReactNode[];
  (() => {
    optionsElements = options.map((option: Option) => (
      <option value={option.value} label={option.label} key={option.id} />
    ));
  })();
  return (
    <select
      value={currentState}
      className={className}
      name={name}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    >
      {optionsElements}
    </select>
  );
}

export default ControlledSelect;
