import {useState} from 'react';
import {Box, Collapse, Group, rem, Text, ThemeIcon, UnstyledButton} from '@mantine/core';
import {IconChevronRight} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './LinksGroup.module.css';

interface LinksGroupProps {
    icon: React.FC<any>;
    label: string;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
}

export const LinksGroup = ({icon: Icon, label, initiallyOpened, links}: LinksGroupProps) => {
    const hasLinks = Array.isArray(links);
    const [opened, setOpened] = useState(initiallyOpened || false);
    const items = (hasLinks ? links : []).map((link) => (
        <Link key={link.label} href={link.link} style={{ textDecoration: 'none' }}>
            <Text className={classes.link}>
                {link.label}
            </Text>
        </Link>
    ));

    return (
        <>
            <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
                <Group justify="space-between" gap={0}>
                    <Box style={{display: 'flex', alignItems: 'center'}}>
                        <ThemeIcon variant="light" size={30}>
                            <Icon style={{width: rem(18), height: rem(18)}}/>
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                    {hasLinks && (
                        <IconChevronRight
                            className={classes.chevron}
                            stroke={1.5}
                            style={{
                                width: rem(16),
                                height: rem(16),
                                transform: opened ? 'rotate(-90deg)' : 'none',
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    );
};
