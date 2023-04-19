export default function Button({ style, children }) {
  return (
    <button
      type="button"
      className={`outline-none rounded-full  uppercase px-4 py-2 text-xs ${
        style ? style : "border-none"
      }`}
    >
      {children}
    </button>
  );
}
