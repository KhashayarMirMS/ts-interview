/*
 * Assume we want to wrap an icon library that exports
 * a bunch of react components, each of them rendering a
 * separate icon. A mock library representing that exists in
 * `icons.ts`.
 * 
 * We want to export a single component that takes an `iconName` as a prop
 * and renders the corresponding icon as a result. `iconName` should have type
 * hints for good DX and must be in kebab-case. You can see the implementation
 * of WrappedIcon as an example of this.
 * 
 * Please complete the helpers below to make `WrappedIcon` work correctly.
*/

declare type PascalCaseToKebabCase<S extends string> = never; // TODO

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.substring(1);
}

function kebabCaseToPascalCase(s: string): string {
    // TODO
    return '';
}

// ..... Wrapped Component .....
import { useMemo } from './react';
import icons from './icons';

declare type IconName = PascalCaseToKebabCase<keyof typeof icons & string>;

interface WrappedIconProps {
    iconName: IconName
}

export default function WrappedIcon({ iconName }: WrappedIconProps) {
    const pascalCaseIconName = useMemo(
        () => kebabCaseToPascalCase(iconName), 
        [iconName]
    );

    // @ts-ignore
    return icons[pascalCaseIconName];
}