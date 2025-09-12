import {
  ActionIcon,
  Container,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { Download, Moon, Sun } from "lucide-react";
import React from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";

export const Navbar: React.FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const { isInstallable, promptInstall } = usePWAInstall();

  return (
    <Container size="lg" h="100%">
      <Group justify="space-between" align="center" h="100%">
        <Text fw={700} size="xl">
          شفرلي
        </Text>

        <Group>
          {isInstallable && (
            <ActionIcon onClick={promptInstall} title="تحميل التطبيق">
              <Download />
            </ActionIcon>
          )}

          <ActionIcon
            onClick={() => setColorScheme(isDark ? "light" : "dark")}
            title={isDark ? "فاتح" : "داكن"}
          >
            {isDark ? <Sun /> : <Moon />}
          </ActionIcon>
        </Group>
      </Group>
    </Container>
  );
};