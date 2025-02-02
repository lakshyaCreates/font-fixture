"use client";

import { ShareDocument } from "./components/share-document";
import { TeamMembers } from "./components/team-members";

export const ColumnTwo = () => {
    return (
        <div>
            <TeamMembers />
            <ShareDocument />
        </div>
    );
};
