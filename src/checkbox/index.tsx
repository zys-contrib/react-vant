import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';

const CheckboxNamespace = Object.assign(Checkbox, { Group: CheckboxGroup });

export default CheckboxNamespace;
export { CheckboxNamespace as Checkbox, CheckboxGroup };
export type { CheckBoxGroupProps, CheckboxProps } from './PropsType';
