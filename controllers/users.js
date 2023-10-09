import User from "../models/User.js"


export const getUsers = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      const users = await User.find();
      res.json(users);
    } else {
      const regex = new RegExp(email, 'i');

      const users = await User.find({ email: regex }).populate('carrito')
      if (users.length) {
        res.status(200).send(users);
      } else {
        res.status(404).send("Email not found");
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserId = async (req, res) => {
  try {
    const userId = await User.findById(req.params.id).populate('carrito')
    if (!userId) return res.satus(404).json({
      message: "User does not exists"
    })
    return res.json(userId)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const createUser = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    let isAdmin = false;
    if (email === 'ovejerocande@gmail.com') {
      isAdmin = true;
    }ps
    const newUser = new User({
      email,
      password,
      firstName,
      lastName,
    })
    await newUser.save()
    
    if (isAdmin) {
      const userRecord = await admin.auth().getUserByEmail(email);
      const uid = userRecord.uid;
      await admin.auth().setCustomUserClaims(uid, { isAdmin: true });
      console.log('Usuario actualizado como administrador');
    }
    
    res.json(newUser)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    user.carrito = req.body.carrito;

    const userUpdated = await user.save();
    return res.json(userUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.params.id)

    if (!userDelete) return res.satus(404).json({
      message: "User does not exists"
    })

    return res.json(userDelete)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
