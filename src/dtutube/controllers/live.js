// const sharp = require("sharp");
import Live from '../models/Live.js'
const getLiveById = async (streamKey) => {
  try {
    const live = await Live.findOne({ streamKey });
    return live;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default {
  getLiveById,
}