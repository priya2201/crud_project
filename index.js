const Sequelize=require('sequelize');
const {DataTypes,Op}=Sequelize;
const bcrypt=require('bcrypt');
const zlib=require('zlib');
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
    len:[1,20]
},
get(){
    const rawValue=this.getDataValue('username');
    return rawValue.toUpperCase();
},
    },
    password:{
type:DataTypes.STRING,
defaultValue:null,
set(value){
    const salt=bcrypt.genSaltSync(12);
    const hash=bcrypt.hashSync(value,salt);
    this.setDataValue('password',hash);
}
    },
    age:{
type:DataTypes.INTEGER,
defaultValue:21
    },

withCodeRocks:{
    type:DataTypes.BOOLEAN,
    defaultValue:true
},
description:{
    type:DataTypes.STRING,
//     set(value){
//         const compressed=zlib.deflateSync(value).toString('base64');
//         this.setDataValue('description',compressed);
//     },
//     get() {
//         const value=this.getDataValue('description');
// const uncompressed=zlib.inflateSync(Buffer.from(value,'base64'));
// return uncompressed.toString();
//     }
},
aboutUser:{
    type:DataTypes.VIRTUAL,
    get(){
        return `${this.username} ${this.description}`;
    }

}
},
{
    freezeTableName:true,
    timestamps:false
});
User.sync({alter:true}).then(()=>{
console.log("Table and Model synced Successfully")
// return User.findAll({where:{password: 1234 ,username:'john hadley'}});
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
 
// return User.findAll({where:{
//     [Op.or]:{username:'tom',age:40}
// }});
//return User.findAll({attributes:['username',
//[sequelize.fn('SUM',sequelize.col('age')),'sum_age']],
//group:'username'});
// return User.findAll({where:{
//     age:{
//         [Op.gt]:25
//     }
// }});

// return User.findAll({where:{
//     age:{
//         [Op.or]:{
//             [Op.lt]:35,
//             [Op.eq]:null
//         }
//     }
// }});
// return User.findAll({where:
// sequelize.where(sequelize.fn('char_length',sequelize.col('username')),5)


// });
// return User.update({username:'geet'},{
//     where:{age:40}
// });
// return User.update({username:'yes!'},{
// where:{age:{
//     [Op.gt]:30
// }}
// });
// return User.destroy({where:{
//     username:'yes!'
// }})
// return User.destroy({
//     truncate:true
// });
//return User.max('age');
//return User.sum('age');
// return User.findAll({
//     where:{age:21},
//     raw:true
// })
//return User.findByPk(18);
//return User.findOne();
// return User.findOne({where:{
//     age:{
//         [Op.or]:{
//             [Op.lt]:22,
//             [Op.eq]:null
//         }
//     }
// }})
// return User.findOrCreate({
//     where:{
//         username:'pizzaboy'
//     }
// });
// return User.findOrCreate({
//     where:{
//         username:'tommy'
//     },
//     defaults:{
//         age:77
//     }
// });
// return User.findAndCountAll({
//     where:{username:'katrina kaif'},
//     raw:true
// })
//return User.findOne();
// return User.create({
//     username:'shani',
//     password:'funnn1163',
//     description:'my desc hellooo'

// })
return User.findOne({where:{username:'shani'}});
}).then((data) =>{
    //data.forEach((element )=>{
    //    console.log(element.toJSON());
    //});
   //console.log(data.toJSON());
    // console.log(data.username);
    // console.log(data.password);
    console.log(data.description);
    console.log(data.aboutUser);
    // const[result,created]=data;
    // console.log(created);
    // const{count,rows}=data;
    // console.log(count,rows);
}).catch((err)=>{
        console.log(err);

});

// const Post=sequelize.define('post',{
//     age:{
//         type:DataTypes.STRING,

//     },
//     email:{
//         type:DataTypes.STRING
//     }
// })
// Post.sync({alter:true}).then(()=>{
//     console.log("Post data synced successfully");
   // return Post.findAll({attributes:[[sequelize.fn('SUM',sequelize.col('age')),'how old']]});
 //  return Post.findAll({limit:1});
 //return Post.findAll({order:[['age','desc']]});
 

// }) .then((data)=>{
//     data.forEach((element)=>{
//         console.log(element.toJSON());
//     })
// })
// .catch((err)=>{
// console.log(err);
// });
    // return Post.bulkCreate([
    //   {age:50},
    //   {age:27},
    //   {age:49},
    //   {age:22}  
    // ])

    const Info=sequelize.define('info',{
        name:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false,
            defaultValue:'john'
        },
        email:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false
        },
        mobile:{
            type:Sequelize.DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        timestamps:false
    });

Info.sync({force:true}).then(()=>{
    console.log("data synced successfully")
    return Info.bulkCreate([
        {
            email:'john12@gmail.com',
            username:'john h',
            mobile:98564231
        },
        {
            name:'siyu',
            email:'siya12@gmail.com',
            username:'siya h',
            mobile:98444231
        },{
            name:'tushi',
            email:'tushi12@gmail.com',
            username:'tush h',
            mobile:98426631
        },{
            name:'rani',
            email:'ranim@gmail.com',
            username:'rani raja',
            mobile:98444231
        }
    
    ])
//     return Info.findAll({attributes:['username',[sequelize.fn('COUNT',sequelize.col('mobile')),'SUM_mobile']],
// group:'username'})
// return Info.findAll()
    .then((data)=>{
        data.forEach((element)=>{
            console.log(element.toJSON())
        });
       
//            // console.log(data);
        
    })
}).catch((err)=>{
    console.log(err)
})


