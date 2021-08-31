const Checkbox = ({ type = 'checkbox', id, name, checked = false, onChange }) => (
    <input type={type} id={id} name={name} checked={checked} onChange={onChange} />
);

export default Checkbox;