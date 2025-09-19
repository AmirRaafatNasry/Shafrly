import { Button, Container, Group, Image, Text } from "@mantine/core";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between" align="center" gap="md">
        <Group gap="xs" justify="center">
          <Image src="/images/logo.svg" alt="شعار شفرلي" w="35" />
          <Text>أمير رأفت - مارتينا ميلاد</Text>
        </Group>

        <Group gap="xs" justify="center">
          <Button
            component="a"
            href="https://yousinix.github.io/ScoutsEncoder"
            rel="noopener noreferrer"
            target="_blank"
          >
            الإصدار القديم
          </Button>

          <Button
            component="a"
            href=""
            rel="noopener noreferrer"
            target="_blank"
          >
            الإصدار الجديد
          </Button>

          <Button
            component="a"
            href="https://forms.gle/PwRYuHm21KxxgAC19"
            target="_blank"
            rel="noopener noreferrer"
          >
            تواصل معنا
          </Button>
        </Group>
      </Group>
    </Container>
  );
};
