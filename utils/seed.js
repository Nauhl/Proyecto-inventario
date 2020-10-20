import faker from "faker";
import SubCategory from "../src/models/SubCategory";
import Category from "../src/models/Category";
import Condition from "../src/models/Condition";
import Item from "../src/models/Item";
import Location from "../src/models/Location";
import Room from "../src/models/Room";
import dbConnect from "./dbConnect";
import _ from "lodash";
//import lodash from 'loadash';
//import sample from 'loadash.sample';
//import { Room } from "@material-ui/icons";

dbConnect();

export const seedSubCategory = async () => {
  try {

    const SubCategoryCollection = await SubCategory.find();
    if (SubCategoryCollection.length > 1) {
    return;
    }
    const quantity = 10;
    let subCategories = [];

    for (let index = 0; index < quantity; index++) {
      subCategories.push(
        new SubCategory({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
          isActive: faker.random.boolean()
        })
      )
    }
    await SubCategory.remove()
        
		subcategories.forEach(subcategory => {
			SubCategory.create(subcategory)
		})
		console.log('SubCategory Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
};

export const seedCategory = async () => {
  try {
    const SubCategoryCollection = await SubCategory.find();
    if (SubCategoryCollection.length > 1) {
    return;
    }

    const quantity = 10;
    let categories = [];
    
    
    for (let i = 0; i < quantity; i++) {
      const subcategory = await SubCategory.find();
      const randomSubCategory = await sample(subcategory)

      if(randomSubCategory) {
      categories.push(
        new Category({
          name: faker.name.findName(),
          description: faker.lorem.paragraph(),
          isActive: faker.random.boolean(),
          pictures: faker.internet.avatar(),
          subCategories: randomSubCategory._id
        })
      )
    }
  }
        //removes notes from databse, before we add more
        await Category.remove()
        
        //creates new database entries for each note in the array
		categories.forEach(category => {
			Category.create(category)
		})
		console.log('Category Collection has been Populated!')
    } catch (error) {
        console.log(error);
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
        await Condition.remove()
        
		conditions.forEach(condition => {
			Condition.create(condition)
		})
		console.log('Condition Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
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
            const location = await Location.find();
            const randomLocation = await sample(location)
            
            if(randomLocation) {
            rooms.push(
                new Room({
                    name: faker.lorem.word(),
                    description: faker.lorem.sentence(),
                    isActive: faker.random.boolean(),
                    pictures: faker.image.image(),
                    location: randomLocation._id
                })
            )
        }
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
        
        await Location.remove()
        
		locations.forEach(location => {
			Location.create(location)
		})
		console.log('Location Collection has been Populated!')
    } catch (error) {
        console.log(error);
    }
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
			const location = await Location.find();
            const randomLocation = await sample(location);
			const room = await Room.find();
            const randomRoom = await sample(room);
            
			const category = await Category.find();
            const randomCategory = await sample(category);
            
			const condition = await Condition.find();
            const randomCondition = await sample(condition);
            
			if(randomLocation || randomRoom || randomCategory || randomCondition || randomCompany || randomContract){
			items.push(
				new Item({
                    name: faker.name.title(),
					description: faker.lorem.paragraph(),
                    pictures: faker.internet.avatar(),
                    isActive: faker.random.boolean(),
                    location: randomLocation._id, 
					          room: randomRoom._id,
					          category: randomCategory._id,
                    condition: randomCondition._id,
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
		}	
	} catch (error) {
		console.log(error)
	}
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