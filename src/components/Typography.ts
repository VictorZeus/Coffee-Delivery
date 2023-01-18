import styled, { ThemeConsumer } from "styled-components";

export const TitleText = styled.h1`
    color: ${({ theme, colors }) => theme.colors[`base-${colors ?? "title"}`]};

`;