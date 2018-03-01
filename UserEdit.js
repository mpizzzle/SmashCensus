var profile = [{
              "firstname": " ", 
               "surname": " ", 
               "tag": " ",
               "region": " ",
               "main": " ",
               "secondaries": [ ]
    }
]

function lookUpProfile(tag, prop){
// Only change code below this line
  for (var i = 0; i < profile.length; i++){
    if (profile[i].tag === tag){
        if (profile[i].hasOwnProperty(prop)){
          return profile[i][prop];
        }
          else {
            return "No such information for that contact exists";
          }    
    }    
 }
          return "No Smasher with that name exists in the SmashCensus";
}

profile[0]={
              "firstname": "Stephen", 
               "surname": "Percival ", 
               "tag": "Stan Sasquatch",
               "region": "Berkshire",
               "main": "Fox",
               "secondaries": ["Ganon", "Marth"]
    }


function takeUserChoice () {
var choice = " "
choice = prompt("Type new to add a smasher or search to search the SmashCensus")

if (choice == "search"){
  lookUpTag = prompt("Search for a tag (case sensitive)")
  lookUpProp = prompt ("What information would you like to look up? (firstname, surname, region, main or secondaries)")
  console.log(lookUpProfile(lookUpTag, lookUpProp))
}
else if (choice == "new") {
  console.log("feature not ready yet");
}
else {
  takeUserChoice()
}                          
}  

takeUserChoice();
  
