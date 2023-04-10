import getHealthStatus from '../js/main';

// test('basic test', () => {
//   let res;
//   const unit1 = { name: 'Маг', health: 90 };
//   const unit2 = { name: 'Эльф', health: 32 };
//   const unit3 = { name: 'Гном', health: 10 };

//   res = getHealthStatus(unit1);
//   expect(res).toBe('healthy');

//   res = getHealthStatus(unit2);
//   expect(res).toBe('wounded');

//   res = getHealthStatus(unit3);
//   expect(res).toBe('critical');
// });

test.each([
  ['Маг', 90, 'healthy'],
  ['Эльф', 32, 'wounded'],
  ['Гном', 10, 'critical'],
])('test getHealthStatus with {name: %s, health: %i}', (_, health, status) => {
  const res = getHealthStatus({ health });
  expect(res).toBe(status);
});
