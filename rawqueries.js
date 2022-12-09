const Sequelize=require('sequelize');
const {DataTypes,Op}=Sequelize;
const{QueryTypes}=require('sequelize');
const sequelize=new Sequelize('sequelize_video','root','rootpassword',{
    dialect:'mysql'
});
const Usernew=sequelize.define('usernew',{
    userid:{
        type:DataTypes.STRING,
        allowNull:false
    },
    usery:{
        type:DataTypes.STRING
    },
    userx:{
        type:DataTypes.INTEGER
    }
})
Usernew.sync({force:true}).then(async ()=>{
    console.log("Model synced Successfully")
    let bulkData = await Usernew.bulkCreate([
        {
        userid:1,
        userx:25,
        usery:35
        },
        {
            userid:2,
            userx:35,
            usery:45   
        },
    {
        userid:3,
        userx:45,
        usery:55
    },
    {
        userid:4,
        userx:55,
        usery:65
    },{
        userid:5,
        userx:65,
        usery:75
    }

    ])
//    const [results,metadata]=  await sequelize.query("Update usernews set usery=100 where userx=45");
//    const[results1,metadata1 ]=await sequelize.query("update usernews set userx=65,usery=75 where userid=4");
   //const usernews=await sequelize.query('select * from `usernews`',{type:QueryTypes.SELECT});
//    const usernews=await sequelize.query('select * from usernews',{
//     model:'usernews',
//     mapToMModel:true
//    });
await sequelize.query('SELECT 1',{
    logging:console.log,
    plain:false,
    raw:true,
    type:QueryTypes.SELECT
});
console.log(await sequelize.query('SELECT * from usernews',{raw:true}));

}).then((data)=>{
    data.forEach((element)=>{
        console.log(element.toJSON());
    })
}).catch((err)=>{
    console.log('there is some err'+ err.message)
})