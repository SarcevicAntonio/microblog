migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
