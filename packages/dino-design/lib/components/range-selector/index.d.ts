import React from "react";
import { Moment } from "moment";
export declare type BtnKind = "THIS_MONTH" | "LAST_MONTH" | "" | "LAST_SEVEN_DAYS" | "YESTODAY" | "LAST_SEVEN_DAYS_WITHOUT_TODAY";
interface Props {
    value: [Moment, Moment] | BtnKind;
    btnArr: BtnKind[];
    onRangeChange: (p: [Moment, Moment]) => void;
    [propsName: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Props & {
    ref?: React.MutableRefObject<{
        setDate: () => void;
    }> | undefined;
}>;
export default _default;
