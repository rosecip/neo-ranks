const Model = require("./Model.js")

class Album extends Model {
  static get tableName() {
    return "albums"
  }

  static get jsonScheema() {
    return {
      type: "object",
      required: ["title", "releaseDate"],
      properties: {
        title: { type: "string" },
        type: { type: "string" },
        releaseDate: { type: "date" }
      },
    }
  }

  static get relationMappings() {
    const { Song, Unit } = require("./index.js")
    return {
      songs: {
        relation: Model.HasManyRelation,
        modelClass: Song,
        join: {
          from: "albums.id",
          to: "songs.albumId"
        },
      },
      units: {
        relation: Model.BelongsToOneRelation,
        modelClass: Unit,
        join: {
          from: "albums.unitId",
          to: "units.id"
        }
      }
    }
  }
}

module.exports = Album