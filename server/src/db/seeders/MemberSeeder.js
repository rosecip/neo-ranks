import { Member } from "../../models/index.js"

class MemberSeeder {
  static async seed() {
    const memberData = [
      {
        name: "Taeil",
        birthName: "Moon Taeil",
        birthday: '1994-06-14'
      },
      {
        name: "Johnny",
        birthName: "Johnny Suh",
        birthday: '1995-02-09'
      },
      {
        name: "Taeyong",
        birthName: "Lee Taeyong",
        birthday: '1995-07-01'
      },
      {
        name: "Yuta",
        birthName: "Nakamoto Yuta",
        birthday: '1995-10-26'
      },
      {
        name: "Kun",
        birthName: "Qian Kun",
        birthday: '1996-01-01'
      },
      {
        name: "Doyoung",
        birthName: "Kim Dongyoung",
        birthday: '1996-02-01'
      },
      {
        name: "Ten",
        birthName: "Chittaphon Leechaiyapornkul",
        birthday: '1996-02-27'
      },
      {
        name: "Jaehyun",
        birthName: "Jeong Yoonoh",
        birthday: '1997-02-14'
      },
      {
        name: "Winwin",
        birthName: "Dong Sicheng",
        birthday: '1997-10-28'
      },
      {
        name: "Jungwoo",
        birthName: "Kim Jungwoo",
        birthday: '1998-04-09'
      },
      {
        name: "Lucas",
        birthName: "Wong Yukhei",
        birthday: '1999-01-25'
      },
      {
        name: "Mark",
        birthName: "Mark Lee",
        birthday: '1999 / 8 / 2'
      },
      {
        name: "Xiaojun",
        birthName: "Xiao Dejun",
        birthday: '1999-08-08'
      },
      {
        name: "Hendery",
        birthName: "Huang Guanheng",
        birthday: '1999-09-28'
      },
      {
        name: "Renjun",
        birthName: "Huang Renjun",
        birthday: '2000-04-23'
      },
      {
        name: "Jeno",
        birthName: "Lee Jeno",
        birthday: '2000-04-23'
      },
      {
        name: "Haechan",
        birthName: "Lee Donghyuck",
        birthday: '2000-06-06'
      },
      {
        name: "Jaemin",
        birthName: "Na Jaemin",
        birthday: '20000-08-13'
      },
      {
        name: "Yangyang",
        birthName: "Liu Yangyang",
        birthday: '2000-10-10'
      },
      {
        name: "Shotaro",
        birthName: "Osaki Shotaro",
        birthday: '2000-11-25'
      },
      {
        name: "Sungchan",
        birthName: "Jung Sungchan",
        birthday: '2001-09-13'
      },
      {
        name: "Chenle",
        birthName: "Zhong Chenle",
        birthday: '2001-11-22'
      },
      {
        name: "Jisung",
        birthName: "Park Jisung",
        birthday: '2002-02-05'
      },
    ]
    for (const singleMemberData of memberData) {
      const currentMember = await Member.query().findOne(singleMemberData)
      if (!currentMember) {
        await Member.query().insert(singleMemberData)
      }
    }
  }
}

export default MemberSeeder