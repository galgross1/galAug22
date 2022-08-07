import UserModel, { UserValidation } from "../models/model";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = await UserModel.findOne({ email, password });
    if (!user) {
      res.send({ login: false });
    } else {
      res.send({ login: true });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
}

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    const { error } = UserValidation.validate({ email, password });
    if (error) throw error;

    const user = new UserModel({ email, password });
    await user.save();

    res.send({ register: true });
  } catch (error) {
    res.send({ error: error.message });
  }
}




export async function getUser(req, res){
  try {
      const {userId} = req.query;
      console.log(userId)
      if(!userId) throw new Error("missing userId in query");

      const userDB = await UserModel.findById(userId);

      if(!userDB) throw new Error(`coundt find use with this id: ${userId}` );

      res.send({user:userDB, success:true});

  } catch (error) {
      console.error(error);
      res.send({eror: error.message});
  }
} 