const Sequelize=require('sequelize');
const {DataTypes}=Sequelize;
const sequelize=new Sequelize('sequelize_video','root','rootpassword',{
dialect:'mysql'

})


const User=sequelize.define('user',{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
type:DataTypes.STRING,
allowNull:false,
validate:{
    len:[1,2]
}
    },
    password:{
type:DataTypes.STRING,
defaultValue:null
    },
    age:{
type:DataTypes.INTEGER,
defaultValue:21
    },

withCodeRocks:{
    type:DataTypes.BOOLEAN,
    defaultValue:true
}
},
{
    freezeTableName:true,
    timestamps:false
});
User.sync({alter:true}).then(()=>{
console.log("Table and Model synced Successfully")
return User.findAll({where:{password: 1234 ,username:'john hadley'}});
//return User.findAll({attributes:[['username','myName'],['password','pwd']]});
// return User.bulkCreate([
//     {
//         username:'tom',
//         age:39,
//         password:'hie',
       
//     },{
//         username:'jerry',
//         age:40,
//         password:'hiee'
//     },{
//         username:'dora'
//     }
// ],{
//     validate:false
// }); 
}).then((data) =>{
    data.forEach((element )=>{
        console.log(element.toJSON());
    });
}).catch((err)=>{
        console.log(err);

});

const Post=sequelize.define('post',{
    age:{
        type:DataTypes.STRING,

    },
    email:{
        type:DataTypes.STRING
    }
})
Post.sync({alter:true}).then(()=>{
    console.log("Post data synced successfully");
    return Post.findAll({attributes:[[sequelize.fn('SUM',sequelize.col('age')),'how old']]});
}) .then((data)=>{
    data.forEach((element)=>{
        console.log(element.toJSON());
    })
})
.catch((err)=>{
console.log(err);
});
    // return Post.bulkCreate([
    //   {age:50},
    //   {age:27},
    //   {age:49},
    //   {age:22}  
    // ])


   


