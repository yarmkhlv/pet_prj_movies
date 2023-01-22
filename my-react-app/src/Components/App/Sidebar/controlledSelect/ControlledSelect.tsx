import { Option } from '../../../../additional/options';

function ControlledSelect(props: {
  handleChange: (a: string) => void;
  name: string;
  textForClass: string;
  currentState: string;
  options: Option[];
}) {
  const { handleChange, name, textForClass, currentState, options } = props;
  let optionsElements: React.ReactNode[];
  (() => {
    optionsElements = options.map((option: Option) => (
      <option
        selected={currentState === option.value}
        value={option.value}
        label={option.label}
        key={option.id}
      />
    ));
  })();
  return (
    <select
      className={textForClass}
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
