//import seeder from 'mongoose-seed';
var seeder = require('mongoose-seed');
import dbConnect from "./utils/dbConnect.js"
import faker from 'faker'
//import sample from 'lodash.sample'
//import Note from "./models/Note.js"
import Category from "./models/Category.js"
import Condition from "./models/Condition.js"
import Item from "./models/Item.js"
import Location from "./models/Location.js"
import Room from "./models/Room.js"
import SubCategory from "./models/SubCategory.js"

dbConnect();

seeder.connect(dbConnect, function() {

//const db = "mongodb://localhost:27017/inventario" // this is just example

/*seeder.connect(db, function () {*/
   seeder.loadModels( [
	   "./models/Category.js", "./models/Condition.js", "./models/Item.js", "./models/Location.js", "./models/Room.js", "./models/SubCategory.js"
   ]);
   seeder.clearModels( ["Category", "Condition", "Item", "Location", "Room", "SubCategory"]);
   seeder.populateModels(cateS, condS, itemS, locatS, roomS, subS, function (err, done) {
	   if (err) {
		   return console.log("seed err", err)
	   }
	   if (done) {
		   return console.log("seed done", done);
	   }
	   seeder.disconnect()
   })
});

/*const data = [
	{
		'model': 'Category',
		'documents': [
			{
				
				"_id" : ("5f8a7686c5612628d80ac768"),
				"description" : "Eius aut et est repudiandae possimus. Iusto temporibus dicta animi consequatur ut et commodi commodi. Illum esse temporibus aut quaerat mollitia. Deleniti et quo dignissimos non ea atque earum. Quod hic assumenda inventore quia omnis omnis. Qui soluta animi ipsam neque amet.",
				"pictures" : [ 
					"https://s3.amazonaws.com/uifaces/faces/twitter/fronx/128.jpg"
				],
				"name" : "international infrastructure agent"
			}
		]
	}
];*/
//*********************************** Seeding with faker *************

export const CategorySeeds = async () => {	
	try {
		/** check if already populated */
		const categoryCollection = await Category.find()
		if (categoryCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		let cateS = []
		for (let i = 0; i < quantity; i++) {
			cateS.push(
				new Category({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
					pictures: faker.internet.avatar()
					//subcategory: faker.name.title()
				})
			)
		}
	    await Category.remove()
		 
	    cateS.forEach(categories => {
	   	Category.create(categories)
	})
	console.log('Category Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}
//***************************************************************
export const ConditionSeeds = async () => {
	try {
		/** check if already populated */
		const conditionCollection = await Condition.find()
		if (conditionCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		let condS = []
		for (let i = 0; i < quantity; i++) {
			condS.push(
				new Condition({
                    name: faker.name.title(),
					description: faker.lorem.paragraph()
				})
			)
		}
	    await Condition.remove()
		 
	    condS.forEach(conditions => {
			Condition.create(conditions)
	})
	console.log('Condition Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}
//***************************************************************
export const ItemSeeds = async () => {
	try {
		/** check if already populated */
		const itemCollection = await Item.find()
		if (itemCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		let itemS = []
		for (let i = 0; i < quantity; i++) {
			itemS.push(
				new Item({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
					pictures: faker.internet.avatar(),
					//Location: faker.name.title(),       // como se conectaria estas partes
					//Room: faker.name.title(),
					//Category: faker.name.title(),
					//Condition: faker.name.title(),
					model: faker.name.title(),
					brand: faker.name.title(),
					serialNumber: faker.name.title(),
					notes: faker.name.title(),
					//purchaseInfo: 
				})
			)
		}
	    await Item.remove()
	    itemS.forEach(dato => {
			Item.create(dato)
	})
	console.log('Item Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}
//*****************************************************************
export const LocationSeeds = async () => {
	try {
		/** check if already populated */
		const locationCollection = await Location.find()
		if (locationCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		let locatS = []
		for (let i = 0; i < quantity; i++) {
			locatS.push(
				new Location({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
					pictures: faker.internet.avatar(),
					status: faker.name.title()
					//address: 
				})
			)
		}
	    await Location.remove()
		 
	    locatS.forEach(locations => {
			Location.create(locations)
	})
	console.log('Locations Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}
//*****************************************************************
export const RoomSeeds = async () => {
	try {
		/** check if already populated */
		const roomCollection = await Room.find()
		if (roomCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		let roomS = []
		for (let i = 0; i < quantity; i++) {
			roomS.push(
				new Room({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
					pictures: faker.internet.avatar(),
					//location: faker.lorem.text()
				})
			)
		}
	    await Room.remove()
		 
	    roomS.forEach(roooms => {
			Room.create(roooms)
	})
	console.log('Room Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}
//*****************************************************************
export const SCategorySeeds = async () => {
	try {
		/** check if already populated */
		const subCollection = await SubCategory.find()
		if (subCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		let subS = []
		for (let i = 0; i < quantity; i++) {
			subS.push(
				new SubCategory({
                    name: faker.name.title(),
					description: faker.lorem.paragraph()
				})
			)
		}
	    await SubCategory.remove()
		 
	    subS.forEach(subcategories => {
			SubCategory.create(subcategories)
	})
	console.log('SubCategory Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}
