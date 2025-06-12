interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "12px 20px",
        margin: "20px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "fit-content",
        textAlign: "center",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Total books in library: {count}
      </p>
    </div>
  );
};
