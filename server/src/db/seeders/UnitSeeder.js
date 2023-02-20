import { Unit } from "../../models/index.js"

class UnitSeeder {
  static async seed() {
    const unitData = [
      {
        name: "NCT U",
        debutDate: '2016-04-09',
      },
      {
        name: "NCT 127",
        debutDate: '2016-07-07', 
      },
      {
        name: "NCT Dream",
        debutDate: '2016-08-25',
      },
      {
        name: "WayV",
        debutDate: '2019-01-17',
      },
    ]
    for (const singleUnitData of unitData) {
      const currentUnit = await Unit.query().findOne(singleUnitData)
      if (!currentUnit) {
        await Unit.query().insert(singleUnitData)
      }
    }
  }
}

export default UnitSeeder