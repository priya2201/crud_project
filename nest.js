const Sequelize=require('sequelize');
const {DataTypes,Op}=Sequelize;
const{QueryTypes}=require('sequelize');
const sequelize=new Sequelize('my_db','root','rootpassword',{
    dialect:'mysql'

});
const newusers= sequelize.query('select * from newusers',{
    
    type:QueryTypes.SELECT,
    mapToModel:true
});
console.log(JSON.stringify(newusers));

// Usernew.sync({force:true}).then(async ()=>{
//     console.log("Model synced Successfully")
// }).then((data)=>{
//     data.forEach((element)=>{
//         console.log(element.toJSON());
//     })
// }).catch((err)=>{
//     console.log('there is some err'+ err.message)
// })