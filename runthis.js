// To run as standalone
const mysqlx      = require('@mysql/xdevapi');

// Connect to server using a connection URL
var mySession = mysqlx.getSession( {
 host: 'localhost', port: 33060,
 user: 'root', password: '48450311'} )
 .then (session =>{
    var myDb = session.getSchema('Project');
	// Accessing an existing table
	var myTable = myDb.getTable('all_seasons');
	// var myResult = myTable.select(['id', 'name', 'dept_name']).
	//  where('name like :name').
	//  bind('name', 'L%').execute();
	var myResult = myTable.select(['player_name', 'college', 'draft_year']).
	 where('player_name like :player_name').
	 bind('player_name', 'L%').execute();

	return myResult
 })
 .then(result => {
	 	// Print result
	console.log(result.fetchAll());
 });


// as a function called by server
module.exports =
{

buildPromise : async function ()
{
  const mysqlx      = require('@mysql/xdevapi');

  // Connect to server using a connection URL
  var mySession = mysqlx.getSession( {
   host: 'localhost', port: 33060,
   user: 'root', password: '48450311'} )
   .then (session =>{
     var myDb = session.getSchema('Project');
     // Accessing an existing table
     var myTable = myDb.getTable('all_seasons');
     var myResult = myTable.select(['player_name', 'pts', 'draft_year']).
	 where('player_name like :player_name').
	 bind('player_name', 'Kobe%').execute();
1
	return myResult
 })
 .then(result => {
	return result.fetchAll();
 });
 return mySession;
}

}