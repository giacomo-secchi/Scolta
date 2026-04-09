import AppLogoIcon from '@/components/app-logo-icon';
import { usePage } from '@inertiajs/react';


export default function AppLogo() {
    const { name } = usePage().props;
    
    return (
        <>
            <div className="flex items-center gap-2.5">
                <AppLogoIcon className="size-15 fill-current text-white dark:text-black" />
                <div className="ml-1 grid flex-1 text-left text-2xl uppercase">
                    <span className="mb-0.5 truncate leading-tight font-semibold text-primary" >
                        {name}
                    </span>
                    <span className="text-xs text-tertiary">
                        AI Service Desk
                    </span>
                </div>
            </div>
        </>
    );
}
