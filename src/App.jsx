import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import AttendanceSection from "./components/AttendanceSection";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <AttendanceSection />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
