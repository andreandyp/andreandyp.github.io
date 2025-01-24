export async function resolveIcon(iconName: string): Promise<string> {
    const value = (await import('@mdi/js'))[iconName];

    // @ts-expect-error
    return value;
}