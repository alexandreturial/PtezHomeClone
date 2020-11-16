import styled from 'styled-components';


export const InputContainer = styled.input`

    width: 100%;

    padding: 11px 12px;
    border-radius: 5px;

    font: 700 16px Roboto;

    color: ${props => props.theme.colors.blue};

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${props => props.theme.colors.gray};
        font: 400 16px Roboto;
        font-style: italic;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${props => props.theme.colors.gray};
        font: 400 16px Roboto;
        font-style: italic;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${props => props.theme.colors.gray};
        font: 400 16px Roboto;
        font-style: italic;
    }
`;