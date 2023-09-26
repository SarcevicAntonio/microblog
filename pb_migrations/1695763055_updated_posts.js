migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  // remove
  collection.schema.removeField("ibfcp82e")

  // remove
  collection.schema.removeField("1z2cybzm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pk2hai39",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "gps6pgvn5h1cebi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibfcp82e",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1z2cybzm",
    "name": "alt_text",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("pk2hai39")

  return dao.saveCollection(collection)
})
