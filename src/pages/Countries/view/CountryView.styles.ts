import styled from 'styled-components';

export const CountryCountainer = styled.div`
    margin-top: 2rem;
`;

export const FlagContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const GoBackLink = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    span {
        text-transform: none;
    }

    &:active,
    &:hover,
    &:focus {
        span {
            border: none;
            outline: none;
            color: #187ef0;
        }
        border: none;
        outline: none;
    }
`;
