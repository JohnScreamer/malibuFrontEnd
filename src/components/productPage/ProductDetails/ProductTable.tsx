import { FC } from "react";
import { DescribeType } from "../../../types/pages/homePage.type.js";

type ProductTableType = {
    productInfo: DescribeType;
};

const ProductTable: FC<ProductTableType> = ({ productInfo }) => {
    const keys = productInfo ? Object.keys(productInfo) : null;

    if (!keys || !productInfo) return null;
    return (
        <table>
            <tbody>
                {keys.map((el, i) => {
                    if (typeof productInfo[el] !== "string") return null;
                    return (
                        <tr
                            key={i}
                            className={`${i % 2 ? "" : "bg-myGrey-light"}`}
                        >
                            <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                                {el}
                            </td>
                            <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                                {productInfo[el]}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ProductTable;
