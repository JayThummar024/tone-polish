const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <strong>Polished:</strong> {result}
    </div>
  );
};

export default ResultDisplay;
