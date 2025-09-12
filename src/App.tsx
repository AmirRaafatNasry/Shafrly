import { AppShell } from "@mantine/core";
import "@mantine/core/styles.css";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <AppShell header={{ height: { base: 60, sm: 70 } }}>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>
        <Main />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}