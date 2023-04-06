export default function getHealthStatus(unit) {
  if (unit.health > 50) {
    return 'healthy';
  } if (unit.health > 15 && unit.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
