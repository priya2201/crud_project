const Sequelize=require('sequelize');
const{DataTypes,Op}=Sequelize;
const sequelize=new Sequelize('sequelize_video','root','rootpassword',{
    dialect:'mysql',
});
const Student =sequelize.define('student',{
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[4,20]
        }
    },
    favourite_class:{
type:DataTypes.STRING(25),
defaultValue:'Computer Science'
    },
    school_year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subscribed_to_wittcode:{
type:DataTypes.BOOLEAN,
defaultValue:true
    }
},{
    timestamps:false,
    freezeTableName:true
})

Student.sync({force:true}).then(()=>{
    console.log("Student Table synced Successfully")
    //  return Student.bulkCreate([
    //     {
    //         name:'piyam',
    //         school_year:12

    //     },
    //     {
    //         name:'tushar',
    //         school_year:11,
    //         favourite_class:'basket Weaving',
    //         subscribed_to_wittcode:false
    //     },
    //     {
    //         name:'vinit',
    //         school_year:6,
    //         favorite_class:'history',
    //         subscribed_to_wittcode:false

    //     },
    //     {
    //         name:'sunanda',
    //         school_year:16,
    //         favorite_class:'It',
    //         subscribed_to_wittcode:false

    //     },
    //     {
    //         name:'pinky',
    //         school_year:22,
    //         favorite_class:'dm',
    //         subscribed_to_wittcode:false

    //     },
    //     {
    //         name:'prachi',
    //         school_year:3,
    //         favorite_class:'history',
    //         subscribed_to_wittcode:false

    //     },
    //     {name:'vinita',
    //     school_year:14,
      

    //     } 
        
    // ],
    // {
    //     validate:true
    // });
  //  return Student.findAll();
//     return Student.findAll({attributes:['name'],
// where:{
// [Op.or]:{
//     favourite_class:'Computer Science',subscribed_to_wittcode:true
// }
// }});
return Student.findAll({
    attributes:[
        'school_year',
        [sequelize.fn('COUNT',sequelize.col('school_year')),'num_students']
    ],
    group:'school_year'
});
}).then((data)=>{
    // data.forEach((element)=>{
    // //     console.log(element.toJSON());
    // })
    console.log(data)
}).catch((err)=>{
    console.log(err);
})