import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import Head from "next/head";
import {Container, Flex, MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {NavbarNested} from "../components/Navigation/Navigation";

export default function App({Component, pageProps}: any) {
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

            <Flex>
                <NavbarNested/>
                <Container my={'xl'}>
                    <Component {...pageProps} />
                </Container>
            </Flex>
        </MantineProvider>
    );
}
