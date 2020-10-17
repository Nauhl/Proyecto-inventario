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
		let noteS = []
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
