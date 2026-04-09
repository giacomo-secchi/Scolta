import { usePage } from '@inertiajs/react';

export function useTrans() {
    const { language = {} } = usePage().props;

    const t = (key: string, replace: Record<string, string> = {}) => {
        let translation = language[key] || key;

        Object.keys(replace).forEach((rKey) => {
            translation = translation.toString().replace(`:${rKey}`, replace[rKey]);
        });

        return translation;
    };

    return { t };
}