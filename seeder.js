//import seeder from 'mongoose';
const seeder = require ('mongoose-seed');
//import dbConnect from "./utils/dbConnect"
const faker = require ('faker');
import sample from 'lodash.sample'
//import Note from "./models/Note.js"
import Category from "./models/Category"
import Condition from "./models/Condition"
import Item from "./models/Item"
import Location from "./models/Location"
import Room from "./models/Room"
import SubCategory from "./models/SubCategory"

//dbConnect();

seeder.connect(dbConnect(), function() {
//const db = "mongodb://localhost:27017/inventario" // this is just example

/*seeder.connect(db, function () {*/
   seeder.loadModels( [
	   /*"./models/Category.js", "./models/Condition.js", "./models/Item.js", "./models/Location.js", "./models/Room.js", "./models/SubCategory.js"*/
   ]);
   seeder.clearModels( [/*"Category", "Condition", "Item", "Location", "Room", "SubCategory"*/]);
   seeder.populateModels(/*ConditionSeeds(), ItemSeeds(), SCategorySeeds(), CategorySeeds(), RoomSeeds(), LocationSeeds(),*/ function (err, done) {
	   if (err) {
		   return console.log("seed err", err)
	   }
	   if (done) {
		   return console.log("seed done", done);
	   }
	   seeder.disconnect()
   })
});

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
			const location = await Location.find();
			const randomLocation = await sample(location);
			const room = await Room.find();
			const randomRoom = await sample(room);
			const category = await Category.find();
			const randomCategory = await sample(category);
			const condition = await Condition.find();
			const randomCondition = await sample(condition);

            
			if(randomLocation, randomRoom){
			itemS.push(
				new Item({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
					pictures: faker.internet.avatar(),
					location: randomLocation._id(),       // como se conectaria estas partes
					room: randomRoom._id(),
					category: randomCategory._id(),
					condition: randomCondition._id(),
					model: faker.name.title(),
					brand: faker.name.title(),
					serialNumber: faker.name.title(),
					notes: faker.name.title(),
					purchaseInfo: {
				    purchaseDate: faker.date.recent(),
			    	cost: faker.name.title(),
		    		waranty: faker.database.type()
	    			}
				})
			
	    	)
	    }
	    await Item.remove()
	    itemS.forEach(dato => {
	    	Item.create(dato)
	})
	console.log('Item Collection has been Populated!')
		}	
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
			const subcategory = await SubCategory.find();
			const randomSubCategory = await sample(subcategory);

			if(randomSubCategory){
				cateS.push(
					new Category({
						name: faker.name.title(),
						description: faker.lorem.paragraph(),
						pictures: faker.internet.avatar(),
						subcategory: randomSubCategory._id()
					})
				)
			}
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
			const locations = await Location.find();
			const randomLocations = await sample(locations);

			if(randomLocations){
			roomS.push(
				new Room({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
					pictures: faker.internet.avatar(),
					locations: randomLocations._id()
				})
			)
			}
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
//*************************************************************** 
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
					status: faker.name.title(),
					address: {
						    streetNumber: faker.address.zipCode(),
                            street: faker.address.streetAddress(),
                            street2: faker.address.secondaryAddress(),
                            city: faker.address.city(),
                            province: faker.address.state(),
                            country: faker.address.country()
						}
					} 
				/*)*/)
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
