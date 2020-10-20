import faker from "faker";
import SubCategory from "../src/models/SubCategory";
import Category from "../src/models/Category";
import Condition from "../src/models/Condition";
import Item from "../src/models/Item";
import Location from "../src/models/Location";
import Room from "../src/models/Room";
import dbConnect from "../utils/dbConnect";
import _ from "lodash";
//import { Room } from "@material-ui/icons";

dbConnect();

export const seedSubCategory = async () => {
  try {

    const SubCategoryCollection = await SubCategory.find();
    if (SubCategoryCollection.length > 1) {
    return;
    }
    const quantity = 10;
    const subCategories = [];

    for (let index = 0; index < quantity; index++) {
      subCategories.push(
        new SubCategory({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
          isActive: faker.random.boolean()
        })
      )
    }

    SubCategory.collection.drop();

    subCategories.forEach((subCategory, index) => {

      /*SubCategory.create(subCategory).then(data => {
        console.log(`Created - subCategory #${index}`);
      })*/

    })

  } catch (error) {
    console.log(error)
  }
};

export const seedCategory = async () => {
  try {
    const SubCategoryCollection = await SubCategory.find();
    if (SubCategoryCollection.length > 1) {
    return;
    }
    const quantity = 10;
    const categories = [];
    const allSubCategories = await SubCategory.find();

    for (let i = 0; i < quantity; i++) {

      categories.push(
        new Category({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
          isActive: faker.random.boolean(),
          pictures: faker.internet.avatar(),
          subCategories: [_.sample(allSubCategories)]
        })
      )
    }

    Category.collection.drop();

    categories.forEach((category, index) => {

      Category.create(category).then(data => {
        console.log(`Created - category #${index}`);
      })

    })

  } catch (error) {
    console.log(error)
  }
};

/*const seedCompany = async () => {
    try {
        const CompanyCollection = await Company.find();    just in case that wanted to use it
        if (CompanyCollection.length > 1) {
            return;
        }

        const quantity = 10;
        let companies = [];

        for (let i = 0; i < quantity; i++) {
            companies.push(
                new Company({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    companyFullName: faker.company.companyName(),
                    contactInfo: {
                        tel: faker.phone.phoneNumber(),
                        tel2: faker.phone.phoneNumber(),
                        email: faker.internet.email(),
                        email2: faker.internet.email(),
                        url: faker.internet.url()
                    },
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
        await Company.remove()
        
		companies.forEach(company => {
			Company.create(company)
		})
		console.log('Company Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}*/

const seedCondition = async () => {
    try {
        const ConditionCollection = await Condition.find();
        if (ConditionCollection.length > 1) {
            return;
        }

        const quantity = 10;
        let conditions = [];

        for (let i = 0; i < quantity; i++) {
            conditions.push(
                new Condition({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    isActive: faker.random.boolean()
                })
            )
        }
        //await Condition.remove()
        Condition.collection.drop();
    
        conditions.forEach((condition, index) => {

        Condition.create(condition).then(data => {
          console.log(`Created - condition #${index}`);
        })
      })
    } catch (error) {
      console.log(error)
    }
		/*conditions.forEach(condition => {
			Condition.create(condition)
		})
		console.log('Condition Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }*/
};

/*const seedContact = async () => {
    try {
        const ContactCollection = await Contact.find();
        if (ContactCollection.length > 1) {
            return;
        }

        const quantity = 10;
        let contacts = [];

        for (let i = 0; i < quantity; i++) {
            const company = await Company.find();
            const randomCompany = await sample(company)
            
            if(randomCompany) {
            contacts.push(
                new Contact({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    company: randomCompany._id,
                    contactInfo: {
                        tel: faker.phone.phoneNumber(),
                        tel2: faker.phone.phoneNumber(),
                        email: faker.internet.email(),
                        email2: faker.internet.email(),
                        url: faker.internet.url()
                    },
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
    }
        await Contact.remove()
        
		contacts.forEach(contact => {
			Contact.create(contact)
		})
		console.log('Contact Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}
*/

/*const seedContract = async () => {
    try {
        const ContractCollection = await Contract.find();
        if (ContractCollection.length > 1) {
            return;
        }

        const quantity = 10;
        let contracts = [];

        for (let i = 0; i < quantity; i++) {
            const company = await Company.find();
            const randomCompany = await sample(company)
            
            const contact = await Contact.find();
            const randomContact = await sample(contact)

            if(randomCompany || randomContact) {
            contracts.push(
                new Contract({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    pictures: faker.image.image(),
                    files: faker.image.image(),
                    company: randomCompany._id,
                    contact: randomContact._id,
                    contractNumber: faker.finance.creditCardNumber(),
                    type: faker.lorem.word(),
                    Emergency: faker.phone.phoneNumber(),
                    dateStart: faker.date.past(),
                    dateEnd: faker.date.future(),
                    dateRenewal: faker.date.future(),
                    dateRenewalReminder: faker.date.future(),
                    cost: faker.commerce.price(),
                    paymentType: faker.finance.transactionType()
                })
            )
        }
    }
        await Contract.remove()
        
		contracts.forEach(contract => {
			Contract.create(contract)
		})
		console.log('Contract Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
}*/

const seedRoom = async () => {
    try {
        const RoomCollection = await Room.find();
        if (RoomCollection.length > 1) {
            return;
        }

        const quantity = 10;
        let rooms = [];

        for (let i = 0; i < quantity; i++) {
            /*const location = await Location.find();
            const randomLocation = await sample(location)*/
            const allLocation = await Location.find();
            
            //if(randomLocation) {
            rooms.push(
                new Room({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    isActive: faker.random.boolean(),
                    pictures: faker.image.image(),
                    //location: randomLocation._id
                    location: [_.sample(allLocation)]
                })
            )
        }
    
     Room.collection.drop();
        
        rooms.forEach((room, index) => {

        Room.create(room).then(data => {
      console.log(`Created - room #${index}`);
    })
  })
} catch (error) {
  console.log(error)
}
        /*await Room.remove()
        
		rooms.forEach(room => {
			Room.create(room)
		})
		console.log('Room Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }*/
};

const seedLocation = async () => {
    try {
        const LocationCollection = await Location.find();
        if (LocationCollection.length > 1) {
            return;
        }

        const quantity = 10;
        let locations = [];

        for (let i = 0; i < quantity; i++) {
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
        Location.collection.drop();
        
        locations.forEach((location, index) => {

        Location.create(location).then(data => {
      console.log(`Created - location #${index}`);
    })
  })
} catch (error) {
  console.log(error)
}
        /*await Location.remove()
        
		locations.forEach(location => {
			Location.create(location)
		})
		console.log('Location Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }*/
};

const seedItem = async () => {
	try {
		const ItemCollection = await Item.find()
		if (ItemCollection.length > 1) {
			return
        }
        
		const quantity = 10;
        let items = [];
        
		for (let i = 0; i < quantity; i++) {
			/*const location = await Location.find();
            const randomLocation = await sample(location);*/
            const allLocation = await Location.find();
            const allRoom = await Room.find();
            const allCategory = await Category.find();
            const allCondition = await Condition.find();
			//const room = await Room.find();
            //const randomRoom = await sample(room);
            
			//const category = await Category.find();
            //const randomCategory = await sample(category);
            
			//const condition = await Condition.find();
            //const randomCondition = await sample(condition);
            
			//if(randomLocation || randomRoom || randomCategory || randomCondition || randomCompany || randomContract){
			items.push(
				new Item({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
                    pictures: faker.internet.avatar(),
                    isActive: faker.random.boolean(),
                    //location: randomLocation._id, 
                    location: [_.sample(allLocation)], 
                    room: [_.sample(allRoom)], 
                    category: [_.sample(allCategory)], 
                    condition: [_.sample(allCondition)],     
					//room: randomRoom._id,
					//category: randomCategory._id,
                    //condition: randomCondition._id,
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
        Item.collection.drop();
    
        items.forEach((item, index) => {

        Item.create(item).then(data => {
          console.log(`Created - item #${index}`);
        })
      })
    
    } catch (error) {
      console.log(error)
    }/*
	    await Item.remove()
	    items.forEach(item => {
	    	Item.create(item)
	})
	console.log('Item Collection has been Populated!')
		}	
	} catch (error) {
		console.log(error)
	}*/
};


// Databse Seeds
seedSubCategory();
seedCategory();
//seedCompany();
seedCondition();
//seedContact();
//seedContract();
seedLocation();
seedRoom();
seedItem();