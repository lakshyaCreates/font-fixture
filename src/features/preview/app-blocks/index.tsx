import { ColumnOne } from "./column-one";
import { ColumnThree } from "./column-three";
import { ColumnTwo } from "./column-two";

export const AppBlocks = () => {
    return (
        <div className="grid w-full gap-4 *:w-full *:min-w-fit *:space-y-4 md:grid-cols-2 xl:grid-cols-3">
            <ColumnOne />
            <ColumnTwo />
            <ColumnThree />
        </div>
    );
};
