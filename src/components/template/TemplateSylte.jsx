import styled from "styled-components";
import { WIDTH } from "../../utils/constants";

const TemplateSylte = styled.main`
  width: Calc(100% - ${WIDTH.marginWidth} * 2);
  max-width: ${WIDTH.maxWidth};
  margin: ${WIDTH.marginWidth} auto;
  display: flex;
  align-items: center;
`;

export { TemplateSylte };
