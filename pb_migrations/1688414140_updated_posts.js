migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  collection.listRule = "@request.auth.id = author.id"

  return dao.saveCollection(collection)
})
