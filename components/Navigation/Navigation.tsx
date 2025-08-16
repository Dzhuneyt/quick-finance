import {Box, ScrollArea} from '@mantine/core';
import {
    IconAdjustments,
    IconCalendarStats,
    IconFileAnalytics,
    IconLock,
    IconNotes,
    IconPresentationAnalytics,
    IconCalculator,
    IconTrendingUp,
    IconCreditCard,
    IconBuildingBank,
    IconShield,
    IconChartPie,
} from '@tabler/icons-react';
import classes from './Navigation.module.css';
import {LinksGroup} from "../LinksGroup/LinksGroup";

const mockdata = [
    {
        label: 'Investment Calculators',
        icon: IconTrendingUp,
        initiallyOpened: true,
        links: [
            {label: 'Average Yearly Return', link: '/total-return-to-yearly-return'},
            {label: 'Compound Interest Calculator', link: '/compound-interest'},
            {label: 'Investment Portfolio Analyzer', link: '/portfolio-analyzer'},
            {label: 'Dollar Cost Averaging', link: '/dollar-cost-averaging'},
            {label: 'Retirement Savings Calculator', link: '/retirement-savings'},
            {label: 'Investment Return Calculator', link: '/investment-return'},
        ],
    },
    {
        label: 'Loan & Debt Calculators',
        icon: IconCreditCard,
        initiallyOpened: false,
        links: [
            {label: 'Mortgage Calculator', link: '/mortgage-calculator'},
            {label: 'Loan Amortization', link: '/loan-amortization'},
            {label: 'Debt Payoff Calculator', link: '/debt-payoff'},
            {label: 'Credit Card Payoff', link: '/credit-card-payoff'},
        ],
    },
    {
        label: 'Business & Planning',
        icon: IconBuildingBank,
        initiallyOpened: false,
        links: [
            {label: 'Break-Even Analysis', link: '/break-even'},
            {label: 'Net Present Value (NPV)', link: '/npv-calculator'},
            {label: 'Internal Rate of Return (IRR)', link: '/irr-calculator'},
            {label: 'Cash Flow Calculator', link: '/cash-flow'},
        ],
    },
    {
        label: 'Tax & Inflation',
        icon: IconCalculator,
        initiallyOpened: false,
        links: [
            {label: 'Tax Equivalent Yield', link: '/tax-equivalent-yield'},
            {label: 'Inflation Calculator', link: '/inflation-calculator'},
            {label: 'Real Return Calculator', link: '/real-return'},
        ],
    },
    {
        label: 'Risk & Insurance',
        icon: IconShield,
        initiallyOpened: false,
        links: [
            {label: 'Risk Tolerance Calculator', link: '/risk-tolerance'},
            {label: 'Life Insurance Needs', link: '/life-insurance-needs'},
            {label: 'Emergency Fund Calculator', link: '/emergency-fund'},
        ],
    },
];

export function NavbarNested() {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label}/>);

    return (
        <Box component={'nav'} className={classes.navbar}>
            <ScrollArea className={classes.links}>
                <div>{links}</div>
            </ScrollArea>
        </Box>
    );
}
