const Model = require("./Model.js")

class Song extends Model {
  static get tableName() {
    return "songs"
  }

  static get jsonScheema() {
    return {
      type: "object",
      required: ["title", "isSolo"],
      properties: {
        title: { type: "string" },
        isSolo: { type: "boolean" },
      },
    }
  }

  static get relationMappings() {
    const { Member, Album, SongMember } = require("./index.js")

    return {
       Member: {
        relation: Model.ManyToManyRelation,
        modelClass: Member,
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
          from: "songs.id",
          to: "unitMembers.songId"
        }
      },
      album: {
        relation: Model.HasOneRelation,
        modelClass: Album,
        join: {
          from: "albums.id",
          to: "songs.albumId"
        }
      }
    }
  }
}

module.exports = Song