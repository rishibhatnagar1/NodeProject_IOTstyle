/*The code below has been written using exprestify, a module by Ajith N N , you can find the module here:https://github.com/ajithnn/exprestify 
The code below is going to used to send files to a server and saving them there.*/

var rest = require('exprestify') //Module required

/*The following code defines where will the file be saved,how will it be named etc */
var multiopt ={
FilePath:"./images/", 		//File is going to be saved at a folder called 'images'
PostType:"file", 		//Mulitpart post
Rename: function(fieldname,filename){
	return fieldname; //Field name is what you add to the file,you then control how the file will be saved in the folder
}
}

rest.multipost('/pagemulti', function (err, data) { //File will be posted at servername/pagemulti 
    if (!err) {
        console.log(data); //You will be able to see whether the data is posted correctly.
    } else {
        console.log(err);
    }
}, multiopt)

rest.getfile('/images', function (err, query) {
    if (!err) {
        if (query.value) {
            return "./images/" + query.value;
        } else {
            return "";

        }
    } else {
        console.log(err);
        return err;
    }
})

rest.listen(3000, function () { //Running the server
    console.log("Listening on port 0.0.0.0:%s", rest.port)
})