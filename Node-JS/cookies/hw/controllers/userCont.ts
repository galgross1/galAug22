import UserModel, {UserValidation} from "../models/model";

export async function getCookie(req,res) {
    try {
       const {id} = req.cookies;
       console.log(id);

       if(id){
        console.log(`client ${id} is here!`)
       }else{
        res.cookie("id",Math.floor(Math.random()*100000))
        console.log('New User is born!');
    }
    res.send({ok:true});
    } catch (error) {
        res.send({ error: error.message });
      }
}


export async function pushUser(req, res) {
    try {
        const {email,password} = req.body;
        const { error } = UserValidation.validate({ email,password });
    if (error) throw error;

    const user = await UserModel.findOne({ email,password });
    if (!user) {
      res.send({ login: false });
    } else {
      res.send({ login: true });
    }

    } catch (error) {
      res.send({ error: error.message });
    }
  }


