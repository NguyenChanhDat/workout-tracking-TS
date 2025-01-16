import { returnSeedData } from '../../../../infra/locator/returnSeedData';
import { ISeedData } from './ISeedData';

(async function execute() {
  const seedData: ISeedData = returnSeedData();
  await seedData.createTable();
  await seedData.insertData();
})();
