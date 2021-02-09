import React, { ReactElement } from 'react';

import { FormControl, InputLabel, Select } from '@material-ui/core';
import { Field } from 'react-final-form';
import MenuItem from '@material-ui/core/MenuItem';

type SelectProps = {
    name: string;
    label: string;
    options: Array<{ title: string }>;
    fullWidth?: boolean;
    disabled?: boolean;
    multiple?: boolean;
};

const SelectField = (props: SelectProps): ReactElement => {
    const [valueField, setValueField] = React.useState<string[]>([]);

    const {
        name,
        label,
        options,
        fullWidth = true,
        disabled = false,
        ...rest
    } = props;

    const getOptions = options.map(
        (option: { title: string }, index: number) => (
            <MenuItem key={`${index}-${option.title}`} value={option.title}>
                {option.title}
            </MenuItem>
        ),
    );

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValueField(event.target.value as string[]);
    };

    return (
        <Field name={name}>
            {({ meta, input }) => {
                return (
                    <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth={fullWidth}
                    >
                        <InputLabel>{label}</InputLabel>
                        <Select
                            {...input}
                            {...rest}
                            variant="outlined"
                            error={meta.error && meta.touched}
                            label={label}
                            native={false}
                            displayEmpty={true}
                            disabled={disabled}
                            value={input.value || valueField}
                            onChange={(value) => {
                                handleChange(value);
                                input.onChange(value);
                            }}
                        >
                            {getOptions}
                        </Select>
                    </FormControl>
                );
            }}
        </Field>
    );
};

export default SelectField;
