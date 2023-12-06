import styled from "styled-components";

export const Lists = styled.ul(() => {
    return {
        paddingLeft: '60px',
        li: {
            padding: '2px 6px 2px 0',
            button: {
                width: '62px',
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '4px',
                marginLeft: '12px'
            }
        }
    };
});