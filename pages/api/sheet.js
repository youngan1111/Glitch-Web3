import { google } from "googleapis"

async function handler(req, res) {
  const service = google.sheets({
    version: "v4",
    auth: google.auth.fromJSON({
      type: "authorized_user",
      client_id:
        "198991502715-6i4bjqtmu5rut0n91urgse3ii5uumugv.apps.googleusercontent.com",
      client_secret: "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",
      refresh_token:
        "1//0eLGSyTlyFhhLCgYIARAAGA4SNwF-L9IrapPK9FH-PV4ytFS8uvpntCiVs33UYbvS4YotY2dos28RWrfgDXQq8zI4uanDy-Eg1Pc",
    }),
  })

  const { data } = await service.spreadsheets.values.get({
    spreadsheetId: "1SOvLwTZqgjjRYjbEI4xM-0SjSI2C3EEM6V9raiTVN3c",
    range: "Balance!A2:F2",
  })

  res.status(200).json({ data })
}

export default handler
