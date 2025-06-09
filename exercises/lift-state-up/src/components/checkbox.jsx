export function Checkbox({ checked, onChange }) {
  console.log("checbox component");
  return (
    <input type="checkbox" name="" id="" value={checked} onChange={onChange} />
  );
}
