
// Author - Deep Katariya

var items= [];
var itemArr =[ [] ];
(function ($) {

    $('a.items').click(function() {  
        var iD = $(this).attr('id');
        var iDN = parseInt(iD);

        //  making an AJAX request to API to retrieve item details using unique Item ID
        $.getJSON('https://us.api.battle.net/wow/item/'+items[iDN]+'?locale=en_US&apikey=77jkap3zw49fed8fga5njf2urkr63mct', function (data){
            document.getElementById('val_name').innerHTML = data.name;
            document.getElementById('val_bp').innerHTML = data.buyPrice;
            document.getElementById('val_sp').innerHTML = data.sellPrice;
            document.getElementById('val_req_lvl').innerHTML = data.requiredLevel;
        });
    });


    $('button').on('click',function() {
        var cname=document.getElementById("cname").value;
        var rname=document.getElementById("rname").value;

        cname = cname.trim();
        rname = rname.trim();
        var success = false;


        // Making an AJAX request to API to retrieve Character using character name and realm name
        // $.getJSON('https://us.api.battle.net/wow/character/Dalaran/Regex?fields=stats&locale=en_US&apikey=77jkap3zw49fed8fga5njf2urkr63mct', function (data) {
        $.getJSON('https://us.api.battle.net/wow/character/'+rname+'/'+cname+'?fields=stats&locale=en_US&apikey=77jkap3zw49fed8fga5njf2urkr63mct', function (data){ 

            success = true;
            
            document.getElementById('val_lvl').innerHTML = data.level;
            document.getElementById('val_hlth').innerHTML = data.stats.health;
            document.getElementById('val_str').innerHTML = data.stats.str;
            document.getElementById('val_agi').innerHTML = data.stats.agi;
            document.getElementById('val_int').innerHTML = data.stats.int;
            document.getElementById('val_sta').innerHTML = data.stats.sta;
            document.getElementById('val_hst').innerHTML = data.stats.haste +'%';


        
            // making an AJAX request to API to retrieve all the items equipped to the character
            // $.getJSON('https://us.api.battle.net/wow/character/Dalaran/Regex?fields=items&locale=en_US&apikey=77jkap3zw49fed8fga5njf2urkr63mct', function (data){
            $.getJSON('https://us.api.battle.net/wow/character/'+rname+'/'+cname+'?fields=items&locale=en_US&apikey=77jkap3zw49fed8fga5njf2urkr63mct', function (data){

                items.push(data.items.head.id);
                items.push(data.items.neck.id);
                items.push(data.items.shoulder.id);
                items.push(data.items.back.id);
                items.push(data.items.chest.id);
                items.push(data.items.shirt.id);
                items.push(data.items.wrist.id);
                items.push(data.items.hands.id);
                items.push(data.items.waist.id);
                items.push(data.items.legs.id);
                items.push(data.items.feet.id);
                items.push(data.items.finger1.id);
                items.push(data.items.finger2.id);
                items.push(data.items.trinket1.id);
                items.push(data.items.trinket2.id);
                items.push(data.items.mainHand.id);
                
                console.log('This is : '+items);

            });
            document.getElementById('dyn_div').style ="display:block";
            document.getElementById('bt').disabled = true;
            
        });
             setTimeout(function() {
    
    // handling 404 Not Found Error.
    if (!success)
    {
        
        alert("No such user found. Please enter valid character and realm name"); // string was "Houston, we have a problem."
    }
}, 500);

        });
        
       

    }(jQuery));