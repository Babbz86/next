declare function _default({
    device,
    display,
    gap,
    direction,
    dense,
    rowSpan,
    colSpan,
    row,
    col,
    rows,
    columns,
    justify,
    align,
    alignSelf,
    wrap,
    flex,
    padding,
    margin,
}: {
    device: any;
    display: any;
    gap: any;
    direction: any;
    dense: any;
    rowSpan: any;
    colSpan: any;
    row: any;
    col: any;
    rows: any;
    columns: any;
    justify: any;
    align: any;
    alignSelf: any;
    wrap: any;
    flex: any;
    padding: any;
    margin: any;
}): Object;
export default _default;
export function getMargin(
    size: any,
    {
        isNegative,
        half,
    }?: {
        isNegative: boolean;
        half: boolean;
    }
): {};
export function getChildMargin(spacing: any): {};
export function getSpacingMargin(spacing: any): {};
export function getSpacingHelperMargin(spacing: any): {};
export function filterInnerStyle(style: any): Object;
export function filterOuterStyle(style: any): Object;
export function filterHelperStyle(style: any): Object;
export function getGridChildProps(props: any, device: any, gap: any): Object;
