const jwt = require('jsonwebtoken');
SECRET = process.env.SECRET

const Auth = {
    verifyToken(req, res, next){
        token = req.cookies['JWT']
        console.log(token);
        if (token) {
            // 12. Lakukan jwt verify 
            const verified = jwt.verify(token, SECRET);
            if(verified){
              console.log("You have been Verified");
              return next();
            }else{
              return res.status(401).send(error);
            }

        } else {
          res.status(403).send({message: 'Youre not authenticated, please login first'})
            console.log('Youre not authenticated');
        }
    
  }
}

module.exports = Auth;