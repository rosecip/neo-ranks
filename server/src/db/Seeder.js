/* eslint-disable no-console */
import { connection } from "../boot.js"
import AlbumSeeder from "./seeders/AlbumSeeder.js"
import MemberSeeder from "./seeders/MemberSeeder.js"
import SongSeeder from "./seeders/SongSeeder.js"
import UnitSeeder from "./seeders/UnitSeeder.js"
import UnitMemberSeeder from "./seeders/UnitMemberSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding units...")
    await UnitSeeder.seed()
    console.log("seeding albums...")
    await AlbumSeeder.seed()
    console.log("seeding members...")
    await MemberSeeder.seed()
    console.log("seeding songs...")
    await SongSeeder.seed()
    console.log("seeding unit members...")
    await UnitMemberSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder