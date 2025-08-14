import { Scanner } from "@yudiel/react-qr-scanner";

function QRScanner({ onScan, scannerPause }) {
  return (
    <Scanner
      styles={{
        container: {
          borderRadius: "10px",
          border: "1px solid #BBBBBB",
        },
      }}
      onScan={(result) => onScan(result[0].rawValue)}
      paused={scannerPause}
    />
  );
}

export default QRScanner;
