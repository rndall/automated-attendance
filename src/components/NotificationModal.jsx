import { Modal, Text } from "@mantine/core";

function NotificationModal({ opened, close, message, isError }) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size="lg"
      >
        <Text
          p="lg"
          c={!isError ? "green" : "red"}
          ta="center"
          fw={700}
          fz="2rem"
        >
          {message}
        </Text>
      </Modal>
    </>
  );
}

export default NotificationModal;
