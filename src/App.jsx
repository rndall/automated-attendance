import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import AttendanceSection from "./components/AttendanceSection";

function App() {
  return (
    <MantineProvider>
      <AttendanceSection />
    </MantineProvider>
  );
}

export default App;
