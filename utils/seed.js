import faker from "faker";
import SubCategory from "../src/models/SubCategory";
import Category from "../src/models/Category";
import Condition from "../src/models/Condition";
import Item from "../src/models/Item";
import Location from "../src/models/Location";
import Room from "../src/models/Room";
import { dbConnect, dbDisconnect } from "./dbConnect";
import _ from "lodash";

export const seedSubCategory = async () => {
  try {
    const loop = 10;
    const subCategories = [];

    for (let index = 0; index < loop; index++) {
      subCategories.push(
        new SubCategory({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
        })
      )
    }

    SubCategory.collection.drop();

    subCategories.forEach(subcategory => {
      SubCategory.create(subcategory)
    })
    console.log('SubCategory Collection has been Populated!')

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
          //pictures: faker.image.image(),
          subCategories: [_.sample(allSubCategories)._id],
        })
      )
    }

    Category.collection.drop();

    categories.forEach(category => {
      Category.create(category)
    })
    console.log('Category Collection has been Populated!')

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
          name: faker.lorem.word() + faker.lorem.word(),
          description: faker.lorem.sentence(),
        })
      )
    }

    Condition.collection.drop();

    conditions.forEach(condition => {
      Condition.create(condition)
    })
    console.log('Condition Collection has been Populated!')
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
          name: faker.lorem.text(),
          description: faker.lorem.sentence(),
          //pictures: faker.image.image(),
          status: faker.lorem.word() + faker.lorem.word(),
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
    await Location.collection.drop();

    locations.forEach(location => {
      Location.create(location)
    })
    console.log('Location Collection has been Populated!')
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
      //const locationRoom = [_.sample(allLocations)._id]

      rooms.push(
        new Room({
          name: faker.lorem.word() + faker.lorem.word(),
          description: faker.lorem.sentence(),
          //pictures: faker.image.image(),
          location: [_.sample(allLocations)._id],
          // location: [_.sample(allLocations)._id]
        })
      )
    }

    Room.collection.drop();

    rooms.forEach(room => {
      Room.create(room)
    })
    console.log('Room Collection has been Populated!')
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
          //pictures: faker.image.image(),
          location: [_.sample(allLocations)._id],
          room: [_.sample(allRooms)._id],
          category: [_.sample(allCategory)._id],
          condition: [_.sample(allCondition)._id],
          estimatedValue: faker.commerce.price(),
          model: faker.name.title(),
          brand: faker.name.title(),
          serialNumber: faker.name.title(),
          notes: faker.name.title(),
          purchaseInfo: {
            //purchaseDate: faker.date.weekday(),
            //company: randomCompany._id,
            cost: faker.commerce.price(),
            //waranty: faker.random.boolean(),
            //contract: randomContract._id,
            //purchaseNotes: faker.lorem.sentence()
          }
        })
      )
    }
    await Item.collection.drop();

    items.forEach(item => {
      Item.create(item)
    })
    console.log('Item Collection has been Populated!')

  } catch (error) {
    console.log(error)
  }
};

function setOne() {
  console.log("\n= STEP ONE =============")
  seedSubCategory();
  seedLocation();
  seedCondition();
};

function setTwo() {
  console.log("\n= STEP TWO =============")
  seedCategory();
  seedRoom();
};

function setThree() {
  console.log("\n= STEP THREE ===========")
  seedItem();
  setTimeout(dbDisconnect, 2000);
};

// Databse Seeds
dbConnect().then(() => {

  //! 1
  setOne()

  //! 2
  setTimeout(setTwo, 2000);

  //! 3
  setTimeout(setThree, 3000);
});