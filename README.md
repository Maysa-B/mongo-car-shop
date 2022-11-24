## Mongo Car Shop

The project was developed at the end of Trybe's 30th block, where I studied _Mongo DB and API's OO_.

![some-codes]()

### How it works

My first API with a NoSQL Database. In this project, I used MongoDB, Express, Mongoose, and Mocha, Chai, and Sinon to test.

### Endpoints

<details>
<summary><h4>POST</h4></summary>

- **`/cars`**: to create a new car.
	- requisition body model:
```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
- **`/motorcycles`**: to create a new motorcycle.
	- requisition body model:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```
</details>

<details>
<summary><h4>GET</h4></summary>

- **`/cars`**: to list all cars.
- **`/cars/:id`**: to find a car by its id.
- **`/motorcycles`**: to list all motorcycles.
- **`/motorcycles/:id`**: to find a motorcycle by its id.
</details>

<details>
<summary><h4>PUT</h4></summary>

- **`/cars/:id`**: to create update a car.
	- requisition body model:
```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```
- **`/motorcycles/:id`**: to create update a motorcycle.
	- requisition body model:
```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```
</details>

<details>
<summary><h4>DELETE</h4></summary>

- **`/cars/:id`**: to delete a car by its id.
- **`/motorcycles/:id`**: to delete a motorcycle by its id.
</details>

----------

If you see something that can be improved, don’t hesitate to contact me! All feedback is very welcome.✨