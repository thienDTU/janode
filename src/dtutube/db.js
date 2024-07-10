import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const DBconnection = async () => {
	const uri = process.env.MONGO_URI;
	const conn = await mongoose.connect(uri).catch((err) => {
		console.log(`For some reasons we couldn't connect to the DB`.red, err)
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`)
}

export default DBconnection;
