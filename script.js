const img1 = document.getElementById("geeta-img");
img1.addEventListener("animationend", ()=>{
    document.getElementById("ht").classList.add("added");
})

const t = document.getElementById("ht");

t.addEventListener('animationend',()=>{
    document.getElementById("cgt").classList.add("cadded");
})

const bt = document.getElementById("generatorbutton");
bt.addEventListener('click',()=>{
	document.getElementById("hd").style.display = "none";
	document.getElementById("cgt").style.display = "none";
	document.getElementById("finalbox").classList.add('final');
	document.getElementById("finalbox").classList.remove('f');
	const a = fetchdata();
	a.then(quotes=>{
		let index = Math.floor(Math.random()*30);
		let text = quotes.quotes[index];
		document.getElementById("insert").innerHTML = text;
	});
	setTimeout(()=>{
		const resp = confirm('return?');
		if(resp){
			location.reload();
		}else{
			console.log("");
		}
	},10000);

})

const bt2 = document.getElementById("fbtn");
bt2.addEventListener('click',()=>{
	const b = fetchdata();
	b.then(quotes=>{
		let index = Math.floor(Math.random()*31);
		let text = quotes.quotes[index];
		document.getElementById("insert").innerHTML = text;
	});
	
})
let quotes;
async function fetchdata(){
	const ans = await fetch('./data.json');
	quotes = await ans.json();
	return quotes;
}



