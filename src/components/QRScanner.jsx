import { Scanner } from "@yudiel/react-qr-scanner";

function QRScanner({ onScan }) {
  return (
    <Scanner
      allowMultiple
      styles={{
        container: {
          borderRadius: "10px",
          border: "1px solid #BBBBBB",
        },
      }}
      onScan={(result) => onScan(result[0].rawValue)}
    />
  );
}

export default QRScanner;
