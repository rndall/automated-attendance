import "@mantine/core/styles.css";

import { useDisclosure } from "@mantine/hooks";
import { MantineProvider } from "@mantine/core";
import { Box, Flex, Stack } from "@mantine/core";

import QRScanner from "./components/QRScanner";
import Details from "./components/Details";
import SuccessModal from "./components/SuccessModal";

import { useState } from "react";

function App() {
  const defaultStyles = {
    padding: 10,
    borderRadius: 10,
    border: "1px solid #BBB",
  };

  const [scannedStudentId, setScannedStudentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handleScan = (result) => {
    setScannedStudentId(result);

    // Fetch student details

    console.log(result);
  };

  const handleCancelAttendance = () => setScannedStudentId(null);

  const handleSaveAttendance = async () => {
    setLoading(true);

    // Mock attendance saving api
    setTimeout(() => {
      open();
      setScannedStudentId(null);
      setLoading(false);
    }, 500);
  };

  return (
    <MantineProvider>
      <Stack bg="#e4e4e4" mih="100dvh" justify="center">
        <Flex
          p={defaultStyles.padding}
          gap={20}
          direction={{ base: "column", md: "row" }}
        >
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
            <Details
              onSaveAttendance={handleSaveAttendance}
              onCancelAttendance={handleCancelAttendance}
              hasScanned={!!scannedStudentId}
              loading={loading}
            />
          </Box>
        </Flex>
      </Stack>

      <SuccessModal opened={opened} close={close} />
    </MantineProvider>
  );
}

export default App;
