


//DATA FIND({})
const User=require('../Skima/Peraon')

const finddata=async(req,res)=>{

    try {
      const data=await User.find({},{password:0})
       
       if(data){
        console.log(data)
    
         return res.status(200).json({msg:data})


       }
       else{
        res.status(400).json({msg:"no data"})
    
       }
       console.log(data)
    
    
    } catch (error) {
      console.log(error)
    }}


module.exports={finddata}








