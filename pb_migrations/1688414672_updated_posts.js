migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgl9xwwo",
    "name": "body",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgl9xwwo",
    "name": "post",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
