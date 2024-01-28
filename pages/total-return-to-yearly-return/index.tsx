import {useForm} from "@mantine/form";
import {Box, Container, Table, TextInput} from "@mantine/core";
import {DateInput} from "@mantine/dates";
import React, {useEffect, useState} from "react";

function forHumans(seconds: number) {
    const levels = [
        [Math.floor(seconds / 31536000), 'years'],
        [Math.floor((seconds % 31536000) / 86400), 'days'],
    ];
    let aggregator = '';

    for (let i = 0, max = levels.length; i < max; i++) {
        if (levels[i][0] === 0) continue;
        const x = levels[i][0];
        const y = levels[i][1];
        aggregator += ' ' + x + ' ' + (x === 1 ? (y as string).substring(0, (y as string).length - 1) : y);
    }
    return aggregator.trim();
}

const ResultTable = (props: {
    start: number,
    end: number,
    valueAtPeriodStart: number,
    valueAtPeriodEnd: number,
}) => {
    const start = new Date(props.start * 1000);
    const end = new Date(props.end * 1000);
    const years = (end.getFullYear() - start.getFullYear()) + ((end.getMonth() - start.getMonth()) / 12);
    const totalPercentageReturn = (props.valueAtPeriodEnd - props.valueAtPeriodStart) / props.valueAtPeriodStart * 100;
    const averageYearlyPercentageReturn = (Math.pow(props.valueAtPeriodEnd / props.valueAtPeriodStart, 1 / years) - 1) * 100;

    const hasResult = isFinite(totalPercentageReturn) && isFinite(averageYearlyPercentageReturn);

    if (!hasResult) {
        return null;
    }

    const investmentTimeInSeconds = (end.getTime() - start.getTime()) / 1000;
    const totalReturn = props.valueAtPeriodEnd - props.valueAtPeriodStart;
    const totalReturnAsPercentage = totalReturn / props.valueAtPeriodStart * 100;

    return <Table highlightOnHover withTableBorder withColumnBorders>
        <Table.Tbody>
            <Table.Tr>
                <Table.Td>Total investment period</Table.Td>
                <Table.Td>{forHumans(investmentTimeInSeconds)}</Table.Td>
            </Table.Tr>
            <Table.Tr>
                <Table.Td>Total Return</Table.Td>
                <Table.Td>{totalReturn}</Table.Td>
            </Table.Tr>
            <Table.Tr>
                <Table.Td>Total Return (%)</Table.Td>
                <Table.Td>{totalReturnAsPercentage.toFixed(2)}%</Table.Td>
            </Table.Tr>
            <Table.Tr>
                <Table.Td>Average Yearly Return (%)</Table.Td>
                <Table.Td>{averageYearlyPercentageReturn.toFixed(2)}%</Table.Td>
            </Table.Tr>
        </Table.Tbody>
    </Table>
};

const TotalReturnToYearlyReturn = () => {
    const form = useForm<{
        valueAtPeriodStart: number;
        valueAtPeriodEnd: number;
        investmentStart: number;
        investmentEnd: number;
    }>({
        initialValues: {
            valueAtPeriodStart: 100,
            valueAtPeriodEnd: 110,
            investmentStart: Math.round(Date.now() / 1000) - 3600 * 24 * 365, // Unix timestamp minus 1 year
            investmentEnd: Math.round(Date.now() / 1000), // Unix timestamp
        },
    });

    return <div>
        <Box mx="auto">
            <form onSubmit={form.onSubmit((values) => {
                console.log(values)
            })}>

                <DateInput
                    value={new Date(form.values.investmentStart * 1000)}
                    onChange={value => {
                        if (!value) {
                            return
                        }
                        form.setFieldValue('investmentStart', Math.round(value.getTime() / 1000))
                    }}
                    label="Investment Start"
                />
                <DateInput
                    value={new Date(form.values.investmentEnd * 1000)}
                    onChange={value => {
                        if (!value) {
                            return
                        }
                        form.setFieldValue('investmentEnd', Math.round(value.getTime() / 1000))
                    }}
                    label="Investment End"
                />

                <TextInput
                    type="number"
                    withAsterisk
                    label="Value at the start of investment"
                    {...form.getInputProps('valueAtPeriodStart')}
                />
                <TextInput
                    type="number"
                    withAsterisk
                    label="Value at the end of investment"
                    {...form.getInputProps('valueAtPeriodEnd')}
                />
            </form>
        </Box>

        <Box mt={'lg'}>
            <ResultTable
                start={form.values.investmentStart}
                end={form.values.investmentEnd}
                valueAtPeriodStart={form.values.valueAtPeriodStart}
                valueAtPeriodEnd={form.values.valueAtPeriodEnd}/>
        </Box>
    </div>
}

export default TotalReturnToYearlyReturn;
