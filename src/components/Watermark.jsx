import { Group, Image, Text } from "@mantine/core";

import ICTDULogo from "../assets/ICTDU Official Logo.png";

function Watermark() {
  return (
    <Group
      style={{
        position: "absolute",
        left: "30px",
        bottom: "27.5px",
      }}
      justify="flex-end"
    >
      <Image
        fit="cover"
        w={{ base: 30, xs: 40, sm: 50, md: 60 }}
        src={ICTDULogo}
      />
      <Text
        style={{
          textShadow:
            " 1px 1px 0 rgba(255, 255, 255, 0.5), -1px -1px 0 rgba(255, 255, 255, 0.5), 1px -1px 0 rgba(255, 255, 255, 0.5), -1px 1px 0 rgba(255, 255, 255, 0.5)",
        }}
        fw={700}
        fz={{ base: "0.875rem", xs: "0.9rem", sm: "1rem" }}
      >
        Powered by ICTDU
      </Text>
    </Group>
  );
}

export default Watermark;
