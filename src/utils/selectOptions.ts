export const getSelectOptions = (
    attribute: string,
    data?: Array<any>,
): Array<{ title: string }> => {
    if (!data) return [];

    return data.map((datum) => ({ title: datum[attribute] }));
};
