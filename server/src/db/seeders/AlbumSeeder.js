import { Album } from "../../models/index.js"

class AlbumSeeder {
  static async seed() {
    const albumData = [
      {
        title: "일곱 번째 감각 (The 7th Sense)",
        releaseDate: '2016-04-09',
        type: "Digital Single",
        unitId: 1
      },
      {
        title: "Without You",
        releaseDate: '2016-04-10',
        type: "Digital Single",
        unitId: 1
      },
      {
        title: "NCT #127",
        releaseDate: '2016-07-10',
        type: "Mini Album",
        unitId: 2
      },
      {
        title: "Chewing Gum",
        releaseDate: '2016-08-27',
        type: "Digital Single",
        unitId: 3
      },
      {
        title: "NCT #127 LIMITLESS",
        releaseDate: '2017-01-06',
        type: "Mini Album",
        unitId: 2
      },
      {
        title: "The First",
        releaseDate: '2017-02-09',
        type: "Single Album",
        unitId: 3
      },
      {
        title: "NCT #127 CHERRY BOMB",
        releaseDate: '2017-06-14',
        type: "Mini Album",
        unitId: 2
      },
      {
        title: "We Young",
        releaseDate: '2017-08-17',
        type: "Mini Album",
        unitId: 3
      },
      {
        title: "NCT 2018 Empathy",
        releaseDate: '2018-03-14',
        type: "Full Album",
        unitId: 1
      },
      {
        title: "Chain",
        releaseDate: '2018-05-23',
        type: "Mini Album",
        unitId: 2
      },
      {
        title: "Baby Don't Stop (Special Thai Version)",
        releaseDate: '2018-06-05',
        type: "Digital Single",
        unitId: 1
      },
      {
        title: "We Go Up",
        releaseDate: '2018-09-03',
        type: "Mini Album",
        unitId: 3
      },
      {
        title: "TOUCH (Japanese Version",
        releaseDate: '2018-09-16',
        type: "Digital Single",
        unitId: 2
      },
      {
        title: "NCT #127 Regular-Irregular",
        releaseDate: '2018-10-12',
        type: "Full Album",
        unitId: 2
      },
      {
        title: "NCT #127 Regulate",
        releaseDate: '2018-11-23',
        type: "Repackage Album",
        unitId: 2
      },
      {
        title: "The Vision",
        releaseDate: '2019-01-17',
        type: "Digital Single",
        unitId: 4
      },
      {
        title: "Awaken",
        releaseDate: '2019-04-17',
        type: "Full Album",
        unitId: 2
      },
      {
        title: "Take Off",
        releaseDate: '2019-05-09',
        type: "Mini Album",
        unitId: 4
      },
      {
        title: "NCT #127 WE ARE SUPERHUMAN",
        releaseDate: '2019-05-24',
        type: "Mini Album",
        unitId: 2
      },
      {
        title: "Fireflies",
        releaseDate: '2019-07-15',
        type: "Digital Single",
        unitId: 3
      },
      {
        title: "Highway To Heaven (English Version)",
        releaseDate: '2019-07-19',
        type: "Digital Single",
        unitId: 2
      },
      {
        title: "We Boom",
        releaseDate: '2019-07-26',
        type: "Mini Album",
        unitId: 3
      },
      {
        title: "Take Over The Moon",
        releaseDate: '2019-10-29',
        type: "Mini Album",
        unitId: 4
      },
      {
        title: "Love Talk (English Version)",
        releaseDate: '2019-11-05',
        type: "Digital Single",
        unitId: 4
      },
      {
        title: "NCT #127 NEO ZONE",
        releaseDate: '2020-03-06',
        type: "Full Album",
        unitId: 2 
      },
      {
        title: "Reload",
        releaseDate: '2020-04-29',
        type: "Mini Album",
        unitId: 3
      },
      {
        title: "NCT #127 Neo Zone: The Final Round",
        releaseDate: '2020-05-19',
        type: "Repackage Album",
        unitId: 2
      },
      {
        title: "Awaken The World",
        releaseDate: '2020-06-09',
        type: "Full Album",
        unitId: 4
      },
      {
        title: "Turn Back Time (Korean Version",
        releaseDate: '2020-06-18',
        type: "Digital Single",
        unitId: 4
      },
      {
        title: "Bad Alive (English Version)",
        releaseDate: '2020-06-18',
        type: "Digital Single",
        unitId: 4
      },
      {
        title: "NCT RESONANCE Pt. 1",
        releaseDate: '2020-10-12',
        type: "Full Album",
        unitId: 1
      },
      {
        title: "NCT RESONANCE Pt. 2",
        releaseDate: '2020-11-23',
        type: "Repackage Album",
        unitId: 1
      },
      {
        title: "NCT 2020 RESONANCE",
        releaseDate: '2020-12-04',
        type: "Digital Single",
        unitId: 1
      },
      {
        title: "LOVEHOLIC",
        releaseDate: '2021-02-17',
        type: "Mini Album",
        unitId: 2
      },
      {
        title: "Kick Back",
        releaseDate: '2021-03-10',
        type: "Mini Album",
        unitId: 4
      },
      {
        title: "맛 (Hot Sauce)",
        releaseDate: '2021-05-10',
        type: "Full Album",
        unitId: 3
      },
      {
        title: "Back To You",
        releaseDate: '2021-06-16',
        type: "Digital Single",
        unitId: 4
      },
      {
        title: "Hello Future",
        releaseDate: '2021-06-28',
        type: "Repackage Album",
        unitId: 3
      },
      {
        title: "Low Low",
        releaseDate: '2021-08-17',
        type: "Digital Single",
        unitId: 4
      },
      {
        title: "Sticker",
        releaseDate: '2021-09-17',
        type: "Full Album",
        unitId: 2
      },
      {
        title: "Favorite",
        releaseDate: '2021-10-25',
        type: "Repackage Album",
        unitId: 2
      },
      {
        title: "Universe (Let's Play Ball)",
        releaseDate: '2021-12-10',
        type: "Digital Single",
        unitId: 1
      },
      {
        title: "Universe",
        releaseDate: '2021-12-14',
        type: "Full Album",
        unitId: 1
      },
      {
        title: "Glitch Mode",
        releaseDate: '2022-03-28',
        type: "Full Album",
        unitId: 3
      },
      {
        title: "Beatbox",
        releaseDate: '2022-05-30',
        type: "Repackage Album",
        unitId: 3
      },
      {
        title: "질주 (2 Baddies)",
        releaseDate: '2020-09-16',
        type: "Full Album",
        unitId: 2
      },
      {
        title: "Candy",
        releaseDate: '2022-12-16',
        type: "Mini Album",
        unitId: 3
      },
      {
        title: "Phantom",
        releaseDate: '2022-12-28',
        type: "Mini Album",
        unitId: 4
      },
      {
        title: "Ay-Yo",
        releaseDate: '2023-01-30',
        type: "Repackage Album",
        unitId: 2
      },
      {
        title: "Best Friend Ever - Single",
        releaseDate: '2023-02-08',
        type: "Digital Single",
        unitId: 3
      },
    ]
    for (const singleAlbumData of albumData) {
      const currentAlbum = await Album.query().findOne(singleAlbumData)
      if (!currentAlbum) {
        await Album.query().insert(singleAlbumData)
      }
    }
  }

}

export default AlbumSeeder