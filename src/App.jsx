import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Box, Flex } from "@mantine/core";

import QRScanner from "./components/QRScanner";
import Details from "./components/Details";

import { useState } from "react";

function App() {
  const defaultStyles = {
    padding: 10,
    borderRadius: 10,
    border: "1px solid #BBB",
  };

  const [scannedStudentId, setScannedStudentId] = useState(null);

  const handleScan = (result) => {
    setScannedStudentId(result);

    // Fetch student details

    console.log(result);
  };

  return (
    <MantineProvider>
      <Box bg="#e4e4e4">
        <Flex p={defaultStyles.padding} gap={20} h={"100dvh"}>
          <Box
            bg="white"
            flex={1}
            p={defaultStyles.padding}
            bdrs={defaultStyles.borderRadius}
            bd={defaultStyles.border}
            miw={0}
          >
            <QRScanner onScan={handleScan} />
          </Box>

          <Box
            bg="white"
            flex={1}
            p={defaultStyles.padding}
            bdrs={defaultStyles.borderRadius}
            bd={defaultStyles.border}
            miw={0}
          >
            <Details />
          </Box>
        </Flex>
      </Box>
    </MantineProvider>
  );
}

export default App;
