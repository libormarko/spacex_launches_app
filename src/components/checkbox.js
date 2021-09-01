const Checkbox = ({ type = 'radio', id, name, onChange, value }) => (
    <input type={type} id={id} name={name} onChange={onChange} value={value}/>
);

export default Checkbox;