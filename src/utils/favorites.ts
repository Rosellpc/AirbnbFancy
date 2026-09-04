const FAVORITES_KEY = "airbnb_host_favorites";

export function getFavoriteIds(): number[] {
  const stored = localStorage.getItem(FAVORITES_KEY);

  try {
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isFavorite(propertyId: number): boolean {
  return getFavoriteIds().includes(propertyId);
}

export function toggleFavorite(propertyId: number): boolean {
  const favoriteIds = getFavoriteIds();
  const alreadyFavorite = favoriteIds.includes(propertyId);

  const updatedIds = alreadyFavorite
    ? favoriteIds.filter((id) => id !== propertyId)
    : [...favoriteIds, propertyId];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedIds));

  return !alreadyFavorite;
}