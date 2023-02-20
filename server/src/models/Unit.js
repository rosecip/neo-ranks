const Model = require("./Model.js")

class Unit extends Model {
  static get tableName() {
    return "units"
  }

  static get jsonScheema() {
    return {
      type: "object",
      required: ["name", "debutDate"],
      properties: {
        name: { type: "string" },
        debutDate: { type: "date" }
      },
    }
  }

  static get relationMappings() {
    const { Member, UnitMember, Album } = require("./index.js")

    return {
      member: {
        relation: Model.ManyToManyRelation,
        modelClass: Member,
        join: {
          from: "units.id",
          through: {
            from: "unitMembers.unitId",
            to: "unitMembers. memberId"
          },
          to: "members.id"
        }
      },
      unitMembers: {
        relation: Model.HasManyRelation,
        modelClass: UnitMember,
        join: {
          from: "units.id",
          to: "unitMembers.unitId"
        }
      },
      album: {
        relation: Model.HasManyRelation,
        modelClass: Album,
        join: {
          from: "units.id",
          to: "album.unitId"
        }
      }
    }
  }
}

module.exports = Unit