type DebounceFunction<T extends (...args: any[]) => any> = (
    ...args: Parameters<T>
) => void;

export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): DebounceFunction<T> {
    let timerId: NodeJS.Timeout;
    let context: any;

    return function debouncedFunction(this: any, ...args: Parameters<T>) {
        clearTimeout(timerId);
        context = this;

        timerId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}
