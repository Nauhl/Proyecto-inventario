import faker from 'faker'
//import sample from 'lodash.sample'
import Note from "./models/Note"

/** create array of fake users then seed database */
export const noteSeeds = async () => {
	try {
		/** check if already populated */
		const notesCollection = await Note.find()
		if (notesCollection.length > 1) {
			return
		}
		/** quantity to be generated */
		const quantity = 10
		/** empty array to store new data */
		const noteS = []
		for (let i = 0; i < quantity; i++) {
			noteS.push(
				new Note({
                    title: faker.name.title(),
                    description: faker.lorem.paragraph()
				})
			)
		}
		/** little housekeeping before adding new users */
	    await Note.remove()
		
	    noteS.forEach(notes => {
	   	Note.create(notes)
	})
	console.log('Users Collection has been Populated!')
	
	} catch (error) {
		console.log(error)
	}
}

/*export const seedShots = async () => {
	try {
		const shotsCollection = await Shot.find()
		if (shotsCollection.length > 1) {
			return
		}

		const quantity = 20
		let shots = []
		for (let i = 0; i < quantity; i++) {
			const users = await User.find()
			const randomAuthor = await sample(users)

			if (randomAuthor) {
				shots.push(
					new Shot({
						title: faker.commerce.productName(),
						description: faker.lorem.sentence(),
						author: randomAuthor._id,
						image: faker.image.imageUrl(640, 480),
						draft: faker.random.boolean()
					})
				)
			}
		}

		await Shot.remove()
		shots.forEach(shot => {
			Shot.create(shot)
		})
		console.log('Shots Collection has been Populated!')
	} catch (error) {
		console.log(error)
	}
}*/