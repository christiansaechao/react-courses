export function Message({ checked, text }) {
  console.log("Message component");
  return (
    <p
      id="message"
      style={{ textDecoration: checked ? "line-through" : "none" }}
    >
      {text}
    </p>
  );
}
