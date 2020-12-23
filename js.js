	function calculate()
{
	
	var firstinputid=0;
	
	var  current_user_bill =parseInt(document.getElementById("current_user_bill_no").value);
	for( i=1;i<current_user_bill;i++){
		var inputid=document.getElementById("firstinputid_"+i).value;
		//alert(inputid);
		firstinputid=parseInt(firstinputid)+parseInt(inputid-((inputid/100)*10));
		
		
		
	}
	
	//var firstinputid=document.getElementById("firstinputid").value;
	var selecctid=document.getElementById("selecctid").value;
	var secondinputid=document.getElementById("secondinputid").value;
	var selectid=document.getElementById("selectid").value;
	var secondselectid=document.getElementById("secondselectid").value;
	var thirdselectid=document.getElementById("thirdselectid").value;
	var write="";
	
	if(firstinputid==0||selecctid==""|| secondinputid==0)
	{
		
		alert("please enter values");
	}
	else if(selecctid==selectid)
	{
		var voutstanding=(firstinputid/100)*15;
		var outstanding=voutstanding/secondinputid;
		
		document.getElementById("amountt").innerHTML=outstanding;
		
	}
	else if(selecctid==secondselectid)
	{
		var vgood=(firstinputid/100)*10;
		var good= vgood/secondinputid;
		
		
		document.getElementById("amountt").innerHTML=good;
		
	
	}
		else{
			
			var vok=(firstinputid/100)*5;
		var ok=vok/secondinputid;
		
		document.getElementById("amountt").innerHTML=ok;
		
		}
		
	
}


function pankaj(){
	
	
	var current_user_bill=document.getElementById("current_user_bill_no").value;
	
	//alert(current_user_bill);
		document.getElementById("add_users_bill").insertAdjacentHTML("afterend",'<p>Rs. Bill: '+current_user_bill+' <input type="text" class="firstinputid" id="firstinputid_'+current_user_bill+'" placeholder="Bill Amount"></p>');
	
	
	document.getElementById("current_user_bill_no").value=parseInt(current_user_bill)+1;
}
	
		
		
		
		
		
		