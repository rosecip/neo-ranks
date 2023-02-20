import { UnitMember } from "../../models/index.js";

class UnitMemberSeeder {
  static async seed() {
    const unitMemberData = [
      {
        unitId: 1,
        memberId: 1
      },
      {
        unitId: 1,
        memberId: 2
      },
      {
        unitId: 1,
        memberId: 3
      },
      {
        unitId: 1,
        memberId: 4
      },
      {
        unitId: 1,
        memberId: 5
      },
      {
        unitId: 1,
        memberId: 6
      },
      {
        unitId: 1,
        memberId: 7
      },
      {
        unitId: 1,
        memberId: 8
      },
      {
        unitId: 1,
        memberId: 9
      },
      {
        unitId: 1,
        memberId: 10
      },
      {
        unitId: 1,
        memberId: 11
      },
      {
        unitId: 1,
        memberId: 12
      },
      {
        unitId: 1,
        memberId: 13
      },
      {
        unitId: 1,
        memberId: 14
      },
      {
        unitId: 1,
        memberId: 15
      },
      {
        unitId: 1,
        memberId: 16
      },
      {
        unitId: 1,
        memberId: 17
      },
      {
        unitId: 1,
        memberId: 18
      },
      {
        unitId: 1,
        memberId: 19
      },
      {
        unitId: 1,
        memberId: 20
      },
      {
        unitId: 1,
        memberId: 21
      },
      {
        unitId: 1,
        memberId: 22
      },
      {
        unitId: 1,
        memberId: 23
      },
      {
        unitId: 2,
        memberId: 1
      },
      {
        unitId: 2,
        memberId: 2
      },
      {
        unitId: 2,
        memberId: 3
      },
      {
        unitId: 2,
        memberId: 4
      },
      {
        unitId: 2,
        memberId: 6
      },
      {
        unitId: 2,
        memberId: 8
      },
      {
        unitId: 2,
        memberId: 9
      },
      {
        unitId: 2,
        memberId: 10
      },
      {
        unitId: 2,
        memberId: 12
      },
      {
        unitId: 2,
        memberId: 17
      },
      {
        unitId: 3,
        memberId: 12
      },
      {
        unitId: 3,
        memberId: 15
      },
      {
        unitId: 3,
        memberId: 16
      },
      {
        unitId: 3,
        memberId: 17
      },
      {
        unitId: 3,
        memberId: 18
      },
      {
        unitId: 3,
        memberId: 22
      },
      {
        unitId: 3,
        memberId: 23
      },
      {
        unitId: 4,
        memberId: 5
      },
      {
        unitId: 4,
        memberId: 7
      },
      {
        unitId: 4,
        memberId: 9
      },
      {
        unitId: 4,
        memberId: 11
      },
      {
        unitId: 4,
        memberId: 13
      },
      {
        unitId: 4,
        memberId: 14
      },
      {
        unitId: 4,
        memberId: 19
      },
    ]
    for (const singleUnitMemberData of unitMemberData) {
      const currentUnitMember = await UnitMember.query().findOne(singleUnitMemberData)
      if (!currentUnitMember) {
        await UnitMember.query().insert(singleUnitMemberData)
      }
    }
  }
}

export default UnitMemberSeeder
