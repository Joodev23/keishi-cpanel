export default async function handler(req, res) {
  try {
    const r = await fetch("https://api.jsonbin.io/v3/b/683162c68960c979a5a070dc/latest", {
      headers: {
        "X-Master-Key": "$2a$10$dg8zO4KIAduGn0D6/D.2Au5R7hmSBDe/23xy04btU0KYzyBv2S5AC",
        "X-Access-Key": "$2a$10$AlR3OcsKZBUlWMP/AlWOeO.jYE11KlMeUxhrmI1GIEG8wM0l9dHg6"
      }
    });

    const json = await r.json();
    res.status(200).json(json.record.users); // langsung kirim array users
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
