import Styled from "styled-components/macro";
import { flexbox, FlexboxProps, layout, LayoutProps } from "styled-system";
import { StyledBox } from "../styled-box/styled-box";

/** CSS ultilities wrapper that also displays children in flex-column layout */
export const FelxColumn = Styled(StyledBox)<FlexboxProps& LayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${flexbox}
  ${layout}
`