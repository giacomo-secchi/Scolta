import type { User } from './auth';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    name: string;
    sidebarOpen: boolean;
    locale: string;
    language: Record<string, string>;
    auth: {
        user: User | null;
    };
};
