export async function resolveIcon(iconName: string): Promise<string> {
    const iconCamelCase = iconName.toLowerCase().replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
    const value = (await import('@mdi/js'))[iconCamelCase];

    // @ts-expect-error
    return value;
}