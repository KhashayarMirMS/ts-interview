declare type GeneratorFunction<T> = () => T;
declare type DependencyArray = Array<any>;

const cache = new Map();

function getCacheKey(dependencies: DependencyArray) {
    return dependencies.map(obj => obj.toString());
}

export function useMemo<T>(gen: GeneratorFunction<T>, dependencies: DependencyArray): T {
    const key = getCacheKey(dependencies);

    if (!cache.has(key)) {
        cache.set(key, gen());
    }
    return cache.get(key);
}