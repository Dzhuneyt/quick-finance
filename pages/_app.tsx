import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import Head from "next/head";
import {AppShell, Burger, Group, MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {NavbarNested} from "../components/Navigation/Navigation";
import {useDisclosure} from '@mantine/hooks';

export default function App({Component, pageProps}: any) {
    const [opened, {toggle}] = useDisclosure();

    return (
        <MantineProvider theme={theme}>
            <Head>
                <title>Quick Calculators</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
                <link rel="shortcut icon" href="/favicon.svg"/>
            </Head>

            <AppShell
                header={{height: 60}}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: {mobile: !opened}
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <div>Quick Calculators</div>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    <NavbarNested />
                </AppShell.Navbar>

                <AppShell.Main>
                    <Component {...pageProps} />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
