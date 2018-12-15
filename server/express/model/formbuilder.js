var config = require('../config');

function generateid(){
    var mystr = Date.now();
    //该方法有一定问题
    return 'form_' + mystr;
}

function createform(data) {
    var db = config.dbconn;
    var dbstatus = 200;
    //1.根据时间生成随机字符串
    var myid = generateid();
    //2.建立数据表
    var sql = `create table ${myid} (
        id int not null auto_increment,
        type varchar(30) not null,
        tag varchar(100),
        primary key (id)
    )`;
    console.log('sql:',sql);
    db.query(sql, function(error){
        if(error){
            console.log(error.message);
            dbstatus = 401;
            return dbstatus;
        }
    })
    //3.依次插入数据
    data.forEach(item => {
        db.query(`insert into ${myid} (type, tag) values (?, ?)`,
            [item.type, item.tag],
            function(error,results,fields){
                if(error){
                    console.log(error.message);
                    dbstatus = 402;
                    return dbstatus;
                }
            }
        )    
    });   
    return dbstatus;
}

module.exports = {
    createform: createform
}