const Model = require("./Model.js")

class Member extends Model {
  static get tableName() {
    return "members"
  }

  static get jsonScheema() {
    return {
      type: "object",
      required: ["name", "birthName", "birthday"],
      properties: {
        name: { type: "string" },
        birthName: { type: "string" },
        birthday: { type: "date" }
      },
    }
  }

  static get relationMappings() {
    const { Unit, Song, SongMember, UnitMember } = require("./index.js")

    return {
      songs: {
        relation: Model.ManyToManyRelation,
        modelClass: Song,
        join: {
          from: "members.id",
          through: {
            from: "songMembers.memberId",
            to: "songMembers.songId"
          },
          to: "songs.id"
        }
      },
      songMembers: {
        relation: Model.HasManyRelation,
        modelClass: SongMember,
        join: {
          from: "members.id",
          to: "songMembers.memberId"
        }
      },
      units: {
        relation: Model.ManyToManyRelation,
        modelClass: Unit,
        join: {
          from: "members.id",
          through: {
            from: "unitMembers.memberId",
            to: "unitMembers.unitId"
          },
          to: "units.id"
        }
      },
      unitMembers: {
        relation: Model.HasManyRelation,
        modelClass: UnitMember,
        join: {
          from: "members.id",
          to: "unitMembers.memberId"
        }
      },
    }
  }
}

module.exports = Member