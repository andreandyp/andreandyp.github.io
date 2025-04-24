export async function resolveIcon(iconName: string): Promise<unknown> {
    const value = (await import('@mdi/js'))[iconName];

    return value;
}