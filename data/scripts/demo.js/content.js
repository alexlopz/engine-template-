// function beforeRender(done){
//     require("request")({url: "http://localhost:8082/api/hoja", json: true},
//     function(err, response, body){
//         request.data = { posts: body}
//         done();
//     });
// }

// function afterRender(done){
//     var sendGrid = require('sendgrid');
//     var sendGrid = new SendGrid('xxxx','xxxx');
    
//     sendgrid.send({to: 'alexanderlopez@outlook.com', from:'alexanderlopez@outlook.com', subject: 'test',
//         html: 'Esto es un reporte',
//         files:[ {
//             filename: 'report.pdf',
//             content: new Buffer(reponse.content)}]   
        
//     },
//         function(success, message) {
//             done(success);
//         });
// }