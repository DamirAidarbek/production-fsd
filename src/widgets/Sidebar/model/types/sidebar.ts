import React from 'react';

export interface SidebarItems {
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    text: string;
    authOnly?: boolean;
}
