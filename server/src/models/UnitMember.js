const { Model } = require("objection")

class UnitMember extends Model {
  static get tableName() {
    return "unitMembers"
  }
  
  static get relationMappings() {
    const { Unit, Member } = require("./index.js")

    return {
      unit: {
        relation: Model.BelongsToOneRelation,
        modelClass: Unit,
        join: {
          from: "unitMembers.unitId",
          to: "units.id"
        }
      },
      member: {
        relation: Model.BelongsToOneRelation,
        modelClass: Member,
        join: {
          from: "unitMembers.memberId",
          to: "members.id"
        }
      },
    }
  }
}

module.exports = UnitMember