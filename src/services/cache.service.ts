const basketKey = 'basket';

const get = <T>(key: string): T | undefined => {
  const data = sessionStorage.getItem(key);

  if (!data) {
    return undefined;
  }

  return JSON.parse(data) as T;
};

const set = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const CacheService = { get, set, basketKey };
