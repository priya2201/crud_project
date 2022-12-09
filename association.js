const Sequelize=require('sequelize');
const{DataTypes,Op}=Sequelize;
const sequelize=new Sequelize('associations','root','rootpassword',{
    dialect:'mysql',
});
const User=sequelize.define('USer',{
    name:{
        type:DataTypes.STRING
    }
})