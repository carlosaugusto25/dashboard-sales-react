/**
 * Converts JWT exp in days
 * @param exp - Number to be converted
 * @returns Converted exp in days
 */

export function jwtExpirationDateConverter(exp: number): number {
  const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
  const secondsUntilExpiration = exp - currentTime;
  const secondsInADay = 60 * 60 * 24; // 1 day in seconds
  const daysUntilExpiration = secondsUntilExpiration / secondsInADay;
  return daysUntilExpiration;
}
