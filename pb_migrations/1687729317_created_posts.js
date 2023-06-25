migrate((db) => {
  const collection = new Collection({
    "id": "gps6pgvn5h1cebi",
    "created": "2023-06-25 21:41:57.276Z",
    "updated": "2023-06-25 21:41:57.276Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "ui9wmotf",
        "name": "author",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = author.id",
    "viewRule": "@request.auth.id = author.id",
    "createRule": "@request.auth.id = author.id",
    "updateRule": "@request.auth.id = author.id",
    "deleteRule": "@request.auth.id = author.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gps6pgvn5h1cebi");

  return dao.deleteCollection(collection);
})
