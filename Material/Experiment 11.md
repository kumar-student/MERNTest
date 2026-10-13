### a. Create and Drop Databases and Collections, and Perform Basic Query Operations in MongoDB

**Aim**:

To create and drop MongoDB databases and collections, and perform common query operations including document retrieval, sorting, limiting results, index creation, and data aggregation using MongoDB Shell (`mongosh`).

**Objectives**:

After completing this experiment, the student will be able to:
- Create and switch to a MongoDB database.
- Create a collection.
- Insert multiple documents into a collection.
- Retrieve documents using `find()`.
- Limit query results using `limit()`.
- Sort documents in ascending and descending order.
- Create an index on a collection field.
- Perform aggregation using the MongoDB Aggregation Framework.
- Drop a collection.
- Drop a database.
- Verify each operation using MongoDB Shell.

**Software/Tools Required**:

- MongoDB Atlas (Cloud Database) configured from previous experiments **or** MongoDB Community Server
- MongoDB Shell (`mongosh`)
- MongoDB Compass (Optional, for verification)
- Internet connection (if using Atlas)

**Prerequisites**:

Before starting this experiment, ensure that:
- MongoDB Atlas (or a local MongoDB server) is running.
- You can connect successfully using `mongosh`.
- You have permission to create and delete databases and collections.

**Theory**:

MongoDB organizes data hierarchically:
```
Database
    └── Collection
            └── Documents
```

- A **database** is a container for collections.
- A **collection** is a group of related documents.
- A **document** is a BSON (Binary JSON) object containing data.

MongoDB provides powerful query capabilities, including:
- Retrieving documents using `find()`
- Limiting results using `limit()`
- Sorting results using `sort()`
- Improving query performance using indexes
- Performing analytical operations using the Aggregation Framework

Unlike many relational databases, MongoDB creates databases and collections dynamically when data is first inserted.

**Where to Write the Commands**

Example (Atlas):

```bash
mongosh "your-atlas-connection-string"
```

Example (Local MongoDB):

```bash
mongosh
```

>Note: All commands in this experiment are executed directly at the `mongosh` prompt.

**Procedure**:

**Step 1**: Connect to MongoDB

Start MongoDB Shell.

For MongoDB Atlas:

```bash
mongosh "mongodb+srv://<username>:<password>@cluster-name.xxxxx.mongodb.net/"
```

For a local MongoDB server:

```bash
mongosh
```

Wait until the MongoDB Shell prompt appears.

**Step 2**: Create (or Switch to) a Database

Execute:

```javascript
use companyDB
```

Expected output:

```text
switched to db companyDB
```

> **Note:** The database is not physically created until the first document is inserted.

**Step 3**: Verify the Current Database

Execute:

```javascript
db
```

Expected output:

```text
companyDB
```

**Step 4**: Create a Collection

Create a collection named **employees**.

```javascript
db.createCollection("employees")
```

Expected output:

```javascript
{ ok: 1 }
```

Verify the collection.

```javascript
show collections
```

Expected output:

```text
employees
```

**Step 5**: Insert Employee Records

Insert multiple employee documents.

```javascript
db.employees.insertMany([
	{
		empId: 101,
		name: "Arjun",
		age: 28,
		department: "HR",
		salary: 35000
	},
	{
		empId: 102,
		name: "Ravi",
		age: 32,
		department: "IT",
		salary: 60000
	},
	{
		empId: 103,
		name: "Neha",
		age: 25,
		department: "Finance",
		salary: 45000
	},
	{
		empId: 104,
		name: "Kiran",
		age: 29,
		department: "IT",
		salary: 55000
	},
	{
		empId: 105,
		name: "Sneha",
		age: 30,
		department: "HR",
		salary: 38000
	}
])
```

Expected output:

```javascript
{
	acknowledged: true,
	insertedIds: {
		"0": ObjectId("..."),
		"1": ObjectId("..."),
		"2": ObjectId("..."),
		"3": ObjectId("..."),
		"4": ObjectId("...")
	}
}
```

**Step 6**: Retrieve All Documents

Display every employee document.

```javascript
db.employees.find().pretty()
```

Expected output (abbreviated):

```javascript
[
	{
		"_id": ObjectId("..."),
		"empId": 101,
		"name": "Arjun",
		...
	},
	...
]
```

**Step 7**: Limit the Number of Documents Returned

Display only the first three employee records.

```javascript
db.employees.find().limit(3)
```

This returns only three documents from the collection.

**Step 8**: Sort Documents

Sort by Salary (Ascending)

```javascript
db.employees.find().sort(
    {
        salary: 1
    }
)
```

Sort by Salary (Descending)

```javascript
db.employees.find().sort(
    {
        salary: -1
    }
)
```

Expected output (descending):

```javascript
[
	{
		name: "Ravi",
		salary: 60000
	},
	{
		name: "Kiran",
		salary: 55000
	},
	{
		name: "Neha",
		salary: 45000
	},
	{
		name: "Sneha",
		salary: 38000
	},
	{
		name: "Arjun",
		salary: 35000
	}
]
```

**Step 9**: Create an Index

Create an ascending index on the **department** field.

```javascript
db.employees.createIndex(
    {
        department: 1
    }
)
```

Expected output:

```javascript
department_1
```

Verify all indexes.

```javascript
db.employees.getIndexes()
```

Expected output includes:

- Default `_id` index
    
- Newly created `department_1` index
    

> **Note:** Indexes improve query performance by allowing MongoDB to locate documents more efficiently without scanning the entire collection.

**Step 10**: Perform Aggregation

Calculate the average salary of employees in each department.

```javascript
db.employees.aggregate([
    {
        $group:
        {
            _id: "$department",
            averageSalary:
            {
                $avg: "$salary"
            }
        }
    }
])
```

Expected output:

```javascript
[
	{
		"_id": "Finance",
		"averageSalary": 45000
	},
	{
		"_id": "HR",
		"averageSalary": 36500
	},
	{
		"_id": "IT",
		"averageSalary": 57500
	}
]
```

> **Explanation:** The `$group` stage groups documents by department, and `$avg` calculates the average salary for each group.

**Step 11**: Drop the Collection

Delete the **employees** collection.

```javascript
db.employees.drop()
```

Expected output:

```javascript
true
```

Verify:

```javascript
show collections
```

The **employees** collection should no longer appear.

**Step 12**: Drop the Database

Ensure the current database is **companyDB**.

```javascript
db
```

If necessary:

```javascript
use companyDB
```

Drop the database.

```javascript
db.dropDatabase()
```

Expected output:

```javascript
{
	ok: 1,
	dropped: "companyDB"
}
```

Verify the database has been removed.

```javascript
show dbs
```

The `companyDB` database should no longer be listed (unless it still contains data or is recreated later).

**Result**:

A MongoDB database and collection were successfully created. Employee documents were inserted and retrieved, query operations such as sorting, limiting, indexing, and aggregation were performed successfully, and the collection and database were deleted using MongoDB Shell.

**Viva Questions**:
1. What is the difference between a MongoDB database and a collection?
2. When is a MongoDB database physically created?
3. What is the purpose of the `use` command?
4. What is the difference between `find()` and `findOne()`?
5. What is the purpose of the `limit()` method?
6. How does the `sort()` method work in MongoDB?
7. What do the values `1` and `-1` represent in `sort()`?
8. Why are indexes used in MongoDB?
9. What is the default index created in every MongoDB collection?
10. What is the Aggregation Framework?
11. What is the purpose of the `$group` stage in an aggregation pipeline?
12. What does the `$avg` aggregation operator do?
13. How can you verify that an index has been created?
14. What is the difference between dropping a collection and dropping a database?
15. Why should `db.dropDatabase()` be used carefully?
