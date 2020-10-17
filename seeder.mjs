import seeder from 'mongoose-seed';

seeder.connect(MONGO_URI, function() {

//const db = "mongodb://localhost:27017/inventario" // this is just example

/*seeder.connect(db, function () {*/
   seeder.loadmodels( [
	   "./models/Category.js"
   ]);
   seeder.cleanModels( ["Category"]);
   seeder.populateModels(data, function (err, done) {
	   if (err) {
		   return console.log("seed err", err)
	   }
	   if (done) {
		   return console.log("seed done", done);
	   }
	   seeder.disconnect()
   })
});

const data = [
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
];