import faker from "faker";
import SubCategory from "../src/models/SubCategory";
import Category from "../src/models/Category";
import Condition from "../src/models/Condition";
import Item from "../src/models/Item";
import Location from "../src/models/Location";
import Room from "../src/models/Room";
import dbConnect from "./dbConnect";
import _ from "lodash";

dbConnect();

export const seedSubCategory = async () => {
  try {
    const loop = 10;
    const subCategories = [];

    for (let index = 0; index < loop; index++) {
      subCategories.push(
        new SubCategory({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
          isActive: faker.random.boolean(),
        })
      )
    }

    SubCategory.collection.drop();

    subCategories.forEach((subCategory, index) => {

      SubCategory.create(subCategory).then(data => {
        console.log(`Created - subCategory #${index}`);
      })

    })

  } catch (error) {
    console.log(error)
  }
};

export const seedCategory = async () => {
  try {
    const loop = 10;
    const categories = [];
    const allSubCategories = await SubCategory.find();

    for (let i = 0; i < loop; i++) {

      categories.push(
        new Category({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
          subCategories: [_.sample(allSubCategories)],
          isActive: faker.random.boolean(),
        })
      )
    }

    categories.forEach((category, index) => {

      Category.create(category).then(data => {
        console.log(`Created - category #${index}`);
      })

    })

  } catch (error) {
    console.log(error)
  }
};

export const seedCondition = async () => {   
  try {
    const loop = 10;
    const conditions = [];
    //const allSubCategories = await SubCategory.find();

    for (let i = 0; i < loop; i++) {
      conditions.push(
        new Condition({
          name: faker.lorem.word(),
          description: faker.lorem.sentence(),
          isActive: faker.random.boolean()
        })
      )
    }
    await Condition.remove()

    conditions.forEach(condition => {
      Condition.create(condition)
    })
    console.log('Condition Collection has been Populated!')
  } catch (error) {
    console.log(error);
  }
};

export const seedRoom = async () => {   
  try {
    const loop = 10;
    const rooms = [];
    const allLocations = await Location.find();

    for (let i = 0; i < loop; i++) {

        rooms.push(
          new Room({
            name: faker.lorem.word(),
            description: faker.lorem.sentence(),
            isActive: faker.random.boolean(),
            pictures: faker.image.image(),
            locations: [_.sample(allLocations)]
          })
        )
      }
  
    await Room.remove()

    rooms.forEach(room => {
      Room.create(room)
    })
    console.log('Room Collection has been Populated!')
  } catch (error) {
    console.log(error);
  }
};

export const seedLocation = async () => { 
  try {
    const loop = 10;
    const locations = [];

    for (let i = 0; i < loop; i++) {
      locations.push(
        new Location({
          name: faker.lorem.word(),
          description: faker.lorem.sentence(),
          isActive: faker.random.boolean(),
          pictures: faker.image.image(),
          status: faker.lorem.word(),
          address: {
            streetNumber: faker.address.zipCode(),
            street: faker.address.streetAddress(),
            street2: faker.address.secondaryAddress(),
            city: faker.address.city(),
            province: faker.address.state(),
            country: faker.address.country(),
          }
        })
      )
    }

    await Location.remove()

    locations.forEach(location => {
      Location.create(location)
    })
    console.log('Location Collection has been Populated!')
  } catch (error) {
    console.log(error);
  }
};

export const seedItem = async () => {    
  try {
    const loop = 10;
    const items = [];
    const allLocations = await Location.find();
    const allRooms = await Room.find();
    const allCategory = await Category.find();
    const allCondition = await Condition.find();

    for (let i = 0; i < loop; i++) {
     
         items.push(
          new Item({
            name: faker.name.title(),
            description: faker.lorem.paragraph(),
            pictures: faker.internet.avatar(),
            isActive: faker.random.boolean(),
            locations: [_.sample(allLocations)],
            rooms: [_.sample(allRooms)],
            categories: [_.sample(allCategory)],
            conditions: [_.sample(allCondition)],
            estimatedValue: faker.commerce.price(),
            model: faker.name.title(),
            brand: faker.name.title(),
            serialNumber: faker.name.title(),
            notes: faker.name.title(),
            purchaseInfo: {
              purchaseDate: faker.date.past(),
              //company: randomCompany._id,
              cost: faker.commerce.price(),
              waranty: faker.random.boolean(),
              //contract: randomContract._id,
              purchaseNotes: faker.lorem.sentence()
            }
          })
        )
      }
      await Item.remove()
      items.forEach(item => {
        Item.create(item)
      })
      console.log('Item Collection has been Populated!')
    
  } catch (error) {
    console.log(error)
  }
};


// Databse Seeds
seedSubCategory();
seedCategory();
seedCondition(); 
seedLocation();    
seedRoom();         
seedItem();        