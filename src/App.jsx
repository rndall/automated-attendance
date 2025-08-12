import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Box, Group } from "@mantine/core";

import QRScanner from "./components/QRScanner";
import Details from "./components/Details";

function App() {
  return (
    <MantineProvider>
      <Group grow>
        <Box>
          <QRScanner />
        </Box>

        <Box>
          <Details />
        </Box>
      </Group>
    </MantineProvider>
  );
}

export default App;
