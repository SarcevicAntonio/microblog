migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  collection.viewRule = "@request.auth.id = author.id"

  return dao.saveCollection(collection)
})
