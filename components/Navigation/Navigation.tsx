import {Box, ScrollArea} from '@mantine/core';
import {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconLock,
    IconNotes,
    IconPresentationAnalytics,
} from '@tabler/icons-react';
import classes from './Navigation.module.css';
import {LinksGroup} from "../LinksGroup/LinksGroup";

const mockdata = [
    {
        label: 'Financial Calculators',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            {label: 'Average Yearly Return', link: '/total-return-to-yearly-return'},
        ],
    },
    // {
    //     label: 'Releases',
    //     icon: IconCalendarStats,
    //     links: [
    //         {label: 'Upcoming releases', link: '/'},
    //         {label: 'Previous releases', link: '/'},
    //         {label: 'Releases schedule', link: '/'},
    //     ],
    // },
    // {
    //     label: 'Security',
    //     icon: IconLock,
    //     links: [
    //         {label: 'Enable 2FA', link: '/'},
    //         {label: 'Change password', link: '/'},
    //         {label: 'Recovery codes', link: '/'},
    //     ],
    // },
];

export function NavbarNested() {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label}/>);

    return (
        <Box component={'nav'} className={classes.navbar} p={'md'} w={'300px'} h={'100vh'}>
            <ScrollArea className={classes.links}>
                <div>{links}</div>
            </ScrollArea>
        </Box>
    );
}
