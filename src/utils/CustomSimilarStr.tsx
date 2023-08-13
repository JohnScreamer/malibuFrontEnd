export const CustomSimilarStr = (searchStr: string, findElemStr: string) => {
    return findElemStr.split(" ").map((str, i) => {
        if (str.startsWith(searchStr)) {
            return (
                <span key={i}>
                    <span className="font-bold">{searchStr}</span>
                    <span>{str.replace(searchStr, "")}</span>
                </span>
            );
        }
        return <span key={i}>{str}</span>;
    });
};
