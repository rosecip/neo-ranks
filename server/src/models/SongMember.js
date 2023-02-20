const { Model } = require("objection")

class SongMember extends Model {
  static get tableName() {
    return "unitMembers"
  }
  
  static get relationMappings() {
    const { Song, Member } = require("./index.js")

    return {
      song: {
        relation: Model.BelongsToOneRelation,
        modelClass: Song,
        join: {
          from: "songMembers.songId",
          to: "songs.id"
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

module.exports = SongMember