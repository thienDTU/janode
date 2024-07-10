import mongoose from "mongoose";

const liveSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	streamKey: {
		type: String,
		required: true,
		select: false,
	},
	// thumbnailUrl: {
	// 	type: String,
	// 	// required: [true, "thumbnailUrl is required"],
	// },
	description: {
		type: String,
		required: [true, "Description is required"],
	},
	// m3u8File: String,
	status: {
		type: String,
		default: "Ready",
		enum: ["Ready", "Streaming", "Ended"],
	},
	audioPort: {
		type: String,
		required: true
	},
	videoPort: {
		type: String,
		required: true
	}
});

const Live = mongoose.model("Live", liveSchema);

export default Live;
