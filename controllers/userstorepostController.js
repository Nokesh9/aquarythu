const UserStorePost = require("../models/userstorepost");

exports.createUserStorePost = async (req, res) => {
  try {
    const { userid, storecategoryId, store_name, storeImg, StoreDiscrption, StoreContact, storeState, storeDistrict, storevillage, address, longitude, latitude } = req.body;
    console.log(userid, storecategoryId, store_name, storeImg, StoreDiscrption, StoreContact, storeState, storeDistrict, storevillage, address, longitude, latitude )
    const newUserStorePost = await UserStorePost.create({
      userid,
      storecategoryId,
      store_name,
      storeImg,
      StoreDiscrption,
      StoreContact,
      storeState,
      storeDistrict,
      storevillage,
      address,
      longitude,
      latitude
    });

    res.status(201).json(newUserStorePost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUserStorePosts = async (req, res) => {
  try {
    const userStorePosts = await UserStorePost.findAll();
    res.status(200).json(userStorePosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserStorePostById = async (req, res) => {
  try {
    const userStorePost = await UserStorePost.findByPk(req.params.id);

    if (!userStorePost) {
      return res.status(404).json({ message: "UserStorePost not found" });
    }

    res.status(200).json(userStorePost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserStorePost = async (req, res) => {
  try {
    const { userId, storecategoryId, store_name, storeImg, StoreDiscrption, StoreContact, storeState, storeDistrict, storevillage, address, longitude, latitude } = req.body;
    
    const userStorePost = await UserStorePost.findByPk(req.params.id);

    if (!userStorePost) {
      return res.status(404).json({ message: "UserStorePost not found" });
    }

    // Update fields
    await userStorePost.update({
      userId,
      storecategoryId,
      store_name,
      storeImg,
      StoreDiscrption,
      StoreContact,
      storeState,
      storeDistrict,
      storevillage,
      address,
      longitude,
      latitude
    });

    res.status(200).json(userStorePost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUserStorePost = async (req, res) => {
  try {
    const userStorePost = await UserStorePost.findByPk(req.params.id);

    if (!userStorePost) {
      return res.status(404).json({ message: "UserStorePost not found" });
    }

    await userStorePost.destroy();
    res.status(200).json({ message: "UserStorePost deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
